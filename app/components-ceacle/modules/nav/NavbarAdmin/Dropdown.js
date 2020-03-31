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
  right: 0px;
  top: ${size * 12}vh;
  z-index: 100;
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

  &.open {
    top: ${(size * 0.8) * 70.4}px;
    visibility: visible;
    opacity: 1;
    z-index: 102;
  }
`

export default Dropdown
