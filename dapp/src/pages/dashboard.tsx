import Link from 'next/link'

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📊 Dashboard</h1>
      <p>ดูความก้าวหน้าของคุณ และจัดการ Boards ทั้งหมด</p>
      
      {/* Quick Actions */}
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/token-dashboard">
          <a style={{
            padding: '1rem 1.5rem',
            background: '#4f46e5',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            💰 Token Dashboard
          </a>
        </Link>
      </div>

      {/* TODO: เชื่อมกับ Firebase และแสดงข้อมูล Boards */}
    </div>
  )
}
