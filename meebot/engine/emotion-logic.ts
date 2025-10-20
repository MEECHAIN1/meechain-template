/**
 * MeeBot Emotion Engine
 * จัดการอารมณ์และพฤติกรรมของ MeeBot ตามความก้าวหน้าของผู้ใช้
 */

export type EmotionState = 'happy' | 'encouraging' | 'celebrating' | 'concerned' | 'proud'

export interface EmotionContext {
  progressPercentage: number
  tasksCompleted: number
  totalTasks: number
  lastUpdateTime: Date
  streakDays: number
}

export class EmotionEngine {
  /**
   * กำหนดอารมณ์ของ MeeBot ตามบริบท
   */
  static determineEmotion(context: EmotionContext): EmotionState {
    const { progressPercentage, streakDays } = context

    // กรณีทำงานเสร็จแล้ว
    if (progressPercentage >= 100) {
      return 'celebrating'
    }

    // กรณีมี streak สูง
    if (streakDays >= 7) {
      return 'proud'
    }

    // กรณีความก้าวหน้าน้อย
    if (progressPercentage < 25) {
      return 'encouraging'
    }

    // กรณีปกติ
    return 'happy'
  }

  /**
   * คำนวณระดับความรุนแรงของอารมณ์ (0-1)
   */
  static getEmotionIntensity(context: EmotionContext): number {
    const { progressPercentage, streakDays } = context

    if (progressPercentage >= 100) {
      return 1.0
    }

    if (streakDays >= 7) {
      return 0.9
    }

    if (progressPercentage > 75) {
      return 0.8
    }

    if (progressPercentage < 25) {
      return 0.7
    }

    return 0.5
  }
}
