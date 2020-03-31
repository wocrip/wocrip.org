import React from 'react'
import styled, { css } from 'styled-components'

import { settings } from 'theme'


const ServiceContainer = styled(
  ({
    reversed,
    theme,
    isOnPage,
    padding,
    ...rest
  }) => <div {...rest} />
)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  padding: 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  ${({ padding }) => padding && css`
    padding: ${padding};
  `}

  ${({ isOnPage }) => isOnPage && css`
    margin: 0 -30px;

    @media (max-width: 600px) {
      margin: 0 -20px;
    }
  `}
`

ServiceContainer.defaultProps = {
  reversed: settings.reversed,
}

export default ServiceContainer
