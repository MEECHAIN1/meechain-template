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
