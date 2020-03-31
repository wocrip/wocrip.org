import React from 'react'
import styled, { css } from 'styled-components'
import { Box } from '@rebass/grid'

import { settings } from 'theme'


const { container } = settings

const Container = styled(({ maxwidth, size, ...rest }) => <Box {...rest} />)`
  max-width: ${({ maxwidth, size }) =>
    typeof maxwidth === 'number' ? `${maxwidth * size}px` : maxwidth};
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ display }) => display && css`
    display: ${display};
  `}

  ${({ position }) => position && css`
    position: ${position};
  `}

  ${({ align }) => align && css`
    text-align: ${align};
  `}
`

Container.defaultProps = {
  maxwidth: container.maxwidth,
  size: 1,
}

export default Container
