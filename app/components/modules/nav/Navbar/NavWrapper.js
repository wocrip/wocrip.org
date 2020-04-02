import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { withRouter } from 'react-router-dom'

import { colors, nav, settings } from 'theme'


const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${colors.white};
  z-index: ${settings.zindex.navigation};

  ${({ visibilityStyle }) => visibilityStyle && css`
    box-shadow: 0 4px 0 0 ${rgba(colors.deepblack, 0.05)};
  `}

  ${({ padding }) => padding && css`
    padding: ${padding};
  `}

  ${({ position }) => position === 'sticky' && css`
    box-shadow: 0 2px 0 0 ${rgba(colors.deepblack, 0.02)};
  `}

  ${({ position }) => position && css`
    position: ${position};
  `}

  ${({ top }) => top && css`
    top: ${top};
  `}

  ${({ bottom }) => bottom && css`
    bottom: ${bottom};
  `}

  ${({ left }) => left && css`
    left: ${left};
  `}

  ${({ right }) => right && css`
    right: ${right};
  `}

  ${({ additionalStyle }) => additionalStyle && additionalStyle}
`

const NavWrapper = ({
  location,
  ...props
}) => {
  const isHome = location.pathname === '/'
  let backgroundColor = isHome ? colors.transparent : colors.black

  return <Wrapper backgroundColor={backgroundColor} {...props} />
}

NavWrapper.defaultProps = {
  reversed: nav.reversed,
  size: nav.size,
}

export default withRouter(NavWrapper)
