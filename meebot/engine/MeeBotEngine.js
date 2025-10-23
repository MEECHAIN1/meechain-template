// MeeBot Engine - Core logic for emotion and responses
class MeeBotEngine {
  constructor(config = {}) {
    this.emotion = config.defaultEmotion || 'supportive';
    this.persona = config.persona || 'supportive-friend';
    this.emotions = {
      happy: { icon: "😊", color: "#FFD93D" },
      excited: { icon: "🎉", color: "#FF6B6B" },
      curious: { icon: "🤔", color: "#4ECDC4" },
      supportive: { icon: "💙", color: "#6C5CE7" },
      proud: { icon: "⭐", color: "#FFA502" }
    };
  }

  setEmotion(emotion) {
    if (this.emotions[emotion]) {
      this.emotion = emotion;
    }
  }

  getEmotion() {
    return {
      name: this.emotion,
      ...this.emotions[this.emotion]
    };
  }

  greet() {
    return {
      text: "สวัสดีครับ! ผมชื่อ MeeBot ยินดีที่ได้รู้จักครับ 💙",
      emotion: "happy"
    };
  }

  respond(userMessage) {
    // Simple response logic - can be enhanced with AI
    const responses = {
      'สวัสดี': "สวัสดีครับ! วันนี้พร้อมทำอะไรดีมั้ยครับ? 😊",
      'ช่วย': "ได้เลยครับ! คุณต้องการความช่วยเหลืออะไรครับ? 💙",
      'ขอบคุณ': "ยินดีครับ! ผมพร้อมช่วยเสมอนะครับ 😊"
    };

    const response = responses[userMessage] || "ผมฟังคุณอยู่ครับ มีอะไรให้ช่วยมั้ยครับ? 💙";

    return {
      text: response,
      emotion: this.emotion
    };
  }

  onQuestComplete(questData) {
    this.setEmotion('excited');
    return {
      text: `ยินดีด้วยครับ! คุณทำ ${questData.questName} สำเร็จแล้ว! 🎉`,
      emotion: 'excited'
    };
  }

  encourage(progressData) {
    this.setEmotion('supportive');
    const percentage = Math.round((progressData.progress / 100) * 100);
    return {
      text: `เก่งมากครับ! ทำไปได้ ${percentage}% แล้ว อีกนิดเดียวครับ! 💪`,
      emotion: 'supportive'
    };
  }
}

module.exports = MeeBotEngine;
