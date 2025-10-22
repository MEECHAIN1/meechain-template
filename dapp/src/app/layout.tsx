import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MeeChain - Task-to-Progress DApp',
  description: 'เปลี่ยนงานเป็นความก้าวหน้า ด้วย MeeBot และ Web3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
