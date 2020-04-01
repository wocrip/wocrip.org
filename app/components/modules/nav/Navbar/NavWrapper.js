import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { colors, nav, settings } from 'theme'


const NavWrapper = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${({ reversed }) => reversed ? colors.black : colors.white};
  color: ${({ reversed }) => reversed ? colors.white : colors.black};
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

NavWrapper.defaultProps = {
  reversed: nav.reversed,
  size: nav.size,
}

export default NavWrapper
