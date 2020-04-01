import styled from 'styled-components'
import { rgba } from 'polished'

import { nav, colors } from 'theme'


const {
  size,
} = nav
const IconBox = styled.span`
  user-select: none;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 5px;
  transition: all 0.15s ease-in;
  width: ${size * 40}px;
  height: ${size * 40}px;
  max-width: 40px;
  max-height: 40px;
  overflow: hidden;
  margin-right: 10px;
  display: flex;
  align-items: center;

  svg, img {
    width: ${size * 27}px;
    height: ${size * 27}px;
    margin: 0 auto;
  }

  &:hover {
    background: ${rgba(colors.gray, 0.1)};
    opacity: 0.85;
  }
`

export default IconBox
