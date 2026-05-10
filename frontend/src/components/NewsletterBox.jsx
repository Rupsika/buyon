import React, { useState } from 'react'

const NewsletterBox = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      borderRadius: '20px',
      padding: '60px 40px',
      textAlign: 'center',
      margin: '40px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Offer badge */}
      <div style={{
        display: 'inline-block',
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '100px',
        padding: '6px 18px',
        marginBottom: '24px',
        fontSize: '11px',
        fontWeight: '600',
        color: '#c8c8c8',
        letterSpacing: '2px',
        textTransform: 'uppercase',
      }}>
        Exclusive Offer
      </div>

      {/* Heading */}
      <h2 style={{
        fontSize: 'clamp(26px, 4vw, 42px)',
        fontWeight: '300',
        color: '#ffffff',
        margin: '0 0 8px',
        letterSpacing: '-0.5px',
        lineHeight: 1.15,
        fontFamily: 'Georgia, serif',
      }}>
        Subscribe & Save{' '}
        <span style={{ fontStyle: 'italic', color: '#d4a96a' }}>20%</span>
      </h2>

      {/* Subtext */}
      <p style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.45)',
        maxWidth: '400px',
        margin: '0 auto 36px',
        lineHeight: '1.7',
        letterSpacing: '0.2px',
      }}>
        New arrivals, exclusive drops, and member-only offers — delivered straight to your inbox.
      </p>

      {/* Success state */}
      {submitted ? (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '100px',
          padding: '14px 32px',
          color: '#a8d5a2',
          fontSize: '14px',
          fontWeight: '500',
          letterSpacing: '0.3px',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7.5" stroke="#a8d5a2" strokeWidth="1" />
            <path d="M5 8.5l2 2 4-4" stroke="#a8d5a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          You're on the list — check your inbox!
        </div>
      ) : (
        <form
          onSubmit={onSubmitHandler}
          style={{
            display: 'flex',
            maxWidth: '460px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '100px',
            padding: '6px 6px 6px 24px',
            gap: '8px',
            alignItems: 'center',
          }}
        >
         <input
  type="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Your email address"
  style={{
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#ffffff',        // ← already white, but browser autofill overrides it
    fontSize: '14px',
    letterSpacing: '0.2px',
    caretColor: '#ffffff',  // ← add this: makes the cursor white too
  }}
/>
          <button
            type="submit"
            onMouseEnter={e => e.currentTarget.style.background = '#e8e8e8'}
            onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
            style={{
              background: '#ffffff',
              color: '#1a1a1a',
              border: 'none',
              borderRadius: '100px',
              padding: '11px 24px',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s, transform 0.1s',
            }}
          >
            Subscribe
          </button>
        </form>
      )}

      {/* Fine print */}
      <p style={{
        marginTop: '20px',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.22)',
        letterSpacing: '0.3px',
      }}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  )
}

export default NewsletterBox