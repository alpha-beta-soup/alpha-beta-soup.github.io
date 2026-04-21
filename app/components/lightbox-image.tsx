'use client'

import React, { useEffect } from 'react'

type LightboxImageProps = {
  src: string
  alt: string
  style?: React.CSSProperties
  className?: string
}

export default function LightboxImage({ src, alt, style, className }: LightboxImageProps) {
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open image: ${alt}`}
        style={{
          border: 'none',
          background: 'transparent',
          padding: 0,
          width: '100%',
          height: '100%',
          cursor: 'zoom-in',
        }}
      >
        <img src={src} alt={alt} style={style} className={className} />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgb(0 0 0 / 0.78)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'zoom-out',
          }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close image"
            style={{
              position: 'fixed',
              top: '1rem',
              right: '1rem',
              border: 'none',
              background: 'rgb(0 0 0 / 0.5)',
              color: 'white',
              borderRadius: '9999px',
              width: '2.25rem',
              height: '2.25rem',
              cursor: 'pointer',
              fontSize: '1.1rem',
              lineHeight: 1,
            }}
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 'min(95vw, 1400px)',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '0.5rem',
              boxShadow: '0 12px 48px rgb(0 0 0 / 0.45)',
              cursor: 'auto',
            }}
          />
        </div>
      ) : null}
    </>
  )
}
