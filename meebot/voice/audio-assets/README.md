# MeeBot Audio Assets

This directory contains audio files for MeeBot voice responses.

## File Structure

```
audio-assets/
├── greeting/
│   ├── morning.mp3
│   ├── afternoon.mp3
│   └── evening.mp3
├── encouragement/
│   ├── task-start.mp3
│   ├── progress-25.mp3
│   ├── progress-50.mp3
│   ├── progress-75.mp3
│   └── completed.mp3
└── notifications/
    ├── badge-earned.mp3
    ├── level-up.mp3
    └── streak-bonus.mp3
```

## Usage

```typescript
import { playAudio } from './audio-player'

playAudio('encouragement/progress-50.mp3')
```

## Audio Specifications

- Format: MP3
- Sample Rate: 44.1 kHz
- Bit Rate: 128 kbps
- Channels: Mono
- Duration: 2-5 seconds per clip

## TTS Alternative

หากไม่มีไฟล์เสียง สามารถใช้ TTS (Text-to-Speech) แทนได้:

```typescript
import { TTSService } from '../voice/tts-config'

const tts = new TTSService()
tts.speak('ทำได้ดีมาก!')
```
