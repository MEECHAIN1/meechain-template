import { useState } from 'react'

interface MeeBotProps {
  emotion?: 'happy' | 'encouraging' | 'celebrating'
  message?: string
}

export default function MeeBot({ emotion = 'happy', message }: MeeBotProps) {
  const [isListening, setIsListening] = useState(false)

  const emotionEmoji = {
    happy: '😊',
    encouraging: '💪',
    celebrating: '🎉'
  }

  return (
    <div style={{ 
      padding: '1.5rem', 
      border: '2px solid #4CAF50', 
      borderRadius: '12px',
      backgroundColor: '#f0f9f0',
      maxWidth: '400px'
    }}>
      <div style={{ fontSize: '3rem', textAlign: 'center' }}>
        {emotionEmoji[emotion]}
      </div>
      {message && (
        <p style={{ textAlign: 'center', margin: '1rem 0' }}>{message}</p>
      )}
      <button 
        onClick={() => setIsListening(!isListening)}
        style={{
          width: '100%',
          padding: '0.75rem',
          backgroundColor: isListening ? '#f44336' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}
      >
        {isListening ? '🎤 กำลังฟัง...' : '🎤 คุยกับ MeeBot'}
      </button>
    </div>
  )
}
