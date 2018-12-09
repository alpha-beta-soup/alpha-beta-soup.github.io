import React from 'react'
import styled from 'styled-components'

const BadgeDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  width: 12px;
  height: 12px;
  font-size: 5pt;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background-color: #3d93f6;
  color: white;
  pointer-events: none;
`

const ValueDiv = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

class Badge extends React.Component {
  render() {
    const { value } = this.props
    return (
      <BadgeDiv>
        <ValueDiv>
          {value}
        </ValueDiv>
      </BadgeDiv>
    )
  }
}

export default Badge
