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
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <p>
          Welcome to the blog and personal website of <strong>Richard Law</strong>, a geographer/programmer who eats, sleeps, raves, repeats in the Manawatū, New Zealand.
        </p>
      </div>
    )
  }
}

export default Bio
