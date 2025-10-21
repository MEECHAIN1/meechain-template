# 🤝 Contributing to MeeChain

ขอบคุณที่สนใจมีส่วนร่วมในการพัฒนา MeeChain! 💙

เอกสารนี้จะแนะนำวิธีการมีส่วนร่วมในโปรเจกต์ของเรา

---

## 📋 สารบัญ

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Badge & Quest System](#badge--quest-system)
- [Community](#community)

---

## 📜 Code of Conduct

โปรดอ่านและปฏิบัติตาม [Code of Conduct](CODE_OF_CONDUCT.md) ของเรา

**สิ่งที่เราคาดหวัง:**
- เคารพซึ่งกันและกัน
- ให้ feedback ที่สร้างสรรค์
- ยอมรับความคิดเห็นที่แตกต่าง
- มุ่งเน้นที่เป็นประโยชน์กับชุมชน

---

## 🚀 Getting Started

### 1. Fork Repository

คลิก "Fork" ที่มุมขวาบนของหน้า repository

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/meechain-template.git
cd meechain-template
```

### 3. Add Upstream Remote

```bash
git remote add upstream https://github.com/T1ADIPT4/meechain-template.git
```

### 4. Setup Development Environment

```bash
# Install dependencies for all components
./scripts/install-all.sh

# Or install individually
cd dapp && npm install
cd ../meebot && pip install -r requirements.txt
cd ../firebase-functions && npm install
cd ../smart-contracts && npm install
```

---

## 🛠️ How to Contribute

### 🐛 Reporting Bugs

1. ตรวจสอบว่ามี [issue](https://github.com/T1ADIPT4/meechain-template/issues) ที่คล้ายกันอยู่แล้วหรือไม่
2. ถ้าไม่มี สร้าง issue ใหม่โดยใช้ [Bug Report Template](.github/ISSUE_TEMPLATE/bug_report.md)
3. ใส่ข้อมูลให้ครบถ้วน:
   - ขั้นตอนการทำซ้ำ
   - พฤติกรรมที่คาดหวัง
   - พฤติกรรมจริง
   - Screenshots (ถ้ามี)
   - Environment details

### 💡 Suggesting Features

1. สร้าง issue โดยใช้ [Feature Request Template](.github/ISSUE_TEMPLATE/feature_request.md)
2. อธิบายว่าคุณต้องการอะไรและทำไม
3. ให้ตัวอย่าง use cases

### 🔧 Submitting Code Changes

#### สำหรับ Small Changes

1. สร้าง branch ใหม่:
```bash
git checkout -b fix/your-fix-name
# หรือ
git checkout -b feature/your-feature-name
```

2. ทำการเปลี่ยนแปลง

3. เขียน tests (ถ้าเป็นไปได้)

4. Commit changes:
```bash
git commit -m "fix: brief description of your fix"
# หรือ
git commit -m "feat: brief description of your feature"
```

5. Push to your fork:
```bash
git push origin your-branch-name
```

6. สร้าง Pull Request

#### สำหรับ Large Changes

1. สร้าง issue เพื่อคุยกันก่อน
2. รอการตอบรับจาก maintainers
3. ทำตาม workflow เหมือนข้างบน

---

## 🔄 Development Workflow

### Branch Naming Convention

- `feat/feature-name` - คุณสมบัติใหม่
- `fix/bug-name` - แก้ไข bugs
- `docs/doc-name` - การเปลี่ยนแปลงเอกสาร
- `refactor/refactor-name` - Refactoring code
- `test/test-name` - เพิ่มหรือแก้ไข tests
- `chore/task-name` - งานอื่นๆ (dependencies, config, etc.)

### Commit Message Format

ใช้ [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: คุณสมบัติใหม่
- `fix`: แก้ไข bug
- `docs`: เอกสาร
- `style`: Formatting, missing semicolons, etc.
- `refactor`: Refactoring code
- `test`: เพิ่มหรือแก้ไข tests
- `chore`: งานบำรุงรักษา

**ตัวอย่าง:**
```
feat(meebot): add new greeting persona

Add a friendly greeting persona for MeeBot that welcomes new contributors.

Closes #123
```

### Pull Request Process

1. **อัปเดต branch ให้เป็นปัจจุบัน:**
```bash
git fetch upstream
git rebase upstream/main
```

2. **รัน tests:**
```bash
npm test  # สำหรับ JavaScript/TypeScript
pytest    # สำหรับ Python
```

3. **รัน linters:**
```bash
npm run lint       # JavaScript/TypeScript
black .            # Python
flake8 .           # Python
```

4. **สร้าง Pull Request:**
   - ใช้ template ที่มีให้
   - อธิบายการเปลี่ยนแปลงอย่างชัดเจน
   - Link ไปยัง related issues
   - รอการ review จาก maintainers

5. **ตอบสนองต่อ feedback:**
   - Maintainers อาจขอให้แก้ไข
   - ทำการแก้ไขและ push ใหม่
   - PR จะถูก merge เมื่อได้รับการอนุมัติ

---

## 📐 Coding Standards

### JavaScript/TypeScript

- ใช้ ESLint และ Prettier
- ใช้ TypeScript สำหรับโค้ดใหม่
- เขียน JSDoc comments สำหรับ public APIs
- ตั้งชื่อแบบ camelCase สำหรับ variables/functions
- ตั้งชื่อแบบ PascalCase สำหรับ classes/components

### Python

- ปฏิบัติตาม PEP 8
- ใช้ Black สำหรับ formatting
- ใช้ type hints
- เขียน docstrings สำหรับ functions/classes
- ตั้งชื่อแบบ snake_case

### Solidity

- ปฏิบัติตาม [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- ใช้ Solhint
- เขียน NatSpec comments
- เขียน comprehensive tests

### Documentation

- ใช้ Markdown
- ใส่ code examples
- อธิบายอย่างชัดเจนและกระชับ
- รองรับทั้งภาษาไทยและอังกฤษ

---

## 🎯 Badge & Quest System

เมื่อคุณ contribute คุณจะได้รับ badges และคะแนนอัตโนมัติ!

### 🏅 Badges

| Badge | เงื่อนไข | คะแนน |
|-------|---------|-------|
| 🌟 First Contribution | PR แรกที่ถูก merge | 10 |
| 🐛 Bug Hunter | แก้ไข bug | 15 |
| ✨ Feature Creator | เพิ่มคุณสมบัติใหม่ | 25 |
| 🧠 Module Maker | สร้าง external module | 30 |
| 📚 Documentarian | ปรับปรุงเอกสาร | 10 |
| 🧪 Test Champion | เพิ่มหรือปรับปรุง tests | 20 |
| 🎓 Academy Author | สร้างเนื้อหาการเรียนรู้ | 35 |
| 💎 Core Contributor | Contribute 10+ PRs | 100 |
| 🏆 Top Contributor | อันดับ 1 ในเดือน | 200 |

### 🎮 Quests

Quests เป็นงานพิเศษที่มีรางวัล:

- **Quest: First Module** - สร้าง external module แรก (รางวัล: 50 คะแนน)
- **Quest: Documentation Hero** - ปรับปรุงเอกสาร 5 หน้า (รางวัล: 40 คะแนน)
- **Quest: Bug Bounty** - แก้ไข 5 bugs (รางวัล: 75 คะแนน)
- **Quest: Test Master** - เพิ่ม test coverage 20% (รางวัล: 60 คะแนน)

ดู quests ที่เปิดอยู่ได้ที่ [Issues with Quest label](https://github.com/T1ADIPT4/meechain-template/labels/quest)

### 💬 MeeBot Welcome

เมื่อ PR ของคุณถูก merge MeeBot จะต้อนรับคุณ:

> "ขอบคุณที่สร้างโมดูลใหม่ให้เพื่อน ๆ ใช้นะครับ!  
> ผมได้มอบ badge 'ผู้สร้างสมองเสริม' ให้คุณแล้ว 🎉  
> ตอนนี้โมดูลของคุณพร้อมให้โหลดผ่าน external-modules แล้วครับ!"

---

## 🎓 Contributing to Different Areas

### 🖼️ DApp (Frontend)

- ดู [dapp/README.md](dapp/README.md)
- ใช้ React/Next.js
- ทำ responsive design
- เขียน unit tests และ E2E tests

### 🤖 MeeBot

- ดู [meebot/README.md](meebot/README.md)
- ใช้ Python
- เขียน personality modules
- Test กับ different scenarios

### 📜 Smart Contracts

- ดู [smart-contracts/README.md](smart-contracts/README.md)
- ใช้ Solidity
- เขียน comprehensive tests
- ทำ security audit ก่อน PR

### 🔥 Firebase Functions

- ดู [firebase-functions/README.md](firebase-functions/README.md)
- ใช้ Node.js/TypeScript
- ทำ error handling
- เขียน unit tests

### 🧩 External Modules

- ดู [external-modules/README.md](external-modules/README.md)
- ปฏิบัติตาม module API
- เขียนเอกสารชัดเจน
- ใส่ตัวอย่างการใช้งาน

### 📚 Academy Content

- ดู [academy/README.md](academy/README.md)
- เขียน tutorials ที่เข้าใจง่าย
- ใส่ code examples
- ทำ step-by-step guides

---

## 💬 Community

### 🗣️ ช่องทางการสื่อสาร

- **GitHub Issues**: สำหรับ bugs และ feature requests
- **GitHub Discussions**: สำหรับ Q&A และการสนทนาทั่วไป
- **Discord**: [Coming Soon]
- **Twitter**: [Coming Soon]

### 🙋 ขอความช่วยเหลือ

ไม่แน่ใจว่าจะเริ่มต้นยังไง?

1. ดู [Good First Issues](https://github.com/T1ADIPT4/meechain-template/labels/good%20first%20issue)
2. อ่าน [Documentation](docs/)
3. ถาม MeeBot (coming soon)
4. ถามใน GitHub Discussions

### 🎉 ทีม MeeChain

- **Maintainers**: ดูแลโปรเจกต์และ review PRs
- **Contributors**: ทุกคนที่มีส่วนร่วม
- **Community**: คุณ! 💙

---

## 📊 Development Process

### Issue Lifecycle

1. **Open** - Issue ถูกสร้าง
2. **Triaged** - Maintainers ตรวจสอบและติด label
3. **Assigned** - มีคนรับทำ
4. **In Progress** - กำลังทำงาน
5. **Review** - PR ถูกสร้างและรอ review
6. **Merged** - PR ถูก merge
7. **Closed** - Issue ถูกปิด

### PR Lifecycle

1. **Draft** - PR ยังทำไม่เสร็จ
2. **Ready for Review** - พร้อมให้ review
3. **Under Review** - Maintainers กำลัง review
4. **Changes Requested** - ต้องแก้ไข
5. **Approved** - ได้รับการอนุมัติ
6. **Merged** - ถูก merge เข้า main branch

---

## 🔐 Security

พบช่องโหว่ด้านความปลอดภัย?

**อย่า** เปิด public issue!

แทนที่จะ:
1. ส่งอีเมลไปที่: [security@meechain.example.com] (Coming Soon)
2. ใส่รายละเอียดช่องโหว่
3. รอการตอบกลับจากทีม

---

## 📝 License

ด้วยการ contribute คุณยอมรับว่าโค้ดของคุณจะถูก license ภายใต้ [MIT License](LICENSE)

---

## 🙏 ขอบคุณ

ขอบคุณที่ช่วยทำให้ MeeChain ดีขึ้น! 💙

ทุก contribution ไม่ว่าจะเล็กหรือใหญ่ล้วนมีค่า

---

<div align="center">

**Happy Coding! 🚀**

[⬆ กลับไปด้านบน](#-contributing-to-meechain)

</div>
