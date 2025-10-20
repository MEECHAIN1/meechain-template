# MeeChain Smart Contracts

Solidity smart contracts สำหรับ MeeChain Task-to-Progress platform

## Contracts

### MeeChainToken (MEE)
ERC-20 token ที่ใช้เป็นรางวัลจากการทำงานสำเร็จ

**Features:**
- Mintable เมื่อผู้ใช้ทำงานสำเร็จ
- กำหนดจำนวน reward ต่องานได้
- ติดตาม tasks completed ของแต่ละผู้ใช้

### BadgeMint (MEEBADGE)
ERC-721 NFT สำหรับ achievement badges

**Features:**
- Mint badge ตามความสำเร็จ
- เก็บ metadata และ timestamp
- แสดงรายการ badges ของผู้ใช้

## Setup

```bash
# ติดตั้ง dependencies
npm install

# คัดลอก .env.example และกำหนดค่า
cp .env.example .env

# แก้ไข .env ให้ถูกต้อง
# - PRIVATE_KEY: private key สำหรับ deployment
# - RPC_URL: RPC endpoint
# - ETHERSCAN_API_KEY: สำหรับ verify contract
```

## Development

```bash
# Compile contracts
npm run compile

# Run tests
npm run test

# Deploy to local network
npx hardhat node
npm run deploy

# Deploy to testnet/mainnet
npm run deploy -- --network sepolia
```

## Deployment

1. ตั้งค่า `.env` ให้ครบถ้วน
2. Run deployment script:
   ```bash
   npx hardhat run scripts/deploy.ts --network sepolia
   ```
3. Verify contracts:
   ```bash
   # แก้ไข addresses ใน scripts/verify.ts ก่อน
   npx hardhat run scripts/verify.ts --network sepolia
   ```

## Testing

```bash
# Run all tests
npm run test

# Run with coverage
npx hardhat coverage

# Run specific test
npx hardhat test test/MeeChainToken.test.ts
```

## Contract Addresses

เมื่อ deploy แล้ว บันทึก addresses ที่นี่:

### Testnet (Sepolia)
- MeeChainToken: `0x...`
- BadgeMint: `0x...`

### Mainnet
- MeeChainToken: `0x...`
- BadgeMint: `0x...`

## Security

- ✅ ใช้ OpenZeppelin contracts
- ✅ Access control ด้วย Ownable
- ⚠️ ควร audit ก่อน deploy จริง
- ⚠️ ระวัง private key อย่าให้รั่วไหล

## License

MIT
