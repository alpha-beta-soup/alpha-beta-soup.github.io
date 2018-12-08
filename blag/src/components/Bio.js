import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginTop: rhythm(2),
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Richard Law`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            // width: rhythm(2),
            marginTop: rhythm(0.5),
            marginBottom: rhythm(1),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <div>
          Welcome to the blog and personal website of <strong>Richard Law</strong>, a geographer/programmer who
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            fontFamily: 'monospace',
            lineHeight: '0.8em',
            textAlign: 'center'
          }}>
            <div style={{gridColumnStart: 1, gridColumnEnd: 2, gridRow: 1}}>eats</div>
            <div style={{gridColumnStart: 2, gridColumnEnd: 3, gridRow: 2}}>sleeps</div>
            <div style={{gridColumnStart: 3, gridColumnEnd: 4, gridRow: 1}}>raves</div>
            <div style={{gridColumnStart: 4, gridColumnEnd: 5, gridRow: 2}}>repeats</div>
          </div>
          in the Manawatū, New Zealand.
        </div>
      </div>
    )
  }
}

export default Bio
