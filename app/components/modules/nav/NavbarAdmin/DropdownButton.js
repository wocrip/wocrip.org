import styled from 'styled-components'

import { nav } from 'theme'


const ServicesButton = styled.div`
  padding: ${({ size }) => size * 6}px 5px;
  user-select: none;
  cursor: pointer;
  position: relative;
  display: flex;
  z-index: 100;

  &.open {
    z-index: 102;
  }

  &:hover {
    opacity: 0.8;
  }

  &:focus, &:active {
    outline: none;
    border: none;
  }
`

ServicesButton.defaultProps = {
  size: nav.size,
}

export default ServicesButton
