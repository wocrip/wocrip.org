import styled from 'styled-components'
import { rgba } from 'polished'

import { colors, nav, settings } from 'theme'


const {
  size,
  reversed,
} = nav
const {
  radius,
} = settings
const Dropdown = styled.div`
  position: absolute;
  right: 15px;
  top: ${size * 11}vh;
  z-index: ${settings.zindex.dropdown};
  border-radius: ${radius}px;
  box-shadow: 0 0 0 2px ${rgba(colors.gray, 0.2)};
  transition: all 0.1s ease-out;
  background-color: ${reversed ? colors.white : colors.white};
  opacity: 0;
  visibility: hidden;
  padding: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 150px;

  &.open {
    top: ${(size ** 0.3) * 50}px;
    visibility: visible;
    opacity: 1;
    z-index: ${settings.zindex.dropdown + 1};
  }

  a {
    white-space: pre;
  }
`

export default Dropdown
