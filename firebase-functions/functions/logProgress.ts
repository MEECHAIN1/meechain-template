import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

interface ProgressData {
  userId: string;
  boardId: string;
  taskId: string;
  completed: boolean;
  timestamp?: number;
}

/**
 * Log progress when task is updated
 */
export const logProgress = functions.https.onCall(async (data: ProgressData, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated'
    );
  }

  const { userId, boardId, taskId, completed } = data;

  try {
    const db = admin.firestore();

    // Log to progress collection
    await db.collection('progress').add({
      userId,
      boardId,
      taskId,
      completed,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      source: 'user-action'
    });

    // Update board progress
    const boardRef = db.collection('boards').doc(boardId);
    const boardDoc = await boardRef.get();

    if (!boardDoc.exists) {
      throw new functions.https.HttpsError('not-found', 'Board not found');
    }

    const boardData = boardDoc.data();
    const completedTasks = completed 
      ? (boardData?.completedTasks || 0) + 1
      : Math.max((boardData?.completedTasks || 0) - 1, 0);

    await boardRef.update({
      completedTasks,
      lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
      progressPercentage: (completedTasks / (boardData?.totalTasks || 1)) * 100
    });

    // Check for streak
    await checkAndUpdateStreak(userId);

    functions.logger.info(`Progress logged for user ${userId}, board ${boardId}`);

    return {
      success: true,
      completedTasks,
      progressPercentage: (completedTasks / (boardData?.totalTasks || 1)) * 100
    };
  } catch (error) {
    functions.logger.error('Error logging progress:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to log progress'
    );
  }
});

/**
 * Check and update user's streak
 */
async function checkAndUpdateStreak(userId: string) {
  const db = admin.firestore();
  const userRef = db.collection('users').doc(userId);
  const userDoc = await userRef.get();

  if (!userDoc.exists) return;

  const userData = userDoc.data();
  const lastActiveDate = userData?.lastActiveDate?.toDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let streakDays = userData?.streakDays || 0;

  if (lastActiveDate) {
    const lastActive = new Date(lastActiveDate);
    lastActive.setHours(0, 0, 0, 0);

    const daysDiff = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
      // Same day, no change
      return;
    } else if (daysDiff === 1) {
      // Consecutive day, increment streak
      streakDays++;
    } else {
      // Streak broken
      streakDays = 1;
    }
  } else {
    streakDays = 1;
  }

  await userRef.update({
    streakDays,
    lastActiveDate: admin.firestore.FieldValue.serverTimestamp()
  });

  functions.logger.info(`Streak updated for user ${userId}: ${streakDays} days`);
}
