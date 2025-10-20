import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin if not already initialized
if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  earnedAt: Date;
}

export interface AwardBadgeRequest {
  userId: string;
  badgeType: string;
  metadata?: {
    prNumber?: number;
    reason?: string;
    [key: string]: any;
  };
}

/**
 * Award badge to a user
 * Cloud Function triggered via HTTP request
 */
export const awardBadge = functions.https.onCall(
  async (data: AwardBadgeRequest, context) => {
    // Verify authentication
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'User must be authenticated'
      );
    }

    const { userId, badgeType, metadata } = data;

    // Validate input
    if (!userId || !badgeType) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'userId and badgeType are required'
      );
    }

    try {
      // Get badge definition
      const badgeDefinition = getBadgeDefinition(badgeType);
      
      if (!badgeDefinition) {
        throw new functions.https.HttpsError(
          'not-found',
          `Badge type '${badgeType}' not found`
        );
      }

      // Check if user already has this badge
      const existingBadge = await db
        .collection('users')
        .doc(userId)
        .collection('badges')
        .doc(badgeType)
        .get();

      if (existingBadge.exists) {
        // Update badge count instead
        await existingBadge.ref.update({
          count: admin.firestore.FieldValue.increment(1),
          lastEarnedAt: admin.firestore.FieldValue.serverTimestamp(),
          metadata: metadata || {}
        });

        return {
          success: true,
          message: 'Badge count incremented',
          isNew: false,
          badge: badgeDefinition
        };
      }

      // Award new badge
      const badge: Badge = {
        id: badgeType,
        name: badgeDefinition.name,
        description: badgeDefinition.description,
        emoji: badgeDefinition.emoji,
        tier: badgeDefinition.tier,
        earnedAt: new Date()
      };

      await db
        .collection('users')
        .doc(userId)
        .collection('badges')
        .doc(badgeType)
        .set({
          ...badge,
          count: 1,
          earnedAt: admin.firestore.FieldValue.serverTimestamp(),
          metadata: metadata || {}
        });

      // Update user's badge count
      await db
        .collection('users')
        .doc(userId)
        .set(
          {
            badgeCount: admin.firestore.FieldValue.increment(1),
            lastBadgeEarned: badgeType,
            lastBadgeEarnedAt: admin.firestore.FieldValue.serverTimestamp()
          },
          { merge: true }
        );

      // Log badge award
      await db.collection('badgeAwards').add({
        userId,
        badgeType,
        awardedAt: admin.firestore.FieldValue.serverTimestamp(),
        metadata: metadata || {},
        awardedBy: context.auth.uid
      });

      return {
        success: true,
        message: 'Badge awarded successfully',
        isNew: true,
        badge: badgeDefinition
      };
    } catch (error) {
      console.error('Error awarding badge:', error);
      throw new functions.https.HttpsError(
        'internal',
        'Failed to award badge',
        error
      );
    }
  }
);

/**
 * Get badge definition by type
 */
function getBadgeDefinition(badgeType: string): any | null {
  const badges: { [key: string]: any } = {
    'first-contribution': {
      name: 'First Contribution',
      description: 'Awarded for your first merged PR',
      emoji: '🌟',
      tier: 'bronze'
    },
    'bug-hunter': {
      name: 'Bug Hunter',
      description: 'Awarded for fixing bugs',
      emoji: '🐛',
      tier: 'silver'
    },
    'feature-creator': {
      name: 'Feature Creator',
      description: 'Awarded for creating new features',
      emoji: '✨',
      tier: 'silver'
    },
    'documentation-hero': {
      name: 'Documentation Hero',
      description: 'Awarded for improving documentation',
      emoji: '📚',
      tier: 'bronze'
    },
    'module-builder': {
      name: 'Module Builder',
      description: 'Awarded for creating external modules',
      emoji: '🧩',
      tier: 'gold'
    },
    'active-contributor': {
      name: 'Active Contributor',
      description: 'Awarded for 5+ merged PRs',
      emoji: '🔥',
      tier: 'gold'
    },
    'core-contributor': {
      name: 'Core Contributor',
      description: 'Awarded for 20+ merged PRs',
      emoji: '🏅',
      tier: 'platinum'
    }
  };

  return badges[badgeType] || null;
}

/**
 * Get all badges for a user
 */
export const getUserBadges = functions.https.onCall(
  async (data: { userId: string }, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'User must be authenticated'
      );
    }

    const { userId } = data;

    try {
      const badgesSnapshot = await db
        .collection('users')
        .doc(userId)
        .collection('badges')
        .orderBy('earnedAt', 'desc')
        .get();

      const badges = badgesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      return {
        success: true,
        badges
      };
    } catch (error) {
      console.error('Error getting badges:', error);
      throw new functions.https.HttpsError(
        'internal',
        'Failed to get badges',
        error
      );
    }
  }
);
