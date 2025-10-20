import * as admin from 'firebase-admin';
import { awardBadge, onBoardCompleted } from './awardBadge';
import { logProgress } from './logProgress';
import { triggerVoice, generateMeeBotResponse } from './triggerVoice';

// Initialize Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp();
}

// Export all functions
export {
  awardBadge,
  onBoardCompleted,
  logProgress,
  triggerVoice,
  generateMeeBotResponse
};
