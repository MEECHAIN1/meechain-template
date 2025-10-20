interface ProgressBarProps {
  current: number
  total: number
  color?: string
}

export default function ProgressBar({ current, total, color = '#4CAF50' }: ProgressBarProps) {
  const percentage = Math.min((current / total) * 100, 100)

  return (
    <div style={{ width: '100%', marginBottom: '1rem' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginBottom: '0.5rem',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        <span>ความก้าวหน้า</span>
        <span>{current} / {total} งาน ({percentage.toFixed(0)}%)</span>
      </div>
      <div style={{
        width: '100%',
        height: '24px',
        backgroundColor: '#e0e0e0',
        borderRadius: '12px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: color,
          transition: 'width 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 'bold'
        }}>
          {percentage > 10 && `${percentage.toFixed(0)}%`}
        </div>
      </div>
    </div>
  )
}
