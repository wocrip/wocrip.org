import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 5em 2.5em 2.5em;
  font-size: 0.7em;
`

const Footer = (props) => (
  <Wrapper {...props} />
)

export default Footer
