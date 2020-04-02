import styled from 'styled-components'

import { colors, nav, settings } from 'theme'


const { container } = settings
const { maxwidth } = container

const Nav = styled.nav`
  width: 100%;
  max-width: ${maxwidth};
  margin: 0 auto;
  color: ${({ reversed }) => reversed ? colors.white : colors.black};
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px;
  align-items: center;

  svg {
    fill: ${colors.white};
  }
`

Nav.defaultProps = {
  reversed: nav.reversed,
  size: nav.size,
  heightSpace: nav.heightSpace,
}

export default Nav
