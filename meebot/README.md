# 🤖 MeeBot System

ระบบ AI Bot อัจฉริยะสำหรับ MeeChain พร้อม emotion tracking, voice synthesis และ persona customization

## 🌟 ฟีเจอร์หลัก

- **Emotion Tracking** - ติดตามและแสดงอารมณ์
- **Voice Synthesis** - สังเคราะห์เสียงพูด
- **Persona Customization** - ปรับแต่งบุคลิกภาพ
- **Module Loading** - โหลด external modules
- **Context Awareness** - เข้าใจบริบทการสนทนา

## 🚀 การใช้งาน

### ติดตั้ง

```bash
cd meebot
npm install
```

### ใช้งานพื้นฐาน

```typescript
import { MeeBot } from './meebot';

// สร้าง MeeBot instance
const bot = new MeeBot({
  name: 'Mee',
  persona: 'friendly',
  voice: 'female',
  language: 'th'
});

// เริ่มต้นการทำงาน
await bot.initialize();

// พูดข้อความ
await bot.speak('สวัสดีค่ะ! ยินดีต้อนรับสู่ MeeChain');

// ตั้งค่าอารมณ์
bot.setEmotion('happy');

// โต้ตอบ
const response = await bot.respond('สอนฉันเกี่ยวกับ MeeChain หน่อย');
console.log(response);
```

## 😊 Emotion System

### ประเภทอารมณ์

- `happy` - มีความสุข
- `sad` - เศร้า
- `excited` - ตื่นเต้น
- `calm` - สงบ
- `confused` - งงงวย
- `thinking` - กำลังคิด

### การใช้งาน

```typescript
// ตั้งค่าอารมณ์
bot.setEmotion('excited');

// อ่านอารมณ์ปัจจุบัน
const emotion = bot.getCurrentEmotion();

// ตรวจจับอารมณ์จากข้อความ
const detectedEmotion = bot.detectEmotion('ดีใจมากเลย!');
// => 'happy'
```

## 🗣 Voice System

### การตั้งค่าเสียง

```typescript
bot.setVoice({
  gender: 'female',
  pitch: 1.0,
  speed: 1.0,
  language: 'th-TH'
});
```

### การพูด

```typescript
// พูดข้อความ
await bot.speak('ข้อความที่ต้องการพูด');

// พูดพร้อมอารมณ์
await bot.speakWithEmotion('ยินดีด้วย!', 'excited');

// หยุดพูด
bot.stopSpeaking();
```

## 🎭 Persona System

### ประเภท Persona

- `friendly` - เป็นมิตร
- `professional` - เป็นทางการ
- `playful` - ขี้เล่น
- `helpful` - ช่วยเหลือ
- `wise` - ฉลาด มีสติปัญญา

### การปรับแต่ง

```typescript
bot.setPersona('wise', {
  responseStyle: 'thoughtful',
  vocabulary: 'advanced',
  tone: 'calm'
});
```

## 🧩 Module Loading

MeeBot สามารถโหลด external modules:

```typescript
// โหลดโมดูล
const module = await bot.loadModule('format-progress');

// ใช้งานโมดูล
const progress = module.formatProgress({
  completed: 75,
  total: 100,
  startTime: new Date()
});

// แสดงผล
await bot.speak(`ความคืบหน้าของคุณอยู่ที่ ${progress.percentageFormatted}`);
```

## 🔄 Context Awareness

```typescript
// บันทึกบริบท
bot.saveContext({
  topic: 'blockchain',
  lastQuestion: 'Smart contract คืออะไร?',
  userLevel: 'beginner'
});

// ตอบโต้แบบมีบริบท
const response = await bot.contextualResponse('อธิบายเพิ่มเติมหน่อย');
```

## ⚙️ Configuration

```typescript
interface MeeBotConfig {
  name: string;
  persona: PersonaType;
  voice: VoiceConfig;
  language: string;
  modules: string[];
  enableLearning: boolean;
  responseDelay: number;
}
```

## 📚 API Reference

### Core Methods

- `initialize()` - เริ่มต้น MeeBot
- `speak(text: string)` - พูดข้อความ
- `respond(input: string)` - ตอบโต้
- `setEmotion(emotion: EmotionType)` - ตั้งค่าอารมณ์
- `setPersona(persona: PersonaType)` - ตั้งค่าบุคลิกภาพ
- `loadModule(moduleName: string)` - โหลดโมดูล

### Events

```typescript
bot.on('speaking', (text) => {
  console.log('กำลังพูด:', text);
});

bot.on('emotionChanged', (emotion) => {
  console.log('อารมณ์เปลี่ยนเป็น:', emotion);
});

bot.on('moduleLoaded', (moduleName) => {
  console.log('โหลดโมดูลแล้ว:', moduleName);
});
```

## 🧪 ตัวอย่างการใช้งาน

### Example 1: Interactive Learning Bot

```typescript
const learningBot = new MeeBot({
  persona: 'helpful',
  enableLearning: true
});

await learningBot.initialize();
await learningBot.loadModule('progress-tracker');

// เริ่มบทเรียน
await learningBot.speak('เริ่มบทเรียนเกี่ยวกับ Smart Contracts กันเลยค่ะ');
```

### Example 2: Progress Tracker Bot

```typescript
const trackerBot = new MeeBot({
  persona: 'professional'
});

await trackerBot.loadModule('format-progress');

// แสดงความคืบหน้า
setInterval(async () => {
  const progress = getProjectProgress();
  await trackerBot.speak(
    `ความคืบหน้าปัจจุบัน: ${progress.percentage}%`
  );
}, 60000);
```

## 🤝 การมีส่วนร่วม

สนใจพัฒนา MeeBot? อ่าน [CONTRIBUTING.md](../CONTRIBUTING.md)
