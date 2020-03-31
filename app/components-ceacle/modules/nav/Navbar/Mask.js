import styled from 'styled-components'
import { rgba } from 'polished'

import { colors } from 'theme'


const Mask = styled.div`
  background: ${rgba(colors.deepblack, 0.9)};
  position: fixed;
  width: 0vw;
  height: 200vh;
  z-index: 99;
  top: 0px;
  left: -5px;
  opacity: 0;
  transition: opacity 0.2s ease, backdrop-filter 0.2s ease;

  @supports (backdrop-filter: saturate(180%) blur(10px)) {
    background: ${rgba(colors.white, 0.8)};
    backdrop-filter: saturate(180%) blur(10px);
  }

  &.open {
    opacity: 1;
    z-index: 101;
    width: 110vw;

    @supports (backdrop-filter: saturate(180%) blur(15px)) {
      backdrop-filter: saturate(180%) blur(15px);
    }
  }
`

export default Mask
