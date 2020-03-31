import styled from 'styled-components'
import { rgba } from 'polished'

import { colors, settings } from 'theme'


const {
  radius,
} = settings
const List = styled.div`
  position: absolute;
  right: 10px;
  top: 70px;
  z-index: 100;
  border-radius: ${radius}px;
  box-shadow: 0 0 0 3px ${rgba(colors.gray, 0.15)};
  transition: all 0.1s ease-out;
  background-color: ${colors.white};
  opacity: 0;
  visibility: hidden;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;

  &.open {
    top: 40px;
    visibility: visible;
    opacity: 1;
    z-index: 102;
  }
`

export default List
