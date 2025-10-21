/**
 * Greeting Module
 * ทักทายผู้ใช้ด้วยความเป็นมิตร
 * @module greeting
 */

class GreetingModule {
  constructor(config = {}) {
    this.config = config;
    this.greetings = [
      'สวัสดีครับ! 😊',
      'ยินดีต้อนรับ! 🎉',
      'ดีใจที่ได้พบคุณ! 💙',
      'สวัสดีตอนเช้า! ☀️',
      'สวัสดีตอนบ่าย! 🌤️',
      'สวัสดีตอนเย็น! 🌙'
    ];
  }

  /**
   * Execute the greeting module
   * @param {Object} context - Execution context
   * @param {Object} context.user - User information
   * @param {string} context.input - User input
   * @returns {Promise<Object>} Result
   */
  async execute(context) {
    try {
      const { user, input } = context;
      const userName = user?.name || 'เพื่อน';
      
      // Get time-based greeting
      const hour = new Date().getHours();
      let timeGreeting;
      
      if (hour < 12) {
        timeGreeting = 'สวัสดีตอนเช้า';
      } else if (hour < 17) {
        timeGreeting = 'สวัสดีตอนบ่าย';
      } else {
        timeGreeting = 'สวัสดีตอนเย็น';
      }
      
      const greeting = `${timeGreeting} คุณ${userName}! 💙`;
      
      return {
        success: true,
        message: greeting,
        data: {
          greeting,
          userName,
          hour,
          timestamp: new Date().toISOString()
        }
      };
    } catch (error) {
      return {
        success: false,
        message: 'เกิดข้อผิดพลาดในการทักทาย',
        error: error.message
      };
    }
  }

  /**
   * Validate input
   * @param {Object} input - Input to validate
   * @returns {boolean} Is valid
   */
  validate(input) {
    return true; // Greeting doesn't require specific input
  }

  /**
   * Get help information
   * @returns {string} Help text
   */
  getHelp() {
    return `
Greeting Module - ทักทายผู้ใช้

การใช้งาน:
  - พิมพ์ "hello", "hi", "สวัสดี" เพื่อทักทาย
  
ตัวอย่าง:
  User: สวัสดี
  MeeBot: สวัสดีตอนเช้า คุณ[ชื่อ]! 💙
    `;
  }

  /**
   * Called when module is loaded
   */
  async onLoad() {
    console.log('✅ Greeting module loaded');
  }

  /**
   * Called when module is unloaded
   */
  async onUnload() {
    console.log('👋 Greeting module unloaded');
  }
}

module.exports = GreetingModule;
