# 🤝 Contributing to MeeChain

ขอบคุณที่สนใจร่วมพัฒนา MeeChain! เรายินดีต้อนรับทุกคนที่ต้องการสร้างสรรค์สิ่งดีๆ ร่วมกัน

## 🌟 วิธีการมีส่วนร่วม

### 1. แบ่งปันความคิดเห็น
- เปิด Issue เพื่อแจ้งบั๊ก หรือเสนอฟีเจอร์ใหม่
- เข้าร่วม Discussions เพื่อพูดคุยแลกเปลี่ยนไอเดีย

### 2. สร้าง External Modules
คุณสามารถสร้างโมดูลเสริมสำหรับ MeeChain ได้ เช่น:
- Smart Contracts เพิ่มเติม
- Utility Functions
- App Configurations

ดูรายละเอียดการตั้งค่าที่ [EXTERNAL_MODULES_SETUP.md](./EXTERNAL_MODULES_SETUP.md)

### 3. สร้าง Badge และ Quest
- Badge: ความสำเร็จที่ผู้ใช้สามารถปลดล็อกได้
- Quest: ภารกิจที่ผู้ใช้ต้องทำให้สำเร็จ

อยู่ใน `firebase-functions/functions/`

### 4. เพิ่มเนื้อหาการเรียนรู้
สร้างบทเรียนใน `academy/lessons/` หรือ quest ใน `academy/quests/`

### 5. ปรับปรุง MeeBot
- เพิ่ม emotion patterns ใน `meebot/engine/`
- สร้าง prompts ใหม่ใน `meebot/prompts/`
- พัฒนา voice features ใน `meebot/voice/`

## 📋 Process การ Contribute

### 1. Fork และ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/meechain-template.git
cd meechain-template
```

### 2. สร้าง Branch ใหม่

```bash
git checkout -b feature/your-feature-name
# หรือ
git checkout -b fix/your-bug-fix
```

### 3. ทำการพัฒนา

- เขียนโค้ดให้สะอาดและมี comment ที่เข้าใจง่าย
- ทดสอบการทำงานให้แน่ใจว่าไม่มี bug
- ปฏิบัติตาม code style ของโปรเจกต์

### 4. Commit Changes

```bash
git add .
git commit -m "feat: เพิ่มฟีเจอร์ X"
# หรือ
git commit -m "fix: แก้บั๊ก Y"
```

ใช้ conventional commits:
- `feat:` สำหรับฟีเจอร์ใหม่
- `fix:` สำหรับแก้บั๊ก
- `docs:` สำหรับเอกสาร
- `style:` สำหรับ code style
- `refactor:` สำหรับ refactoring
- `test:` สำหรับ tests
- `chore:` สำหรับงานอื่นๆ

### 5. Push และสร้าง Pull Request

```bash
git push origin feature/your-feature-name
```

จากนั้นไปที่ GitHub และสร้าง Pull Request

## ✅ Checklist ก่อนส่ง PR

- [ ] โค้ดทำงานได้ถูกต้อง
- [ ] ไม่มี console errors
- [ ] เขียน tests (ถ้าเป็นไปได้)
- [ ] อัพเดทเอกสารที่เกี่ยวข้อง
- [ ] ปฏิบัติตาม code style
- [ ] commit messages ชัดเจน

## 🎨 Code Style

### JavaScript/TypeScript
- ใช้ 2 spaces สำหรับ indentation
- ใช้ single quotes สำหรับ strings
- ใช้ semicolons
- ใช้ meaningful variable names

### Smart Contracts
- ปฏิบัติตาม Solidity style guide
- เขียน comments สำหรับฟังก์ชันสำคัญ
- ทำ security audit ก่อนส่ง PR

## 🧪 Testing

### DApp
```bash
cd dapp
npm run test
```

### Smart Contracts
```bash
cd smart-contracts
npm run test
```

### Firebase Functions
```bash
cd firebase-functions
npm run test
```

## 📝 Documentation

เมื่อเพิ่มฟีเจอร์ใหม่:
- อัพเดท README.md ถ้าจำเป็น
- เพิ่ม JSDoc comments
- สร้างเอกสารใน `docs/` ถ้าเป็นฟีเจอร์ใหญ่

## 🔒 Security

ถ้าพบช่องโหว่ด้านความปลอดภัย:
- **อย่า** เปิด public issue
- ติดต่อทีมงานโดยตรงผ่าน email
- รอให้ทีมงานแก้ไขก่อนเปิดเผย

## 💬 ติดต่อและสอบถาม

- เปิด Issue สำหรับคำถามทั่วไป
- เข้าร่วม Discussions
- ติดตาม updates ใน README

## 🎁 ขอบคุณ

ขอบคุณทุกความพยายามที่ช่วยทำให้ MeeChain ดีขึ้น!  
MeeBot จะคอยเป็นกำลังใจให้คุณครับ 💙

---

> "ทุกการ contribute ไม่ว่าจะเล็กหรือใหญ่ล้วนมีค่า" - MeeBot
