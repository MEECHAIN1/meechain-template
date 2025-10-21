/**
 * MeeBot Encouragement Messages
 * ข้อความให้กำลังใจในสถานการณ์ต่างๆ
 */

export const encouragementMessages = {
  // เริ่มต้นทำงาน
  taskStart: [
    'เริ่มต้นด้วยก้าวเล็กๆ ทำได้แน่นอน! 💪',
    'มาทำทีละขั้นตอนกันนะ ไม่ยาก! 😊',
    'เริ่มต้นแล้วคือครึ่งทางของความสำเร็จ! 🚀'
  ],

  // ความก้าวหน้า 25%
  progress25: [
    'เริ่มเห็นผลแล้ว! เดินหน้าต่อไป 🎯',
    'ทำได้ดีมาก ยังอีกนิดเดียว! ✨',
    '25% แล้ว! momentum ดีแบบนี้ต่อไปเลย 🔥'
  ],

  // ความก้าวหน้า 50%
  progress50: [
    'ครึ่งทางแล้ว! สุดยอดไปเลย! 🎉',
    'ทำไปครึ่งหนึ่งแล้ว เก่งมากๆ! 👏',
    'Half way there! ไม่หยุดแล้วนะ 💫'
  ],

  // ความก้าวหน้า 75%
  progress75: [
    'ใกล้เป้าแล้ว! ผลักดันต่ออีกนิด! 🏆',
    '75% แล้ว! อีกหน่อยก็สำเร็จ! 🌟',
    'เห็นเส้นชัยแล้ว วิ่งต่อไป! 🎖️'
  ],

  // งานเสร็จสมบูรณ์
  completed: [
    'ยินดีด้วย! คุณทำสำเร็จแล้ว! 🎊🎉',
    'สุดยอด! ภูมิใจในตัวเองได้เลย! 🏅',
    'เยี่ยมมาก! เป้าหมายนี้คุณพิชิตแล้ว! 🌈'
  ],

  // ติดขัดหรือนานไม่อัพเดท
  stuck: [
    'อาจจะติดขัดนิดหน่อย? MeeBot ช่วยได้นะ 🤝',
    'ถ้าต้องการคำแนะนำ บอก MeeBot ได้เลย 💡',
    'พักสักครู่ก็ได้ กลับมาทำต่อเมื่อพร้อม 😌'
  ],

  // streak bonus
  streak: [
    'ทำงานต่อเนื่อง {days} วันแล้ว! เจ๋งมาก! 🔥',
    'consistency is key! ทำมา {days} วันแล้ว 💎',
    'streak {days} วัน! เก็บแต้มได้เยอะเลย! ⭐'
  ]
}

/**
 * เลือกข้อความสุ่มจาก array
 */
export function getRandomMessage(messages: string[]): string {
  return messages[Math.floor(Math.random() * messages.length)]
}

/**
 * สร้างข้อความตามความก้าวหน้า
 */
export function getProgressMessage(percentage: number): string {
  if (percentage >= 100) {
    return getRandomMessage(encouragementMessages.completed)
  } else if (percentage >= 75) {
    return getRandomMessage(encouragementMessages.progress75)
  } else if (percentage >= 50) {
    return getRandomMessage(encouragementMessages.progress50)
  } else if (percentage >= 25) {
    return getRandomMessage(encouragementMessages.progress25)
  } else {
    return getRandomMessage(encouragementMessages.taskStart)
  }
}
