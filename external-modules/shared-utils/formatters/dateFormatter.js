// Example date formatter utility
// This is an external module that can be loaded dynamically

/**
 * Format timestamp เป็นรูปแบบที่อ่านง่าย
 * @param {number} timestamp - Unix timestamp
 * @returns {string} - Formatted date string
 */
export function formatMeeDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok'
  };
  
  return date.toLocaleDateString('th-TH', options);
}

/**
 * Format timestamp เป็นเวลา
 * @param {number} timestamp - Unix timestamp
 * @returns {string} - Formatted time string
 */
export function formatMeeTime(timestamp) {
  const date = new Date(timestamp);
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Bangkok'
  };
  
  return date.toLocaleTimeString('th-TH', options);
}

/**
 * คำนวณเวลาที่ผ่านไป (relative time)
 * @param {number} timestamp - Unix timestamp
 * @returns {string} - Relative time string
 */
export function formatRelativeTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days} วันที่แล้ว`;
  if (hours > 0) return `${hours} ชั่วโมงที่แล้ว`;
  if (minutes > 0) return `${minutes} นาทีที่แล้ว`;
  return `${seconds} วินาทีที่แล้ว`;
}
