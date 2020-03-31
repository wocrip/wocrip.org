import styled from 'styled-components'
import { rgba } from 'polished'

import { colors, settings } from 'theme'


const { zindex: { modal } } = settings

const Mask = styled.div`
  background: ${rgba(colors.deepblack, 0.8)};
  width: 100%;
  height: 100%;
  z-index: ${({ isAlert }) => isAlert ? (modal.alert - 1) : (modal.content - 1)};
  transition: opacity 0.2s ease;
  grid-column: 1 / 5;
  grid-row: 1 / 3;
  animation-name: blur;
  animation-duration: 0.2s;

  @supports (backdrop-filter: saturate(180%) blur(20px)) {
    background: ${rgba(colors.white, 0.5)};
    backdrop-filter: saturate(180%) blur(20px);
  }

  @keyframes blur {
    from {
      backdrop-filter: saturate(180%) blur(10px);
    }
    to {
      backdrop-filter: saturate(180%) blur(20px);
    }
  }
`

export default Mask
