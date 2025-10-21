/**
 * Firebase Cloud Function for awarding badges to users
 * This module handles badge awards when users complete quests or achieve milestones
 */

/**
 * Interface for badge data
 */
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
}

/**
 * Interface for user badge award
 */
export interface BadgeAward {
  userId: string;
  badgeId: string;
  timestamp: number;
  questId?: string;
  metadata?: Record<string, any>;
}

/**
 * Interface for badge award result
 */
export interface BadgeAwardResult {
  success: boolean;
  message: string;
  badge?: Badge;
  award?: BadgeAward;
}

/**
 * Available badges in the MeeChain system
 */
export const AVAILABLE_BADGES: Record<string, Badge> = {
  'first-quest': {
    id: 'first-quest',
    name: 'First Quest Complete',
    description: 'Completed your first quest on MeeChain',
    icon: '🎯',
    rarity: 'common',
    points: 10
  },
  'smart-contract-deployer': {
    id: 'smart-contract-deployer',
    name: 'Smart Contract Deployer',
    description: 'Successfully deployed a smart contract',
    icon: '📜',
    rarity: 'rare',
    points: 50
  },
  'module-creator': {
    id: 'module-creator',
    name: 'Module Creator',
    description: 'Created a new module for MeeChain',
    icon: '🔧',
    rarity: 'epic',
    points: 100
  },
  'contributor': {
    id: 'contributor',
    name: 'Contributor',
    description: 'Contributed to the MeeChain ecosystem',
    icon: '🌟',
    rarity: 'rare',
    points: 75
  },
  'quest-master': {
    id: 'quest-master',
    name: 'Quest Master',
    description: 'Completed 10 quests',
    icon: '👑',
    rarity: 'legendary',
    points: 500
  }
};

/**
 * Award a badge to a user
 * 
 * @param userId - User ID to award the badge to
 * @param badgeId - Badge ID to award
 * @param questId - Optional quest ID that triggered the award
 * @param metadata - Optional additional metadata
 * @returns Badge award result
 * 
 * @example
 * ```typescript
 * const result = await awardBadge(
 *   'user123',
 *   'first-quest',
 *   'quest001'
 * );
 * 
 * if (result.success) {
 *   console.log(`Badge awarded: ${result.badge?.name}`);
 * }
 * ```
 */
export async function awardBadge(
  userId: string,
  badgeId: string,
  questId?: string,
  metadata?: Record<string, any>
): Promise<BadgeAwardResult> {
  try {
    // Validate inputs
    if (!userId) {
      return {
        success: false,
        message: 'User ID is required'
      };
    }

    if (!badgeId) {
      return {
        success: false,
        message: 'Badge ID is required'
      };
    }

    // Get badge information
    const badge = AVAILABLE_BADGES[badgeId];
    if (!badge) {
      return {
        success: false,
        message: `Badge not found: ${badgeId}`
      };
    }

    // Create badge award
    const award: BadgeAward = {
      userId,
      badgeId,
      timestamp: Date.now(),
      questId,
      metadata
    };

    // In a real implementation, this would:
    // 1. Check if user already has this badge
    // 2. Save to Firestore database
    // 3. Update user's total points
    // 4. Trigger notifications
    // 5. Update leaderboard

    console.log(`🎖️ Awarding badge to user ${userId}`);
    console.log(`Badge: ${badge.name} (${badge.icon})`);
    console.log(`Points: +${badge.points}`);
    if (questId) {
      console.log(`Quest: ${questId}`);
    }

    // Simulate database save
    await saveToDatabase(award);

    return {
      success: true,
      message: `Successfully awarded ${badge.name} to user ${userId}`,
      badge,
      award
    };
  } catch (error) {
    console.error('❌ Error awarding badge:', error);
    return {
      success: false,
      message: `Failed to award badge: ${error instanceof Error ? error.message : 'Unknown error'}`
    };
  }
}

/**
 * Check if a user has a specific badge
 * 
 * @param userId - User ID to check
 * @param badgeId - Badge ID to check
 * @returns True if user has the badge
 */
export async function hasBadge(userId: string, badgeId: string): Promise<boolean> {
  try {
    // In a real implementation, this would query Firestore
    // For now, we simulate the check
    console.log(`Checking if user ${userId} has badge ${badgeId}`);
    
    // Simulate database query
    const userBadges = await getUserBadges(userId);
    return userBadges.some(award => award.badgeId === badgeId);
  } catch (error) {
    console.error('❌ Error checking badge:', error);
    return false;
  }
}

/**
 * Get all badges for a user
 * 
 * @param userId - User ID to get badges for
 * @returns Array of badge awards
 */
export async function getUserBadges(userId: string): Promise<BadgeAward[]> {
  try {
    // In a real implementation, this would query Firestore
    console.log(`Getting badges for user ${userId}`);
    
    // Simulate database query - returns empty array for now
    return [];
  } catch (error) {
    console.error('❌ Error getting user badges:', error);
    return [];
  }
}

/**
 * Calculate total points from user's badges
 * 
 * @param userId - User ID to calculate points for
 * @returns Total points
 */
export async function calculateUserPoints(userId: string): Promise<number> {
  try {
    const userBadges = await getUserBadges(userId);
    let totalPoints = 0;

    for (const award of userBadges) {
      const badge = AVAILABLE_BADGES[award.badgeId];
      if (badge) {
        totalPoints += badge.points;
      }
    }

    return totalPoints;
  } catch (error) {
    console.error('❌ Error calculating points:', error);
    return 0;
  }
}

/**
 * Simulate saving to database
 * In production, this would use Firebase Admin SDK
 */
async function saveToDatabase(award: BadgeAward): Promise<void> {
  // Simulate async database operation
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('✅ Badge award saved to database');
      resolve();
    }, 100);
  });
}
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
