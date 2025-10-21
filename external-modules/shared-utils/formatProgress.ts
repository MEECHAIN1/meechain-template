/**
 * Interface for progress data
 */
export interface ProgressData {
  current: number;
  total: number;
  questName?: string;
  moduleName?: string;
  timestamp?: number;
}

/**
 * Interface for formatted progress result
 */
export interface FormattedProgress {
  percentage: number;
  progressBar: string;
  message: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

/**
 * Format progress data into a user-friendly display
 * 
 * @param progress - Progress data to format
 * @param barLength - Length of the progress bar (default: 20)
 * @returns Formatted progress information
 * 
 * @example
 * ```typescript
 * const progress = formatProgress({
 *   current: 7,
 *   total: 10,
 *   questName: 'Complete Smart Contract Quest',
 *   moduleName: 'deployContract'
 * });
 * 
 * console.log(progress.message);
 * // Output: "[deployContract] Complete Smart Contract Quest: 70% ████████████████░░░░ (7/10)"
 * ```
 */
export function formatProgress(
  progress: ProgressData,
  barLength: number = 20
): FormattedProgress {
  // Calculate percentage
  const percentage = progress.total > 0 
    ? Math.round((progress.current / progress.total) * 100) 
    : 0;

  // Determine status
  let status: FormattedProgress['status'];
  if (progress.current === 0) {
    status = 'not-started';
  } else if (progress.current >= progress.total) {
    status = 'completed';
  } else {
    status = 'in-progress';
  }

  // Create progress bar
  const filledLength = Math.round((percentage / 100) * barLength);
  const emptyLength = barLength - filledLength;
  const progressBar = '█'.repeat(filledLength) + '░'.repeat(emptyLength);

  // Build message
  let message = '';
  
  if (progress.moduleName) {
    message += `[${progress.moduleName}] `;
  }
  
  if (progress.questName) {
    message += `${progress.questName}: `;
  }
  
  message += `${percentage}% ${progressBar} (${progress.current}/${progress.total})`;

  // Add status emoji
  const statusEmoji = {
    'not-started': '⭕',
    'in-progress': '🔄',
    'completed': '✅'
  };
  message = `${statusEmoji[status]} ${message}`;

  return {
    percentage,
    progressBar,
    message,
    status
  };
}

/**
 * Format multiple progress items into a summary
 * 
 * @param progressItems - Array of progress data
 * @returns Summary message with all progress items
 * 
 * @example
 * ```typescript
 * const summary = formatProgressSummary([
 *   { current: 10, total: 10, questName: 'Quest 1' },
 *   { current: 5, total: 10, questName: 'Quest 2' },
 *   { current: 0, total: 10, questName: 'Quest 3' }
 * ]);
 * 
 * console.log(summary);
 * ```
 */
export function formatProgressSummary(progressItems: ProgressData[]): string {
  if (progressItems.length === 0) {
    return '📋 No progress items to display';
  }

  const formattedItems = progressItems.map(item => formatProgress(item));
  
  const totalCompleted = formattedItems.filter(item => item.status === 'completed').length;
  const totalInProgress = formattedItems.filter(item => item.status === 'in-progress').length;
  const totalNotStarted = formattedItems.filter(item => item.status === 'not-started').length;

  let summary = '📊 Progress Summary\n';
  summary += '━'.repeat(50) + '\n';
  
  formattedItems.forEach(item => {
    summary += item.message + '\n';
  });
  
  summary += '━'.repeat(50) + '\n';
  summary += `✅ Completed: ${totalCompleted} | `;
  summary += `🔄 In Progress: ${totalInProgress} | `;
  summary += `⭕ Not Started: ${totalNotStarted}\n`;
  summary += `Total: ${progressItems.length} items`;

  return summary;
}

/**
 * Calculate overall progress percentage from multiple items
 * 
 * @param progressItems - Array of progress data
 * @returns Overall progress percentage (0-100)
 */
export function calculateOverallProgress(progressItems: ProgressData[]): number {
  if (progressItems.length === 0) {
    return 0;
  }

  const totalCurrent = progressItems.reduce((sum, item) => sum + item.current, 0);
  const totalMax = progressItems.reduce((sum, item) => sum + item.total, 0);

  return totalMax > 0 ? Math.round((totalCurrent / totalMax) * 100) : 0;
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
