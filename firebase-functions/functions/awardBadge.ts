import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

interface BadgeData {
  userId: string;
  badgeType: string;
  boardId?: string;
  value?: number;
}

/**
 * Award badge to user
 * Triggered by HTTP request or Firestore event
 */
export const awardBadge = functions.https.onCall(async (data: BadgeData, context) => {
  // Verify authentication
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated'
    );
  }

  const { userId, badgeType, boardId, value } = data;

  try {
    const db = admin.firestore();
    const badgeRef = db.collection('badges').doc();

    const badge = {
      userId,
      badgeType,
      boardId: boardId || null,
      value: value || 0,
      awardedAt: admin.firestore.FieldValue.serverTimestamp(),
      claimed: false
    };

    await badgeRef.set(badge);

    // Update user's badge count
    const userRef = db.collection('users').doc(userId);
    await userRef.update({
      badgeCount: admin.firestore.FieldValue.increment(1),
      lastBadgeAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Log achievement
    await db.collection('achievements').add({
      userId,
      type: 'badge',
      badgeType,
      badgeId: badgeRef.id,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    functions.logger.info(`Badge awarded: ${badgeType} to user ${userId}`);

    return {
      success: true,
      badgeId: badgeRef.id,
      badgeType
    };
  } catch (error) {
    functions.logger.error('Error awarding badge:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to award badge'
    );
  }
});

/**
 * Auto-award badges on certain achievements
 * Triggered when a board is completed
 */
export const onBoardCompleted = functions.firestore
  .document('boards/{boardId}')
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();

    // Check if board was just completed
    if (!before.completed && after.completed) {
      const userId = after.userId;
      const boardId = context.params.boardId;

      // Award completion badge
      await awardBadge.run({
        userId,
        badgeType: 'board-completed',
        boardId,
        value: after.totalTasks || 0
      }, {
        auth: { uid: userId }
      } as any);

      functions.logger.info(`Board completed badge awarded to ${userId}`);
    }
  });
