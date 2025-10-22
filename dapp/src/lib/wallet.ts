import { ethers } from 'ethers'

// Provider สำหรับเชื่อม Wallet
export async function connectWallet() {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('กรุณาติดตั้ง MetaMask')
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const accounts = await provider.send('eth_requestAccounts', [])
    const signer = await provider.getSigner()
    const address = await signer.getAddress()
    
    return { provider, signer, address }
  } catch (error) {
    console.error('Error connecting wallet:', error)
    throw error
  }
}

// ตรวจสอบว่าผู้ใช้เชื่อม Wallet แล้วหรือไม่
export async function getConnectedWallet() {
  if (typeof window === 'undefined' || !window.ethereum) {
    return null
  }

  try {
    const provider = new ethers.BrowserProvider(window.ethereum)
    const accounts = await provider.send('eth_accounts', [])
    
    if (accounts.length === 0) {
      return null
    }

    const signer = await provider.getSigner()
    const address = await signer.getAddress()
    
    return { provider, signer, address }
  } catch (error) {
    console.error('Error getting connected wallet:', error)
    return null
  }
}

// เปลี่ยน Network
export async function switchNetwork(chainId: number) {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('กรุณาติดตั้ง MetaMask')
  }

  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${chainId.toString(16)}` }],
    })
  } catch (error: any) {
    // Error code 4902 หมายถึง chain ยังไม่ถูกเพิ่มใน MetaMask
    if (error.code === 4902) {
      throw new Error('กรุณาเพิ่ม Network นี้ใน MetaMask')
    }
    throw error
  }
}

// ประกาศ type สำหรับ window.ethereum
declare global {
  interface Window {
    ethereum?: any
  }
}
