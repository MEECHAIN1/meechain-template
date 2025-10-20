# MeeChain Logo & Assets

This directory contains visual assets for the MeeChain DApp:

- `meechain-logo.svg` - MeeChain logo
- `meebot/` - MeeBot character sprites and animations
  - `meebot-happy.svg`
  - `meebot-encouraging.svg`
  - `meebot-celebrating.svg`

## Usage

```tsx
import Image from 'next/image'

<Image 
  src="/meechain-logo.svg" 
  alt="MeeChain" 
  width={200} 
  height={50} 
/>
```

## MeeBot Assets

MeeBot มีหลายอารมณ์ที่สามารถใช้ตามสถานการณ์:
- **happy** - ใช้เมื่อเริ่มต้นหรือสถานะปกติ
- **encouraging** - ใช้เมื่อให้กำลังใจ
- **celebrating** - ใช้เมื่อทำงานสำเร็จ
