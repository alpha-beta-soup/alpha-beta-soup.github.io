'use client'

import React, { Children } from 'react'

type DialogueMessageProps = {
  name: string
  children: React.ReactNode
  side?: 'left' | 'right'
}

export function DialogueMessage({ name, children, side }: DialogueMessageProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: side === 'right' ? 'flex-end' : 'flex-start',
        marginBottom: '1.5rem',
      }}
    >
      <div
        style={{
          fontSize: '0.85rem',
          opacity: 0.7,
          marginBottom: '0.15rem',
          paddingLeft: side === 'right' ? 0 : '0.5rem',
          paddingRight: side === 'right' ? '0.5rem' : 0,
          alignSelf: side === 'right' ? 'flex-end' : 'flex-start',
        }}
      >
        {name}
      </div>
      <div
        style={{
          maxWidth: '70%',
          padding: '1rem',
          fontSize: '0.95rem',
          lineHeight: '1.5',
          border: '1px solid var(--editorial-border)',
          borderTopLeftRadius: side === 'right' ? '0.5rem' : 0,
          borderTopRightRadius: side === 'left' ? '0.5rem' : 0,
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
        }}
      >
        <div className="dialogue-message-content">{children}</div>
      </div>
    </div>
  )
}

export function Dialogue({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        margin: '1.5rem 0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  )
}
