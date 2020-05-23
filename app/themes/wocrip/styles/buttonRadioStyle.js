import { css } from 'styled-components'
import { rgba } from 'polished'

import getColor from '../utils/getColor'
import { colors } from '../colors'


const {
  buttonBackground,
  // buttonRadioBackgroundActive,
  buttonRadioLabel,
  // buttonInsetShadow,
} = getColor

const wrapper = () => css`
  margin: 10px 0;
  user-select: none;
  position: relative;

  ${({ wrapperstyle }) => wrapperstyle && wrapperstyle}
`
const label = ({ settings }) => css`
  text-decoration: none;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  font-size: ${({ size }) => size || `${settings.text.size}em`};
  ${'' /* padding: ${({ padding }) => padding || '0.45em 1em 0.5em 1.7em'}; */}
  font-weight: 400;
  color: ${({ color }) => buttonRadioLabel({ color })};
  font-family: inherit;
  white-space: ${({ labelWhiteSpace }) => labelWhiteSpace || 'nowrap'};
  display: flex;

  &:before {
    content: "";
    border: 2px solid ${rgba(colors.black, 0.5)};
    border-radius: 100%;
    width: 17px;
    height: 17px;
    z-index: 1;
    margin-right: 10px;
  }

  &.active&:before {
    background-color: ${({ color }) => buttonBackground({ color }, colors)};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled&:before {
    content: "";
    border: 1px solid ${colors.gray};
    border-radius: 100%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
  }
`
const labelButton = ({ settings }) => css`
  ${label({ settings })}

  border: 2px solid ${rgba(colors.black, 0.2)};
  padding: 10px;
  border-radius: 2px;

  &.active {
    border: 2px solid ${({ color }) => buttonBackground({ color }, colors)};
    ${'' /* box-shadow: ${`0 0 0 2px ${rgba(colors.deepblue, 0.4)}`}; */}
  }

  &.focus {
    box-shadow: ${`0 0 0 2px ${rgba(colors.deepblue, 0.4)}`};
  }
`
const input = () => css`
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  position: absolute;
`
const buttonRadioStyle = ({ settings }) => ({
  wrapper: wrapper({ settings }),
  label: label({ settings }),
  labelButton: labelButton({ settings }),
  input: input({ settings }),
})

export default buttonRadioStyle
