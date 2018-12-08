import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import HR from './HorizontalRule'
import profilePic from './profile.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Richard Law`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            marginTop: rhythm(1),
            // width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <p>
          Welcome to the blog and personal website of <strong>Richard Law</strong>, a geographer/programmer who eats, sleeps, raves, repeats in the Manawatū, New Zealand.<HR/>
          You should absolutely not follow me on <a href="https://twitter.com/alphabeta">Twitter</a>, because social media is a enormous waste of your potential, and you pay for it by indirectly selling your soul to advertisers.<HR/>
          I contribute to <a href="https://gis.stackexchange.com/users/25417/richard-law">gis.stackexchange.com</a>.<br/>
          I'm active on <a href="https://thespatialcommunity.org/">The Spatial Community</a>, a Slack group for geospatial enthusisasts.<br/>
          I'm on <a href="https://github.com/alpha-beta-soup">Github</a>.<br/>
          I only want to my make my grandparents proud.
        </p>
      </div>
    )
  }
}

export default Bio
