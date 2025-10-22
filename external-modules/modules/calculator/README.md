# Calculator Module

โมดูลสำหรับคำนวณนิพจน์ทางคณิตศาสตร์

## Features

- ✅ รองรับการดำเนินการพื้นฐาน (+, -, *, /)
- ✅ รองรับ modulo (%)
- ✅ รองรับการยกกำลัง (**)
- ✅ รองรับวงเล็บ
- ✅ Validation ของ input

## Installation

```bash
# โมดูลนี้ถูกโหลดผ่าน Module Loader
```

## Usage

### ผ่าน Module Loader

```javascript
const ModuleLoader = require('../../loader/loader');

const loader = new ModuleLoader();
await loader.initialize();

const result = await loader.execute('calculator', {
  input: '2 + 2'
});

console.log(result.message);
// Output: ผลลัพธ์: 4
```

### Direct Usage

```javascript
const CalculatorModule = require('./index');

const calc = new CalculatorModule();
const result = await calc.execute({
  input: '10 * 5'
});

console.log(result);
// { success: true, message: 'ผลลัพธ์: 50', data: {...} }
```

## API

### `execute(context)`

Execute calculation

**Parameters:**
- `context` (Object):
  - `input` (string): Mathematical expression

**Returns:**
- `Promise<Object>`:
  - `success` (boolean): Execution status
  - `message` (string): Result message
  - `data` (Object): Additional data
    - `expression` (string): Original expression
    - `result` (number): Calculation result
    - `timestamp` (string): ISO timestamp

### `validate(input)`

Validate mathematical expression

**Parameters:**
- `input` (string): Expression to validate

**Returns:**
- `boolean`: Is valid

### `calculate(expression)`

Calculate mathematical expression

**Parameters:**
- `expression` (string): Mathematical expression

**Returns:**
- `number`: Calculation result

### `getHelp()`

Get help information

## Examples

### Example 1: Basic Operations

```javascript
// Addition
await calc.execute({ input: '2 + 2' });
// Result: 4

// Subtraction
await calc.execute({ input: '10 - 3' });
// Result: 7

// Multiplication
await calc.execute({ input: '5 * 6' });
// Result: 30

// Division
await calc.execute({ input: '20 / 4' });
// Result: 5
```

### Example 2: Complex Expressions

```javascript
// With parentheses
await calc.execute({ input: '(5 + 3) * 2' });
// Result: 16

// With power
await calc.execute({ input: '2 ** 3' });
// Result: 8

// Modulo
await calc.execute({ input: '10 % 3' });
// Result: 1
```

### Example 3: Decimals

```javascript
await calc.execute({ input: '10.5 + 2.3' });
// Result: 12.8

await calc.execute({ input: '7.5 / 2' });
// Result: 3.75
```

## MeeBot Integration

โมดูลนี้รองรับการใช้งานกับ MeeBot:

**Triggers:** `calc`, `calculate`, `คำนวณ`

**Example:**
```
User: calc 2 + 2
MeeBot: ผลลัพธ์: 4
```

## Supported Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `2 + 3 = 5` |
| `-` | Subtraction | `5 - 2 = 3` |
| `*` | Multiplication | `4 * 3 = 12` |
| `/` | Division | `10 / 2 = 5` |
| `%` | Modulo | `10 % 3 = 1` |
| `**` | Power | `2 ** 3 = 8` |
| `()` | Parentheses | `(2 + 3) * 4 = 20` |

## Testing

```bash
node test.js
```

## Security Note

This module uses `Function()` for calculation which is safer than `eval()` but still has limitations. For production use, consider using a dedicated math expression parser library.

## License

MIT
