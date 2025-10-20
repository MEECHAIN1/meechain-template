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
}
