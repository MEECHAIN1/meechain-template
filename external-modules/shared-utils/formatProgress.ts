export interface ProgressData {
  completed: number;
  total: number;
  startTime: Date;
  itemName?: string;
}

export interface FormattedProgress {
  percentage: number;
  percentageFormatted: string;
  completedTasks: number;
  remainingTasks: number;
  estimatedTimeRemaining: string;
  estimatedTimeRemainingMs: number;
  progressBar: string;
}

/**
 * Format progress data for display
 * @param data - Progress information
 * @returns Formatted progress details
 */
export function formatProgress(data: ProgressData): FormattedProgress {
  const { completed, total, startTime, itemName = 'task' } = data;
  
  // Calculate percentage
  const percentage = total > 0 ? (completed / total) * 100 : 0;
  const percentageFormatted = `${percentage.toFixed(1)}%`;
  
  // Calculate remaining
  const remaining = total - completed;
  
  // Calculate estimated time
  const elapsed = Date.now() - startTime.getTime();
  const avgTimePerTask = completed > 0 ? elapsed / completed : 0;
  const estimatedRemaining = avgTimePerTask * remaining;
  
  // Create progress bar
  const progressBar = createProgressBar(percentage);
  
  return {
    percentage,
    percentageFormatted,
    completedTasks: completed,
    remainingTasks: remaining,
    estimatedTimeRemaining: formatTime(estimatedRemaining),
    estimatedTimeRemainingMs: estimatedRemaining,
    progressBar
  };
}

/**
 * Format milliseconds to human-readable time
 * @param ms - Time in milliseconds
 * @returns Formatted time string
 */
export function formatTime(ms: number): string {
  if (ms < 1000) {
    return 'less than a second';
  }
  
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) {
    const remainingHours = hours % 24;
    return `${days}d ${remainingHours}h`;
  }
  
  if (hours > 0) {
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
  
  if (minutes > 0) {
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  }
  
  return `${seconds}s`;
}

/**
 * Create a visual progress bar
 * @param percentage - Progress percentage (0-100)
 * @param width - Width of progress bar (default: 20)
 * @returns Progress bar string
 */
export function createProgressBar(percentage: number, width: number = 20): string {
  const filled = Math.round((percentage / 100) * width);
  const empty = width - filled;
  
  const filledChar = '█';
  const emptyChar = '░';
  
  return `[${filledChar.repeat(filled)}${emptyChar.repeat(empty)}]`;
}

/**
 * Calculate estimated completion time
 * @param data - Progress data
 * @returns Estimated completion date
 */
export function estimatedCompletionTime(data: ProgressData): Date {
  const { completed, total, startTime } = data;
  
  if (completed === 0) {
    return new Date(); // Cannot estimate without any completed tasks
  }
  
  const elapsed = Date.now() - startTime.getTime();
  const avgTimePerTask = elapsed / completed;
  const remaining = total - completed;
  const estimatedRemaining = avgTimePerTask * remaining;
  
  return new Date(Date.now() + estimatedRemaining);
}

/**
 * Get progress status emoji
 * @param percentage - Progress percentage
 * @returns Status emoji
 */
export function getProgressEmoji(percentage: number): string {
  if (percentage === 0) return '🔵';
  if (percentage < 25) return '🟢';
  if (percentage < 50) return '🟡';
  if (percentage < 75) return '🟠';
  if (percentage < 100) return '🔴';
  return '✅';
}

/**
 * Create detailed progress report
 * @param data - Progress data
 * @returns Formatted progress report
 */
export function createProgressReport(data: ProgressData): string {
  const formatted = formatProgress(data);
  const emoji = getProgressEmoji(formatted.percentage);
  const estimatedCompletion = estimatedCompletionTime(data);
  
  return `
${emoji} Progress Report
${formatted.progressBar} ${formatted.percentageFormatted}

Completed: ${formatted.completedTasks}/${data.total} ${data.itemName || 'tasks'}
Remaining: ${formatted.remainingTasks}
Estimated time: ${formatted.estimatedTimeRemaining}
Estimated completion: ${estimatedCompletion.toLocaleString()}
  `.trim();
}

export const moduleInfo = {
  name: "format-progress",
  version: "1.0.0",
  author: "MeeChain Community",
  description: "Format and display progress information with visual indicators",
  tags: ["utility", "formatting", "progress", "ui"],
  dependencies: []
};
