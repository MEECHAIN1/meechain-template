# Greeting Module

โมดูลสำหรับทักทายผู้ใช้ด้วยรูปแบบต่างๆ ตามเวลาของวัน

## Features

- ✅ ทักทายตามเวลา (เช้า/บ่าย/เย็น)
- ✅ ใช้ชื่อผู้ใช้ในการทักทาย
- ✅ รองรับหลายภาษา
- ✅ Emoji support

## Installation

```bash
# โมดูลนี้ถูกโหลดผ่าน Module Loader
# ไม่ต้อง install แยก
```

## Usage

### ผ่าน Module Loader

```javascript
const ModuleLoader = require('../../loader/loader');

const loader = new ModuleLoader();
await loader.initialize();

const result = await loader.execute('greeting', {
  user: { name: 'John' },
  input: 'สวัสดี'
});

console.log(result.message);
// Output: สวัสดีตอนเช้า คุณJohn! 💙
```

### Direct Usage

```javascript
const GreetingModule = require('./index');

const greeting = new GreetingModule();
const result = await greeting.execute({
  user: { name: 'Jane' },
  input: 'hello'
});

console.log(result);
```

## API

### `execute(context)`

Execute the greeting module

**Parameters:**
- `context` (Object):
  - `user` (Object): User information
    - `name` (string): User's name
  - `input` (string): User input

**Returns:**
- `Promise<Object>`:
  - `success` (boolean): Execution status
  - `message` (string): Greeting message
  - `data` (Object): Additional data
    - `greeting` (string): The greeting text
    - `userName` (string): User's name
    - `hour` (number): Current hour
    - `timestamp` (string): ISO timestamp

### `validate(input)`

Validate input (always returns true for greeting)

### `getHelp()`

Get help information

## Examples

### Example 1: Morning Greeting

```javascript
const result = await greeting.execute({
  user: { name: 'Alice' },
  input: 'hi'
});

// At 9 AM:
// { 
//   success: true,
//   message: 'สวัสดีตอนเช้า คุณAlice! 💙',
//   data: { ... }
// }
```

### Example 2: Evening Greeting

```javascript
const result = await greeting.execute({
  user: { name: 'Bob' },
  input: 'สวัสดี'
});

// At 7 PM:
// {
//   success: true,
//   message: 'สวัสดีตอนเย็น คุณBob! 💙',
//   data: { ... }
// }
```

## MeeBot Integration

โมดูลนี้รองรับการใช้งานกับ MeeBot:

**Triggers:** `hello`, `hi`, `สวัสดี`, `ทักทาย`

**Example:**
```
User: สวัสดี
MeeBot: สวัสดีตอนบ่าย! 💙
```

## Testing

```bash
node test.js
```

## License

MIT
