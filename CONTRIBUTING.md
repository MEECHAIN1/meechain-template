# 🤝 คู่มือการมีส่วนร่วม (Contributing Guide)

ยินดีต้อนรับสู่ MeeChain Template! เราดีใจที่คุณสนใจจะมีส่วนร่วมในโปรเจกต์นี้ 🎉

## 📋 สารบัญ

- [แนวทางการมีส่วนร่วม](#แนวทางการมีส่วนร่วม)
- [การตั้งค่าสภาพแวดล้อม](#การตั้งค่าสภาพแวดล้อม)
- [วิธีการส่ง Pull Request](#วิธีการส่ง-pull-request)
- [มาตรฐานการเขียนโค้ด](#มาตรฐานการเขียนโค้ด)
- [การสร้าง External Module](#การสร้าง-external-module)
- [ระบบ Badge](#ระบบ-badge)

## 🌟 แนวทางการมีส่วนร่วม

### ประเภทของการมีส่วนร่วม

คุณสามารถมีส่วนร่วมได้หลายรูปแบบ:

1. **🐛 แจ้ง Bug** - พบปัญหา? แจ้งให้เราทราบผ่าน Issues
2. **💡 เสนอฟีเจอร์** - มีไอเดียดีๆ? เราอยากรู้!
3. **📝 เขียนเอกสาร** - ช่วยปรับปรุงเอกสารให้ดีขึ้น
4. **🧩 สร้างโมดูล** - สร้างโมดูลใหม่ใน external-modules/
5. **🎨 ปรับปรุง UI/UX** - ทำให้แอปสวยและใช้งานง่ายขึ้น
6. **🔧 แก้ไขโค้ด** - แก้ bug หรือเพิ่มฟีเจอร์

## 🛠 การตั้งค่าสภาพแวดล้อม

### ข้อกำหนดเบื้องต้น

```bash
node --version  # ควรเป็น v18 ขึ้นไป
npm --version   # ควรเป็น v9 ขึ้นไป
git --version   # ควรเป็น v2.30 ขึ้นไป
```

### ขั้นตอนการติดตั้ง

1. **Fork repository**
   - คลิกปุ่ม "Fork" ที่มุมบนขวาของหน้า GitHub
   - Fork ไปยัง account ของคุณ

2. **Clone repository ของคุณ**
```bash
git clone https://github.com/<your-username>/meechain-template.git
cd meechain-template
```

3. **เพิ่ม upstream remote**
```bash
git remote add upstream https://github.com/T1ADIPT4/meechain-template.git
git remote -v
```

4. **ติดตั้ง dependencies**
```bash
# สำหรับแต่ละโมดูล
cd dapp && npm install
cd ../firebase-functions/functions && npm install
cd ../smart-contracts && npm install
```

5. **สร้าง branch ใหม่**
```bash
git checkout -b feature/your-feature-name
# หรือ
git checkout -b fix/your-bug-fix
```

## 🔄 วิธีการส่ง Pull Request

### ขั้นตอนการส่ง PR

1. **ตรวจสอบให้แน่ใจว่าโค้ดของคุณทำงานได้**
```bash
npm run test      # รัน tests
npm run lint      # ตรวจสอบ code style
npm run build     # สร้าง build
```

2. **Commit การเปลี่ยนแปลง**
```bash
git add .
git commit -m "feat: เพิ่มฟีเจอร์ ABC"
# หรือ
git commit -m "fix: แก้ไข bug XYZ"
```

3. **Push ไปยัง repository ของคุณ**
```bash
git push origin feature/your-feature-name
```

4. **เปิด Pull Request**
   - ไปที่ repository ต้นฉบบับน GitHub
   - คลิก "New Pull Request"
   - เลือก branch ของคุณ
   - กรอกข้อมูลตาม template

### รูปแบบ Commit Message

เราใช้ [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` เพิ่มฟีเจอร์ใหม่
- `fix:` แก้ไข bug
- `docs:` แก้ไขเอกสาร
- `style:` แก้ไข formatting, spacing, etc.
- `refactor:` ปรับปรุงโค้ดโดยไม่เปลี่ยนการทำงาน
- `test:` เพิ่มหรือแก้ไข tests
- `chore:` งานบำรุงรักษาอื่นๆ

ตัวอย่าง:
```
feat: เพิ่มระบบ emotion tracking ใน MeeBot
fix: แก้ไขปัญหา badge ไม่แสดงผล
docs: อัพเดทคู่มือการใช้งาน Firebase
```

## 📏 มาตรฐานการเขียนโค้ด

### TypeScript/JavaScript

- ใช้ TypeScript เท่าที่ทำได้
- ตั้งชื่อตัวแปรแบบ camelCase
- ตั้งชื่อ interface/type แบบ PascalCase
- เพิ่ม JSDoc comments สำหรับ functions สำคัญ
- ใช้ `const` และ `let` แทน `var`

```typescript
// ✅ ดี
const userName: string = "MeeChain";
function calculateReward(points: number): number {
  return points * 1.5;
}

// ❌ ไม่ดี
var user_name = "MeeChain";
function calc(p) {
  return p * 1.5;
}
```

### React/Next.js

- ใช้ Functional Components
- ใช้ Hooks (useState, useEffect, etc.)
- แยก components เป็นไฟล์ย่อยๆ
- ใช้ TypeScript interfaces สำหรับ props

```typescript
// ✅ ดี
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
```

### Smart Contracts (Solidity)

- ใช้ Solidity 0.8.0+
- เพิ่ม NatSpec comments
- ตรวจสอบ security vulnerabilities
- เขียน tests ครอบคลุม

```solidity
// ✅ ดี
/// @notice Transfer tokens to recipient
/// @param recipient Address to receive tokens
/// @param amount Amount of tokens to transfer
function transfer(address recipient, uint256 amount) public returns (bool) {
  require(recipient != address(0), "Invalid recipient");
  require(balances[msg.sender] >= amount, "Insufficient balance");
  // ... rest of function
}
```

## 🧩 การสร้าง External Module

External Modules คือโมดูลที่ contributors สามารถสร้างและแชร์ได้

### โครงสร้างโมดูล

```bash
external-modules/
├── smart-contracts/
│   └── your-module/
│       ├── index.ts
│       ├── README.md
│       └── package.json
└── shared-utils/
    └── your-utility/
        ├── index.ts
        ├── README.md
        └── package.json
```

### ขั้นตอนการสร้างโมดูล

1. **สร้างโฟลเดอร์ใหม่**
```bash
cd external-modules/shared-utils
mkdir my-awesome-module
cd my-awesome-module
```

2. **สร้างไฟล์พื้นฐาน**
```bash
npm init -y
touch index.ts README.md
```

3. **เขียนโค้ด**

```typescript
// index.ts
export interface ModuleInfo {
  name: string;
  version: string;
  author: string;
}

export function myFunction(input: string): string {
  return `Processed: ${input}`;
}

export const moduleInfo: ModuleInfo = {
  name: "my-awesome-module",
  version: "1.0.0",
  author: "Your Name"
};
```

4. **เขียนเอกสาร**

สร้าง `README.md` อธิบาย:
- วัตถุประสงค์ของโมดูล
- วิธีการใช้งาน
- ตัวอย่าง code
- Dependencies (ถ้ามี)

5. **ส่ง Pull Request**

ดูรายละเอียดเพิ่มเติมใน [EXTERNAL_MODULES_SETUP.md](EXTERNAL_MODULES_SETUP.md)

## 🏆 ระบบ Badge

เมื่อ PR ของคุณถูก merge คุณจะได้รับ badge อัตโนมัติ!

### ประเภท Badge

- 🌟 **First Contribution** - PR แรกของคุณ
- 🐛 **Bug Hunter** - แก้ไข bug
- ✨ **Feature Creator** - สร้างฟีเจอร์ใหม่
- 📚 **Documentation Hero** - ปรับปรุงเอกสาร
- 🧩 **Module Builder** - สร้าง external module
- 🔥 **Active Contributor** - มี PR มากกว่า 5 ครั้ง
- 🏅 **Core Contributor** - มี PR มากกว่า 20 ครั้ง

Badge จะถูกบันทึกใน Firebase และแสดงในโปรไฟล์ของคุณ!

## 🔍 กระบวนการ Review

1. **Automated Checks** - CI/CD จะรัน tests และ linting
2. **Code Review** - Maintainers จะ review โค้ด
3. **Feedback** - อาจมี comments ขอให้แก้ไข
4. **Merge** - เมื่อผ่านการ review แล้วจะถูก merge
5. **Badge Award** - คุณจะได้รับ badge!

## ❓ คำถามที่พบบ่อย (FAQ)

### Q: ต้องมีประสบการณ์มากแค่ไหน?
A: ไม่จำเป็นต้องเป็นผู้เชี่ยวชาญ! เรายินดีต้อนรับทุกระดับ

### Q: จะเริ่มจากไหนดี?
A: ลองดู Issues ที่มี label "good first issue"

### Q: มีคำถามเพิ่มเติมทำอย่างไร?
A: เปิด Discussion บน GitHub หรือ comment ใน Issue

## 📞 ติดต่อ

- 💬 [GitHub Discussions](https://github.com/T1ADIPT4/meechain-template/discussions)
- 📧 [GitHub Issues](https://github.com/T1ADIPT4/meechain-template/issues)

---

**ขอบคุณที่มีส่วนร่วมกับ MeeChain! 🚀**
