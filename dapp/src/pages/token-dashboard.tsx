'use client'
import React from 'react'
import Link from 'next/link'

export default function TokenDashboard() {
  const mockBalance = 1234.56
  const tokenSymbol = 'MECH'
  const usdEquivalent = (mockBalance * 0.05).toFixed(2)

  const mockTransactions = [
    { date: '2025-11-04', type: 'Received', amount: '+50.00 MECH' },
    { date: '2025-11-03', type: 'Sent', amount: '-25.50 MECH' },
    { date: '2025-11-02', type: 'Swap', amount: '+100.00 MECH' },
  ]

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Token Dashboard</h1>
      
      {/* Token Balance Card */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '12px',
        padding: '2rem',
        color: 'white',
        marginTop: '1.5rem',
        marginBottom: '2rem',
      }}>
        <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '0.5rem' }}>
          Total Balance
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {mockBalance.toFixed(2)} {tokenSymbol}
        </div>
        <div style={{ fontSize: '1rem', opacity: 0.85 }}>
          ≈ ${usdEquivalent} USD
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        <button
          aria-label="Send tokens"
          style={{
            flex: 1,
            padding: '1rem',
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
        <button
          aria-label="Receive tokens"
          style={{
            flex: 1,
            padding: '1rem',
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Receive
        </button>
        <button
          aria-label="Swap tokens"
          style={{
            flex: 1,
            padding: '1rem',
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Swap
        </button>
      </div>

      {/* Recent Transactions */}
      <div style={{
        background: '#f9fafb',
        borderRadius: '12px',
        padding: '1.5rem',
      }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', marginTop: 0 }}>
          Recent Activity
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {mockTransactions.map((tx, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem',
                background: 'white',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
              }}
            >
              <div>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  {tx.type}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {tx.date}
                </div>
              </div>
              <div style={{
                fontWeight: '600',
                color: tx.amount.startsWith('+') ? '#10b981' : '#ef4444',
              }}>
                {tx.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Dashboard Link */}
      <div style={{ marginTop: '2rem' }}>
        <Link href="/dashboard" style={{ color: '#4f46e5', textDecoration: 'none' }}>
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  )
}
