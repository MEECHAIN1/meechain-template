import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

interface VoiceTriggerData {
  userId: string;
  emotion: 'happy' | 'encouraging' | 'celebrating';
  message: string;
  autoPlay?: boolean;
}

/**
 * Trigger MeeBot voice response
 */
export const triggerVoice = functions.https.onCall(async (data: VoiceTriggerData, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated'
    );
  }

  const { userId, emotion, message, autoPlay = false } = data;

  try {
    const db = admin.firestore();

    // Log voice trigger
    await db.collection('voiceEvents').add({
      userId,
      emotion,
      message,
      autoPlay,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    // Get TTS configuration for user
    const userRef = db.collection('users').doc(userId);
    const userDoc = await userRef.get();
    const ttsEnabled = userDoc.exists ? userDoc.data()?.ttsEnabled !== false : true;

    functions.logger.info(`Voice triggered for user ${userId}: ${emotion} - ${message}`);

    return {
      success: true,
      emotion,
      message,
      ttsEnabled,
      shouldPlay: ttsEnabled && autoPlay
    };
  } catch (error) {
    functions.logger.error('Error triggering voice:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to trigger voice'
    );
  }
});

/**
 * Generate MeeBot response based on context
 */
export const generateMeeBotResponse = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated'
    );
  }

  const { userId, boardId, progressPercentage } = data;

  try {
    const db = admin.firestore();
    
    // Get user data for personalization
    const userRef = db.collection('users').doc(userId);
    const userDoc = await userRef.get();
    const streakDays = userDoc.exists ? userDoc.data()?.streakDays || 0 : 0;

    // Determine emotion and message based on progress
    let emotion: 'happy' | 'encouraging' | 'celebrating' = 'happy';
    let message = '';

    if (progressPercentage >= 100) {
      emotion = 'celebrating';
      message = 'ยินดีด้วย! คุณทำสำเร็จแล้ว! 🎉';
    } else if (progressPercentage >= 75) {
      emotion = 'encouraging';
      message = 'ใกล้เป้าแล้ว! ผลักดันต่ออีกนิด! 🏆';
    } else if (progressPercentage >= 50) {
      emotion = 'happy';
      message = 'ครึ่งทางแล้ว! สุดยอดไปเลย! 🎯';
    } else if (progressPercentage >= 25) {
      emotion = 'encouraging';
      message = 'เริ่มเห็นผลแล้ว! เดินหน้าต่อไป 💪';
    } else {
      emotion = 'happy';
      message = 'มาทำทีละขั้นตอนกันนะ! 😊';
    }

    // Add streak bonus message
    if (streakDays >= 7) {
      message += ` และ streak ${streakDays} วันสุดยอด! 🔥`;
    }

    return {
      success: true,
      emotion,
      message,
      streakDays
    };
  } catch (error) {
    functions.logger.error('Error generating response:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to generate response'
    );
  }
});
