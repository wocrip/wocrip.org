import { css } from 'styled-components'

import { colors } from '../colors'


const button = ({ settings }) => css`
  line-height: 1.5;
  background: none;
  border: none;
  font-size: 1.3em;
  height: 40px;
  min-width: 120px;
  font-weight: 500;
  appearance: none;
  padding: 0 10px;
  box-shadow: 0 0 0 1px ${colors.black};
  border-radius: ${settings.radius}px;
  position: relative;
  z-index: 1;

  &:active, &:focus {
    box-shadow: 0 0 0 1px ${colors.deepblue};
    outline: none;
  }
`
const wrapper = ({ settings }) => css`
  border-radius: ${settings.radius}px;
  position: relative;

  svg {
    height: 26px;
    width: 26px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 0;
  }
`
const selectStyle = ({ settings }) => ({
  button: button({ settings }),
  wrapper: wrapper({ settings }),
})

export default selectStyle
