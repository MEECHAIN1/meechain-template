# MeeBot - AI Assistant System

ระบบ MeeBot ที่มีบุคลิกภาพ, อารมณ์, และเสียงพูด

## 📁 โครงสร้าง

```
meebot/
├── engine/      # Core logic สำหรับ emotion และ persona
├── prompts/     # AI prompts และ templates
└── voice/       # Text-to-speech และ voice features
```

## 🤖 ภาพรวม

MeeBot เป็น AI assistant ที่มีลักษณะพิเศษ:
- **Emotion System** - แสดงอารมณ์ตามบริบท
- **Persona** - มีบุคลิกภาพที่สอดคล้อง
- **Voice** - สามารถพูดและตอบสนองด้วยเสียง
- **Context Awareness** - เข้าใจบริบทของผู้ใช้

## 🎭 Emotion System

### Emotion States

```javascript
const emotions = {
  happy: { icon: "😊", color: "#FFD93D" },
  excited: { icon: "🎉", color: "#FF6B6B" },
  curious: { icon: "🤔", color: "#4ECDC4" },
  supportive: { icon: "💙", color: "#6C5CE7" },
  proud: { icon: "⭐", color: "#FFA502" }
}
```

### การใช้งาน

```javascript
import { MeeBotEngine } from './engine/MeeBotEngine';

const meebot = new MeeBotEngine();
meebot.setEmotion('happy');
const response = meebot.respond("สวัสดีครับ!");
// => { text: "สวัสดีครับ! วันนี้พร้อมทำอะไรดีมั้ยครับ? 😊", emotion: "happy" }
```

## 💬 Prompts System

### Prompt Templates

```javascript
// prompts/encouragement.js
export const encouragementPrompts = [
  "เก่งมากครับ! {achievement}",
  "สุดยอดเลย! {achievement}",
  "ภูมิใจในตัวคุณครับ! {achievement}"
];
```

### Context-Aware Responses

```javascript
// prompts/contextual.js
export function getContextualResponse(context) {
  if (context.questCompleted) {
    return "ยินดีด้วยครับ! คุณทำภารกิจสำเร็จแล้ว! 🎉";
  }
  if (context.struggling) {
    return "ไม่เป็นไรครับ ลองทีละขั้นตอนดูนะครับ 💙";
  }
  return "ผมพร้อมช่วยคุณครับ!";
}
```

## 🔊 Voice System

### Text-to-Speech

```javascript
import { MeeBotVoice } from './voice/MeeBotVoice';

const voice = new MeeBotVoice();
await voice.speak("สวัสดีครับ!", { 
  pitch: 1.2,
  rate: 1.0,
  emotion: 'happy'
});
```

### Voice Customization

```javascript
const voiceConfig = {
  language: 'th-TH',
  pitch: 1.2,        // 0.5 - 2.0
  rate: 1.0,         // 0.1 - 10.0
  volume: 1.0,       // 0.0 - 1.0
  emotionModifier: {
    happy: { pitch: +0.2, rate: +0.1 },
    sad: { pitch: -0.2, rate: -0.1 }
  }
};
```

## 🧠 AI Integration

### OpenAI Integration

```javascript
import { MeeBotAI } from './engine/MeeBotAI';

const ai = new MeeBotAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4',
  persona: 'supportive-friend'
});

const response = await ai.chat("ฉันทำ quest ไม่สำเร็จ");
// => "ไม่เป็นไรครับ! ลองดูว่าติดตรงไหน ผมจะช่วยคุณครับ 💙"
```

### Persona Configuration

```javascript
// engine/personas.js
export const personas = {
  'supportive-friend': {
    traits: ['encouraging', 'patient', 'helpful'],
    tone: 'friendly',
    language: 'casual-thai'
  },
  'mentor': {
    traits: ['wise', 'guiding', 'thoughtful'],
    tone: 'professional',
    language: 'formal-thai'
  }
};
```

## 🎯 Usage Examples

### Basic Chat

```javascript
import { MeeBot } from './engine/MeeBot';

const meebot = new MeeBot();

// Simple greeting
const greeting = meebot.greet();
console.log(greeting); // "สวัสดีครับ! ผมชื่อ MeeBot 💙"

// Respond to user
const response = meebot.respond("ช่วยฉันหน่อย");
console.log(response); // "ได้เลยครับ! คุณต้องการความช่วยเหลืออะไรครับ?"
```

### Quest Completion

```javascript
const questResponse = meebot.onQuestComplete({
  questName: "First Steps",
  rewards: ["10 MEE", "Beginner Badge"]
});
// => "ยินดีด้วยครับ! คุณทำ First Steps สำเร็จแล้ว! 🎉 ได้รับ 10 MEE และ Beginner Badge"
```

### Encouragement

```javascript
const encouragement = meebot.encourage({
  progress: 75,
  goal: "Complete 10 Quests"
});
// => "เก่งมากครับ! ทำไปได้ 75% แล้ว อีกนิดเดียวครับ! 💪"
```

## 🔧 Configuration

### MeeBot Config

```javascript
// meebot.config.js
module.exports = {
  emotion: {
    default: 'supportive',
    changeDelay: 2000 // ms
  },
  voice: {
    enabled: true,
    autoPlay: false
  },
  ai: {
    provider: 'openai',
    model: 'gpt-4',
    temperature: 0.7
  },
  persona: 'supportive-friend'
};
```

## 📊 Emotion Analytics

Track MeeBot emotions for better UX:

```javascript
import { EmotionTracker } from './engine/EmotionTracker';

const tracker = new EmotionTracker();
tracker.logEmotion('happy', { context: 'quest-complete' });

const stats = tracker.getStats();
// => { happy: 45%, supportive: 30%, curious: 15%, ... }
```

## 🧪 Testing

```bash
npm run test
```

## 🎨 Customization

### Add New Emotion

```javascript
// engine/emotions.js
export const customEmotions = {
  ...defaultEmotions,
  amazed: { 
    icon: "🤩", 
    color: "#F093FB",
    prompts: ["ว้าว! น่าทึ่งมากเลยครับ!"]
  }
};
```

### Add New Voice Style

```javascript
// voice/styles.js
export const voiceStyles = {
  ...defaultStyles,
  whisper: {
    volume: 0.3,
    rate: 0.8,
    pitch: 0.9
  }
};
```

## 📚 เพิ่มเติม

- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

---

> "ผมพร้อมเป็นเพื่อนคู่คิดของคุณครับ!" - MeeBot 💙
