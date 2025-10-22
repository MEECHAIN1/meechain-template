# ร่วมสร้าง MeeChain

ยินดีต้อนรับผู้ร่วมสร้างทุกคน!  
คุณสามารถช่วยพัฒนา MeeChain ได้หลายทาง เช่น:

- สร้าง External Module ใหม่
- เขียนบทเรียนใน Academy
- ปรับปรุง UX ของ MeeBot
- สร้าง Flow ใหม่สำหรับผู้ใช้

## วิธีเริ่มต้น
1. Fork repo นี้
2. สร้าง branch ใหม่
3. เขียนโค้ด / เนื้อหา
4. ส่ง Pull Request พร้อมคำอธิบาย

เมื่อ PR ของคุณสำเร็จ MeeBot จะมอบ badge ให้คุณทันที 🎉
# Contributing to MeeChain

ขอบคุณที่สนใจ contribute กับ MeeChain! 🎉

## 🌟 วิธีการ Contribute

### 1. สร้าง External Module

External modules คือส่วนขยายที่ชุมชนสร้างขึ้นเพื่อเพิ่มความสามารถให้ MeeChain

**ขั้นตอน:**

1. **Fork repository**
   ```bash
   # คลิก Fork บน GitHub
   git clone https://github.com/YOUR_USERNAME/meechain-template.git
   cd meechain-template
   ```

2. **สร้าง branch ใหม่**
   ```bash
   git checkout -b feature/my-awesome-module
   ```

3. **สร้าง module**
   - เลือกหมวดที่เหมาะสม: `smart-contracts/`, `shared-utils/`, หรือ `app-config/`
   - สร้างไฟล์ใน `external-modules/[category]/`
   - เขียน TypeScript พร้อม type definitions
   - เขียน documentation ในไฟล์

4. **เขียน tests** (ถ้ามี)
   ```bash
   # สร้างไฟล์ test
   # ตัวอย่าง: myModule.test.ts
   ```

5. **Commit และ Push**
   ```bash
   git add .
   git commit -m "Add: [Module Name] - [Short Description]"
   git push origin feature/my-awesome-module
   ```

6. **สร้าง Pull Request**
   - ไปที่ GitHub repository
   - คลิก "New Pull Request"
   - เลือก branch ที่สร้าง
   - กรอกรายละเอียด:
     - ชื่อ module
     - คำอธิบาย
     - วิธีใช้งาน
     - ตัวอย่างโค้ด

### 2. แก้ไข Bugs

พบ bug? ช่วยกันแก้ได้เลย!

1. เปิด Issue บอกปัญหา
2. Fork และสร้าง branch: `fix/bug-name`
3. แก้ไข bug
4. เพิ่ม test case (ถ้าเป็นไปได้)
5. ส่ง Pull Request

### 3. ปรับปรุงเอกสาร

เอกสารที่ดีช่วยให้ทุกคนเข้าใจได้ง่ายขึ้น

- แก้ไข typos
- เพิ่มตัวอย่างโค้ด
- แปลเป็นภาษาอื่น
- เพิ่มบทเรียนใน Academy

### 4. สร้าง Lessons/Quests

แชร์ความรู้ผ่าน Academy

- เขียน tutorials
- สร้าง quest definitions
- ออกแบบ learning paths

## 📋 Code Guidelines

### TypeScript Style

```typescript
// ✅ Good
interface MyModuleConfig {
  param1: string
  param2: number
}

export function myModule(config: MyModuleConfig): Result {
  // Implementation
}

// ❌ Bad
export function myModule(param1, param2) {
  // No types
}
```

### Naming Conventions

- **Files**: camelCase.ts (เช่น `formatProgress.ts`)
- **Functions**: camelCase (เช่น `formatProgress()`)
- **Interfaces**: PascalCase (เช่น `ProgressData`)
- **Constants**: UPPER_CASE (เช่น `MAX_TASKS`)

### Comments

```typescript
/**
 * Function description
 * @param data Progress data to format
 * @returns Formatted progress with emoji and message
 */
export function formatProgress(data: ProgressData): FormattedProgress {
  // Implementation
}
```

## 🎁 Rewards สำหรับ Contributors

### Badges

- 🌟 **First Contribution** - PR แรกที่ merged
- 🚀 **Module Creator** - สร้าง external module
- 📚 **Educator** - สร้าง lesson/quest
- 🐛 **Bug Hunter** - แก้ไข bug
- 💎 **Top Contributor** - contribute มากกว่า 10 PRs

### MEE Tokens

| Contribution Type | Reward |
|-------------------|--------|
| Bug fix | 50-200 MEE |
| New module | 200-1000 MEE |
| New lesson | 100-500 MEE |
| Documentation | 50-200 MEE |
| Major feature | 500-5000 MEE |

### Special Privileges

- ✅ Listed in Contributors page
- ✅ Early access to new features
- ✅ Vote on roadmap decisions
- ✅ Discord contributor role

## 🔍 Code Review Process

1. **Submit PR** - กรอกข้อมูลให้ครบถ้วน
2. **Auto checks** - CI จะรัน linting และ tests
3. **Review** - Maintainers จะ review ภายใน 48 ชั่วโมง
4. **Feedback** - อาจมี comments ให้แก้ไข
5. **Merge** - เมื่อผ่าน review จะ merge เข้า main
6. **Badge Award** - รับ badge และ MEE tokens อัตโนมัติ

## ✅ PR Checklist

ก่อนส่ง PR ตรวจสอบว่า:

- [ ] โค้ดรันได้และไม่มี errors
- [ ] มี type definitions ครบถ้วน
- [ ] มี comments/documentation
- [ ] ผ่าน linting rules
- [ ] ไม่ break existing features
- [ ] เพิ่ม tests (ถ้าเป็นไปได้)
- [ ] อัพเดท README (ถ้าจำเป็น)

## 🚫 What NOT to do

- ❌ Copy code จาก projects อื่นโดยไม่ใส่ license
- ❌ Submit spam PRs
- ❌ Commit secrets หรือ API keys
- ❌ Break existing functionality
- ❌ Ignore code review feedback

## 💬 Communication

### GitHub Issues
- Bug reports
- Feature requests
- Questions

### GitHub Discussions
- General questions
- Ideas และ brainstorming
- Show your projects

### Discord (Coming soon)
- Real-time chat
- Community support
- Announcements

## 📚 Resources

- [External Modules Setup Guide](./EXTERNAL_MODULES_SETUP.md)
- [API Documentation](./API.md)
- [Architecture Overview](./ARCHITECTURE.md)

## 🙏 Code of Conduct

- เคารพซึ่งกันและกัน
- ช่วยเหลือ newcomers
- ให้ feedback แบบสร้างสรรค์
- No harassment, discrimination
- Focus on collaboration

## 📞 Contact

- **GitHub Issues**: Technical questions
- **Email**: contribute@meechain.io
- **Twitter**: @MeeChain

---

**พร้อมแล้ว?** อ่าน [External Modules Setup](./EXTERNAL_MODULES_SETUP.md) แล้วเริ่ม contribute กันเลย! 🚀
