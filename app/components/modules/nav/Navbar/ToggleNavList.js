import styled from 'styled-components'
import { rgba } from 'polished'

import { colors, nav, settings } from 'theme'


const {
  reversed,
} = nav

const ToggleNavList = styled.div`
  position: absolute;
  left: -500px;
  top: 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: ${reversed ? colors.black : colors.white};
  width: 300px;
  height: 100vh;
  max-width: 90vw;
  padding: 30px 30px;
  box-shadow: 3px 0 0 ${rgba(colors.deepblack, 0.1)};
  transition: left 0.2s ease-out;
  z-index: ${settings.zindex.navigation + 10};
  overflow-y: auto;

  a {
    font-size: 1.2em !important;
    font-weight: 700 !important;
  }

  &.open {
    left: 0;
  }
`

export default ToggleNavList
