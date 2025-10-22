# Copilot Instructions for MeeChain DApp

## Project Overview

- **MeeChain DApp** is a full-stack Web3 application with:
  - **Frontend**: React (TypeScript, Vite, Tailwind, Radix UI)
  - **Backend**: Node.js API (TypeScript)
  - **Smart Contracts**: Solidity (ERC-20, ERC-721 Soulbound)
  - **Shared**: TypeScript types/schemas for cross-layer consistency

## Architecture & Key Patterns

- **Frontend** (`src/`, `client/`):
  - UI in `components/`, with reusable primitives in `ui/` and Web3 logic in `web3/`
  - Page routing via Wouter (`pages/`)
  - State: React Query, Context API
  - Custom hooks in `hooks/`
  - Styles: Tailwind, Radix UI
- **Backend** (`server/`, `backend/`):
  - API endpoints in `server/api/` and `backend/api/`
  - Utility logic in `server/utils/` and `backend/storage/`
  - Route definitions in `server/routes.ts` and `backend/routes.ts`
- **Smart Contracts** (`contracts/`):
  - `Token.sol`: ERC-20 with tier logic
  - `MembershipNFT.sol`: Soulbound ERC-721 for membership
  - Interfaces in `contracts/interfaces/`
- **Shared Types**: `shared/src/schema.ts` for data validation/types

## Developer Workflows

- **Install**: `npm install` (root or relevant package)
- **Dev Server**: `npm run dev` (frontend)
- **Type Check**: `npm run type-check`
- **Lint**: `npm run lint`
- **Build**: `npm run build`
- **Test**: (if present) `npm test` or see `contracts/badge.test.js`
- **Env Setup**: Copy `.env.example` to `.env` as needed

## Conventions & Integration

- **Web3**: Use Ethers.js for blockchain interactions
- **MetaMask**: Primary wallet integration
- **State**: Use React Query for async data, Context for global state
- **Component Structure**: Prefer colocating logic with UI in `components/`
- **API**: Use shared types for request/response validation
- **Smart Contract ABIs**: See `docs/SMART_CONTRACT_ABI_SUMMARY.md`
- **Testing**: Smart contract tests in `MeeChain-dapp/contracts/`

## Examples

- **Adding a UI component**: Place in `frontend/components/ui/`, style with Tailwind, export for reuse
- **Adding an API route**: Implement in `server/api/` or `backend/api/`, update `routes.ts`
- **Updating contract logic**: Edit `.sol` files in `contracts/`, update ABIs/docs as needed

## References

- Main docs: `README.md`, `server/README.md`, `docs/`
- Shared types: `shared/src/schema.ts`
- Smart contract summary: `docs/SMART_CONTRACT_ABI_SUMMARY.md`

---

For unclear workflows or missing conventions, check the relevant `README.md` or ask for clarification.
