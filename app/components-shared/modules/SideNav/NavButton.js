import styled from 'styled-components'
import { rgba } from 'polished'

import { colors } from 'theme'


const NavButton = styled.button`
  font-size: 1em;
  padding: 1em;
  margin: 15px 20px 0;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => rgba(props.colors.black, 0.08)};
  display: none;

  @media (max-width: 830px) {
    display: block;
  }
`

NavButton.defaultProps = {
  colors,
}

export default NavButton
