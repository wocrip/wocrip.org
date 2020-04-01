import styled from 'styled-components'

import { nav } from 'theme'


const { size, reversed } = nav
const ServicesWrapper = styled.div`
  width: 90vw;
  max-height: 85vh;
  max-width: 1200px;
  position: absolute;
  left: 50%;
  top: 12vh;
  z-index: 100;
  transition: all 0.15s ease-out;
  opacity: 0;
  visibility: hidden;
  overflow-y: auto;
  transform: translateX(-50%);

  &.open {
    top: ${({ size }) => (size * 0.93) * 70.4}px;
    visibility: visible;
    opacity: 1;
    z-index: 102;
  }
`

ServicesWrapper.defaultProps = {
  size,
  reversed,
}

export default ServicesWrapper
