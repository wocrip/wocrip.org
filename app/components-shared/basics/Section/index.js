import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

import { getColor } from 'theme'


const { background, text } = getColor

const Section = styled(({ reversed, noReverse, theme, ...rest }) => <Flex {...rest} />)`
  background-color: ${(props) => background(props)};
  color: ${(props) => text(props)};
`

export default Section
