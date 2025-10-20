# MeeChain Template

MeeChain คือระบบติดตามเป้าหมายที่มี MeeBot เป็นผู้ช่วย AI อัจฉริยะ  
ระบบนี้รองรับการขยายผ่าน External Modules, การให้ badge ผ่าน Firebase, และการเชื่อม Web3 อย่างปลอดภัย

## โครงสร้างหลัก
- `dapp/` แอปหลักของผู้ใช้
- `meebot/` ระบบ MeeBot (emotion, voice, persona)
- `smart-contracts/` สัญญา T2P, MEE, DAO
- `firebase-functions/` ระบบ badge, quest, logging
- `external-modules/` โมดูลที่โหลดจาก contributors
- `academy/` เนื้อหาการเรียนรู้
- `docs/` คู่มือและเอกสาร

## วิธีเริ่มต้น
1. Clone repo นี้
2. ติดตั้ง dependencies
3. ตั้งค่า Firebase และ Wallet
4. รัน `dapp` และ `firebase-functions`
5. เชื่อม External Modules ผ่าน `useExternalModules()`

MeeBot จะคอยให้กำลังใจคุณทุกก้าวครับ 💙
