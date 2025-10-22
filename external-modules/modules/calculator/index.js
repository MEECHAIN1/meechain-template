/**
 * Calculator Module
 * คำนวณนิพจน์ทางคณิตศาสตร์
 * @module calculator
 */

class CalculatorModule {
  constructor(config = {}) {
    this.config = config;
    this.operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '%': (a, b) => a % b,
      '**': (a, b) => Math.pow(a, b)
    };
  }

  /**
   * Execute the calculator module
   * @param {Object} context - Execution context
   * @param {string} context.input - Mathematical expression
   * @returns {Promise<Object>} Result
   */
  async execute(context) {
    try {
      const { input } = context;

      if (!input || typeof input !== 'string') {
        return {
          success: false,
          message: 'กรุณาระบุนิพจน์ที่ต้องการคำนวณ'
        };
      }

      // Validate input
      if (!this.validate(input)) {
        return {
          success: false,
          message: 'นิพจน์ไม่ถูกต้อง กรุณาใช้เฉพาะตัวเลขและตัวดำเนินการ (+, -, *, /, %, **)'
        };
      }

      // Calculate
      const result = this.calculate(input);

      return {
        success: true,
        message: `ผลลัพธ์: ${result}`,
        data: {
          expression: input,
          result: result,
          timestamp: new Date().toISOString()
        }
      };
    } catch (error) {
      return {
        success: false,
        message: 'เกิดข้อผิดพลาดในการคำนวณ',
        error: error.message
      };
    }
  }

  /**
   * Calculate mathematical expression
   * @param {string} expression - Mathematical expression
   * @returns {number} Result
   */
  calculate(expression) {
    // Remove whitespace
    expression = expression.replace(/\s+/g, '');

    // Simple calculation using Function (safer than eval)
    // Note: In production, use a proper math expression parser
    try {
      // Create a safe calculation function
      const calculate = new Function('return ' + expression);
      return calculate();
    } catch (error) {
      throw new Error('ไม่สามารถคำนวณนิพจน์ได้');
    }
  }

  /**
   * Validate input expression
   * @param {string} input - Input to validate
   * @returns {boolean} Is valid
   */
  validate(input) {
    // Check if input contains only numbers and allowed operators
    const validPattern = /^[\d+\-*/()\s.%]+$/;
    
    // Check for ** operator separately
    const hasValidOperators = /^[\d+\-*/()\s.%*]+$/.test(input);
    
    return validPattern.test(input) && hasValidOperators;
  }

  /**
   * Get help information
   * @returns {string} Help text
   */
  getHelp() {
    return `
Calculator Module - คำนวณทางคณิตศาสตร์

การใช้งาน:
  - พิมพ์นิพจน์ทางคณิตศาสตร์
  
ตัวดำเนินการที่รองรับ:
  + : บวก
  - : ลบ
  * : คูณ
  / : หาร
  % : หารเอาเศษ
  ** : ยกกำลัง
  
ตัวอย่าง:
  calc 2 + 2          → 4
  calc 10 * 5         → 50
  calc 100 / 4        → 25
  calc 2 ** 3         → 8
  calc (5 + 3) * 2    → 16
    `;
  }

  /**
   * Called when module is loaded
   */
  async onLoad() {
    console.log('✅ Calculator module loaded');
  }

  /**
   * Called when module is unloaded
   */
  async onUnload() {
    console.log('🔢 Calculator module unloaded');
  }
}

module.exports = CalculatorModule;
