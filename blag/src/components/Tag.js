import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

import Badge from './Badge'

const TagContainer = styled.div`
  display: inline-block;
  padding-left: 1px;
  padding-right: 1px;
  font-size: 0.8em;
  a {
    color: inherit;
  }
  text-align: center;
`

const TagButton = styled.div`
  border: 0;
  border-radius: 5px;
  padding: 0;
  background-color: #e8e8e7;
  &:hover {
    color: #fff !important;
    background-color: #3d93f6;
  }
  position: relative;
  width: 100%;
  font-weight: bolder;
`

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

class Tag extends React.Component {
  render() {
    return (
      <TagContainer>
        <TagButton className="tag-button">
          <Link style={{padding: '0.1vw 0.7vw', display: 'inline-block', width: '100%'}} to={`/tags/${kebabCase(this.props.tag)}`}>{this.props.tag}</Link>
          {(this.props.value !== undefined) && <Badge value={this.props.value}/>}
        </TagButton>
      </TagContainer>
    )
  }
}

export default Tag
