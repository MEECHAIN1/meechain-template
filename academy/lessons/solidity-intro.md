# Solidity Introduction

เรียนรู้พื้นฐาน Solidity สำหรับเขียน Smart Contracts

## บทที่ 1: Smart Contract คืออะไร?

Smart Contract คือโปรแกรมที่รันบน blockchain โดยเมื่อ deploy แล้วจะไม่สามารถแก้ไขได้

### คุณสมบัติของ Smart Contract

- 🔒 **Immutable** - ไม่สามารถแก้ไขได้หลัง deploy
- 🌐 **Decentralized** - รันบน blockchain ไม่มี server กลาง
- 🔐 **Trustless** - ไม่ต้องไว้วางใจคนกลาง
- 📝 **Transparent** - ทุกคนดูโค้ดได้

## บทที่ 2: Hello World Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HelloWorld {
    string public message;

    constructor() {
        message = "Hello, MeeChain!";
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
```

### อธิบาย

- `pragma solidity ^0.8.20;` - ระบุเวอร์ชันของ Solidity
- `contract HelloWorld` - ประกาศ contract
- `string public message` - ตัวแปร state แบบ public
- `constructor()` - ฟังก์ชันที่รันครั้งเดียวตอน deploy
- `function` - ฟังก์ชันต่างๆ ของ contract

## บทที่ 3: Data Types

### Basic Types

```solidity
contract DataTypes {
    // Boolean
    bool public isActive = true;

    // Integers
    uint256 public count = 0;        // unsigned (ไม่มีเครื่องหมาย)
    int256 public temperature = -10;  // signed (มีเครื่องหมาย)

    // Address
    address public owner;

    // String
    string public name = "MeeChain";

    // Bytes
    bytes32 public data;
}
```

## บทที่ 4: Functions

### Function Visibility

```solidity
contract Visibility {
    // public - เรียกได้ทั้งใน/นอก contract
    function publicFunc() public { }

    // private - เรียกได้เฉพาะใน contract นี้
    function privateFunc() private { }

    // internal - เรียกได้ใน contract และ contract ที่ inherit
    function internalFunc() internal { }

    // external - เรียกได้เฉพาะจากภายนอก
    function externalFunc() external { }
}
```

### Function Modifiers

```solidity
contract Modifiers {
    // view - อ่านข้อมูลอย่างเดียว
    function getValue() public view returns (uint) {
        return value;
    }

    // pure - ไม่อ่านและไม่เขียน state
    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    // payable - รับ ETH ได้
    function deposit() public payable {
        // ...
    }
}
```

## บทที่ 5: Events

```solidity
contract EventExample {
    event TaskCompleted(
        address indexed user,
        uint256 taskId,
        uint256 timestamp
    );

    function completeTask(uint256 taskId) public {
        // Do something...
        
        emit TaskCompleted(msg.sender, taskId, block.timestamp);
    }
}
```

## บทที่ 6: Mappings

```solidity
contract MappingExample {
    // mapping คล้ายๆ dictionary หรือ object
    mapping(address => uint256) public balances;
    mapping(address => bool) public hasAccess;

    function updateBalance(address user, uint256 amount) public {
        balances[user] = amount;
    }

    function getBalance(address user) public view returns (uint256) {
        return balances[user];
    }
}
```

## บทที่ 7: Access Control

```solidity
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
    constructor() Ownable(msg.sender) { }

    // เฉพาะ owner เรียกได้
    function adminFunction() public onlyOwner {
        // ...
    }
}
```

## บทที่ 8: ERC-20 Token

```solidity
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10**decimals());
    }
}
```

## แบบฝึกหัด

1. สร้าง Simple Storage contract ที่เก็บและอ่านตัวเลข
2. สร้าง Todo List contract ที่เก็บรายการงาน
3. สร้าง Token contract แบบง่าย
4. ศึกษา MeeChainToken.sol ใน smart-contracts/

## Best Practices

- ✅ ใช้ OpenZeppelin contracts
- ✅ ตรวจสอบ input data
- ✅ ใช้ events สำหรับ logging
- ✅ เขียน tests ก่อน deploy
- ⚠️ ระวัง reentrancy attacks
- ⚠️ ระวัง integer overflow (ใช้ SafeMath)

## Resources

- [Solidity Docs](https://docs.soliditylang.org)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)
- [Ethernaut](https://ethernaut.openzeppelin.com) - Security challenges

## Next Lesson

- [Advanced Solidity](./advanced-solidity.md)
- [Testing Smart Contracts](./testing-contracts.md)
