/**
 * Format progress data for display
 * Community-contributed utility function
 */

export interface ProgressData {
  completed: number;
  total: number;
  startDate?: Date;
  endDate?: Date;
}

export interface FormattedProgress {
  percentage: number;
  display: string;
  emoji: string;
  message: string;
}

/**
 * Format progress percentage with visual indicators
 */
export function formatProgress(data: ProgressData): FormattedProgress {
  const { completed, total } = data;
  const percentage = Math.min((completed / total) * 100, 100);

  let emoji = '📊';
  let message = 'เริ่มต้นดี!';

  if (percentage >= 100) {
    emoji = '🎉';
    message = 'สำเร็จแล้ว!';
  } else if (percentage >= 75) {
    emoji = '🔥';
    message = 'ใกล้เป้าแล้ว!';
  } else if (percentage >= 50) {
    emoji = '💪';
    message = 'ครึ่งทางแล้ว!';
  } else if (percentage >= 25) {
    emoji = '✨';
    message = 'เริ่มเห็นผล!';
  }

  return {
    percentage: Math.round(percentage * 10) / 10, // Round to 1 decimal
    display: `${completed}/${total}`,
    emoji,
    message
  };
}

/**
 * Calculate estimated completion time
 */
export function estimateCompletion(data: ProgressData): Date | null {
  if (!data.startDate || data.completed === 0) {
    return null;
  }

  const now = new Date();
  const elapsed = now.getTime() - data.startDate.getTime();
  const rate = data.completed / elapsed; // tasks per millisecond
  const remaining = data.total - data.completed;
  const estimatedMs = remaining / rate;

  return new Date(now.getTime() + estimatedMs);
}

/**
 * Get progress bar characters
 */
export function getProgressBar(percentage: number, length: number = 20): string {
  const filled = Math.round((percentage / 100) * length);
  const empty = length - filled;
  return '█'.repeat(filled) + '░'.repeat(empty);
}

/**
 * Format time remaining in human-readable format
 */
export function formatTimeRemaining(estimatedEnd: Date): string {
  const now = new Date();
  const diff = estimatedEnd.getTime() - now.getTime();

  if (diff <= 0) {
    return 'เสร็จแล้ว';
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days} วัน ${hours} ชั่วโมง`;
  } else if (hours > 0) {
    return `${hours} ชั่วโมง ${minutes} นาที`;
  } else {
    return `${minutes} นาที`;
  }
}
