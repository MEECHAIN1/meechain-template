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
