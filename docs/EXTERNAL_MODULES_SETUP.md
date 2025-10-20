# การสร้าง External Module

MeeChain รองรับการโหลดฟังก์ชันจาก repo ภายนอก  
คุณสามารถสร้างโมดูลใหม่ได้โดย:

1. สร้างไฟล์ใน `external-modules/` เช่น `smart-contracts/deployContract.ts`
2. ใช้ `useExternalFunction()` เพื่อเรียกใช้งาน
3. เพิ่ม metadata ใน Firebase (ถ้ามต้องการ config)
4. ทดสอบผ่านหน้า `/external-modules`

MeeBot จะโหลดโมดูลของคุณและใช้งานทันทีครับ 💙
