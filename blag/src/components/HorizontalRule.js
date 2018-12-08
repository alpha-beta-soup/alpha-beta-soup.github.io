import React from 'react'
import styled from "styled-components"

const Hr = styled.hr`
  overflow: visible;
  padding: 0;
  margin-top: 15px;
  margin-bottom: 15px;
  opacity: 0.4;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
  &:after {
     content: "§";
     display: inline-block;
     position: relative;
     top: -1em;
     font-size: 1em;
     padding: 0 0.25em;
     background: white;
  }
`

class HR extends React.Component {
  render() {
    return <Hr/>
  }
}

export default HR
