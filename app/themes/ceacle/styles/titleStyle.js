import { css } from 'styled-components'


const condensed = (/* settings */) => css`
  font-family: acumin-pro-extra-condensed, sans-serif;

  span {
    font-family: acumin-pro-semi-condensed, sans-serif;
    font-weight: 400 !important;
  }
`
const titleStyle = ({ settings }) => ({
  condensed: condensed(settings),
})

export default titleStyle
