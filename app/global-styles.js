import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'polished'
import { globalStyle } from 'theme'


const AppGlobalStyle = createGlobalStyle`
  ${normalize()}

  ${css`${globalStyle}`}
`

export default AppGlobalStyle
