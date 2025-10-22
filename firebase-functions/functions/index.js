// Firebase Cloud Functions entry point
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Firebase Admin
admin.initializeApp();

// Export badge functions
exports.awardBadge = functions.https.onCall(async (data, context) => {
  const { userId, badgeId } = data;
  
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  await admin.firestore()
    .collection('users')
    .doc(userId)
    .collection('badges')
    .doc(badgeId)
    .set({
      awardedAt: admin.firestore.FieldValue.serverTimestamp(),
      badgeId: badgeId
    });
  
  return { success: true };
});

// Export quest functions
exports.completeQuest = functions.https.onCall(async (data, context) => {
  const { userId, questId } = data;
  
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  const quest = await admin.firestore()
    .collection('quests')
    .doc(questId)
    .get();
  
  if (!quest.exists) {
    throw new functions.https.HttpsError('not-found', 'Quest not found');
  }
  
  await admin.firestore()
    .collection('users')
    .doc(userId)
    .collection('completedQuests')
    .doc(questId)
    .set({
      questId,
      completedAt: admin.firestore.FieldValue.serverTimestamp(),
      rewards: quest.data().rewards
    });
  
  return { success: true, rewards: quest.data().rewards };
});

// Export logging functions
exports.logAction = functions.https.onCall(async (data, context) => {
  const { userId, action, metadata } = data;
  
  await admin.firestore()
    .collection('logs')
    .add({
      userId,
      action,
      metadata,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
  
  return { success: true };
});

// Welcome message for new users
exports.onUserCreate = functions.auth.user().onCreate(async (user) => {
  await admin.firestore()
    .collection('users')
    .doc(user.uid)
    .set({
      email: user.email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      meebotGreeting: "ยินดีต้อนรับสู่ฐาน MeeChain ครับ! 💙"
    });
  
  return null;
});
