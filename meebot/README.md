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
# MeeBot System

ระบบ AI Companion สำหรับ MeeChain platform ที่ช่วยให้กำลังใจและติดตามความก้าวหน้าของผู้ใช้

## โครงสร้าง

### engine/
- `emotion-logic.ts` - ระบบจัดการอารมณ์ของ MeeBot
- `voice-trigger.ts` - ระบบเปิดใช้งานด้วยเสียง

### prompts/
- `persona.ts` - บุคลิกและลักษณะของ MeeBot
- `encouragement.ts` - ข้อความให้กำลังใจในสถานการณ์ต่างๆ

### voice/
- `tts-config.ts` - การตั้งค่า Text-to-Speech
- `audio-assets/` - ไฟล์เสียงสำเร็จรูป

## การใช้งาน

### 1. Emotion System

```typescript
import { EmotionEngine } from './engine/emotion-logic'

const context = {
  progressPercentage: 75,
  tasksCompleted: 15,
  totalTasks: 20,
  lastUpdateTime: new Date(),
  streakDays: 5
}

const emotion = EmotionEngine.determineEmotion(context)
// Returns: 'encouraging' | 'happy' | 'celebrating' | 'concerned' | 'proud'
```

### 2. Voice Trigger

```typescript
import { VoiceTrigger, defaultVoiceConfig } from './engine/voice-trigger'

const trigger = new VoiceTrigger(defaultVoiceConfig)

trigger.start((transcript) => {
  console.log('User said:', transcript)
  // Handle voice command
})
```

### 3. Encouragement Messages

```typescript
import { getProgressMessage } from './prompts/encouragement'

const message = getProgressMessage(50)
// Returns: random encouraging message for 50% progress
```

### 4. Text-to-Speech

```typescript
import { TTSService } from './voice/tts-config'

const tts = new TTSService()
await tts.speak('ทำได้ดีมาก! เดินหน้าต่อไป!')
```

## Features

- ✅ ระบบอารมณ์แบบ dynamic
- ✅ Voice trigger และ recognition
- ✅ ข้อความให้กำลังใจหลากหลาย
- ✅ Text-to-Speech support
- ✅ Streak tracking
- ✅ Progress-based responses

## Integration with DApp

```tsx
import MeeBot from '../dapp/src/components/MeeBot'
import { EmotionEngine } from './engine/emotion-logic'
import { getProgressMessage } from './prompts/encouragement'

function MyPage() {
  const emotion = EmotionEngine.determineEmotion(context)
  const message = getProgressMessage(progress)
  
  return <MeeBot emotion={emotion} message={message} />
}
```
# 🤖 MeeBot

AI-powered assistant สำหรับ MeeChain ecosystem

## 📋 Overview

MeeBot เป็น AI assistant ที่ช่วยให้ผู้ใช้:
- เรียนรู้เกี่ยวกับ MeeChain
- ใช้งาน external modules
- รับคำแนะนำและการต้อนรับ
- ติดตาม contributions และรับ badges

## 🛠️ Tech Stack

- **Language**: Python 3.9+
- **AI/ML**: OpenAI API / Anthropic Claude / Local LLM
- **Framework**: LangChain / LlamaIndex
- **Database**: Firebase Firestore
- **API**: FastAPI / Flask

## 📁 Structure

```
meebot/
├── core/               # Core MeeBot logic
│   ├── bot.py         # Main bot class
│   ├── chat.py        # Chat handling
│   └── context.py     # Context management
│
├── personas/          # Personality configurations
│   ├── friendly.json  # Friendly persona
│   ├── teacher.json   # Teacher persona
│   └── expert.json    # Expert persona
│
├── modules/           # MeeBot modules
│   ├── greeting.py    # Greeting module
│   ├── help.py        # Help module
│   └── learning.py    # Learning module
│
├── utils/             # Utility functions
├── tests/             # Test files
├── main.py            # Entry point
└── requirements.txt   # Python dependencies
```

## 🚀 Getting Started

### Prerequisites

- Python 3.9+
- pip
- OpenAI API key (or other LLM provider)

### Installation

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Configuration

Create `.env` file:

```env
OPENAI_API_KEY=your_api_key_here
FIREBASE_CREDENTIALS=path/to/firebase-credentials.json
MEEBOT_PERSONA=friendly
LOG_LEVEL=INFO
```

### Running

```bash
# Run MeeBot
python main.py

# Run with specific persona
python main.py --persona teacher

# Run in development mode
python main.py --dev
```

## 🎯 Features

### 💬 Chat System
- Natural language understanding
- Context-aware responses
- Multi-turn conversations
- Memory management

### 🎭 Personalities
- **Friendly**: เป็นมิตร ต้อนรับ
- **Teacher**: สอน อธิบาย
- **Expert**: มีความรู้เชิงลึก
- **Motivator**: ให้กำลังใจ

### 🧩 Module Integration
- Load external modules
- Execute module commands
- Module recommendations

### 🏅 Badge & Quest Management
- Award badges
- Track contributions
- Send congratulations

### 📚 Learning Assistant
- Answer questions about MeeChain
- Provide tutorials
- Code examples
- Best practices

## 📡 API

### Chat API

```python
from meebot import MeeBot

bot = MeeBot(persona='friendly')

# Send message
response = bot.chat(
    user_id='user123',
    message='Hello MeeBot!'
)

print(response.message)
# Output: สวัสดีครับ! ยินดีต้อนรับสู่ MeeChain 💙
```

### Module Execution

```python
# Execute external module
response = bot.execute_module(
    user_id='user123',
    module='greeting',
    context={'name': 'John'}
)
```

### Badge Award

```python
# Award badge to user
bot.award_badge(
    user_id='user123',
    badge='first-contribution',
    reason='First PR merged'
)
```

## 🎭 Personas

### Creating Custom Persona

Create `personas/custom.json`:

```json
{
  "name": "custom",
  "displayName": "Custom MeeBot",
  "description": "Your custom personality",
  "language": "th",
  "tone": "professional",
  "traits": [
    "helpful",
    "knowledgeable",
    "patient"
  ],
  "greetings": [
    "สวัสดีครับ",
    "ยินดีต้อนรับ"
  ],
  "responses": {
    "thanks": "ยินดีครับ!",
    "error": "ขอโทษครับ เกิดข้อผิดพลาด"
  }
}
```

### Using Custom Persona

```python
bot = MeeBot(persona='custom')
```

## 🧪 Testing

```bash
# Run all tests
pytest

# Run specific test
pytest tests/test_chat.py

# Run with coverage
pytest --cov=meebot tests/
```

## 🔌 Integrations

### Firebase

```python
from meebot.utils.firebase import get_user_profile

# Get user profile
profile = get_user_profile(user_id)
```

### GitHub

```python
from meebot.utils.github import get_user_contributions

# Get contributions
contribs = get_user_contributions(github_username)
```

### External Modules

```python
from meebot.modules.loader import ModuleLoader

loader = ModuleLoader()
module = loader.load('greeting')
result = module.execute(context)
```

## 📊 Monitoring

### Logs

```bash
# View logs
tail -f logs/meebot.log

# Error logs only
grep ERROR logs/meebot.log
```

### Metrics

- Total conversations
- Average response time
- Module usage
- Badge awards

## 🤝 Contributing

### Adding New Modules

1. Create module in `modules/`
2. Implement required methods
3. Add tests
4. Update documentation

### Adding New Personas

1. Create persona JSON
2. Test responses
3. Submit PR

## 📚 Resources

- [LangChain Documentation](https://python.langchain.com)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Firebase Python SDK](https://firebase.google.com/docs/admin/setup)

## 🐛 Known Issues

- [List known issues here]

## 📝 TODO

- [ ] Implement basic chat system
- [ ] Add persona system
- [ ] Integrate external modules
- [ ] Add badge awarding
- [ ] Create learning modules
- [ ] Add voice support
- [ ] Implement memory system

## 📄 License

MIT

---

<div align="center">

**Powered by AI, Built with ❤️**

[⬆ Back to Top](#-meebot)

</div>
