# React Basics

เรียนรู้พื้นฐาน React สำหรับสร้าง DApp

## บทที่ 1: React คืออะไร?

React คือ JavaScript library สำหรับสร้าง user interfaces โดยเฉพาะ single-page applications

### ทำไมต้องใช้ React?

- ⚡ **Fast** - Virtual DOM ทำให้ performance ดี
- 🧩 **Component-based** - แบ่งเป็น components ใช้ซ้ำได้
- 🔄 **Declarative** - เขียนง่าย อ่านง่าย
- 📱 **Cross-platform** - ใช้ได้ทั้ง web และ mobile (React Native)

## บทที่ 2: Components

Component คือหน่วยพื้นฐานของ React app

### Functional Component

```tsx
function Welcome() {
  return <h1>สวัสดี MeeChain!</h1>
}
```

### Component with Props

```tsx
interface WelcomeProps {
  name: string
}

function Welcome({ name }: WelcomeProps) {
  return <h1>สวัสดี {name}!</h1>
}

// Usage
<Welcome name="MeeBot" />
```

## บทที่ 3: State และ Hooks

### useState Hook

```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>คุณกด {count} ครั้ง</p>
      <button onClick={() => setCount(count + 1)}>
        กดที่นี่
      </button>
    </div>
  )
}
```

### useEffect Hook

```tsx
import { useState, useEffect } from 'react'

function DataFetcher() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // ดึงข้อมูลเมื่อ component mount
    fetchData().then(result => setData(result))
  }, []) // [] หมายถึงรันครั้งเดียว

  return <div>{data}</div>
}
```

## บทที่ 4: Event Handling

```tsx
function TaskItem({ task, onComplete }) {
  const handleClick = () => {
    console.log('Task clicked:', task.title)
    onComplete(task.id)
  }

  return (
    <div onClick={handleClick}>
      {task.title}
    </div>
  )
}
```

## บทที่ 5: Conditional Rendering

```tsx
function TaskList({ tasks, loading }) {
  if (loading) {
    return <div>กำลังโหลด...</div>
  }

  if (tasks.length === 0) {
    return <div>ยังไม่มีงาน</div>
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  )
}
```

## บทที่ 6: Lists และ Keys

```tsx
function BoardList({ boards }) {
  return (
    <div>
      {boards.map(board => (
        <div key={board.id}>
          <h3>{board.title}</h3>
          <p>{board.description}</p>
        </div>
      ))}
    </div>
  )
}
```

## แบบฝึกหัด

1. สร้าง Counter component ที่มีปุ่ม +1 และ -1
2. สร้าง TodoList component ที่สามารถเพิ่มและลบรายการได้
3. สร้าง ProgressBar component แบบ MeeChain
4. รวม components ทั้งหมดเป็น Dashboard

## Resources

- [React Official Docs](https://react.dev)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)
- [Next.js Documentation](https://nextjs.org/docs)

## Next Lesson

หลังจากเรียนรู้ React แล้ว ต่อไปเรียนรู้:
- [Solidity Intro](./solidity-intro.md) - เรียนรู้เขียน Smart Contracts
- [Web3 Integration](./web3-integration.md) - เชื่อม React กับ Web3
