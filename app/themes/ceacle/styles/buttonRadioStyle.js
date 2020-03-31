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
  min-height: ${45}px;
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
  display: inline-table;
  font-size: ${({ size }) => size || `${settings.text.size}em`};
  padding: ${({ padding }) => padding || '0.45em 1em 0.5em 1.7em'};
  font-weight: 400;
  color: ${({ color }) => buttonRadioLabel({ color })};
  font-family: inherit;
  white-space: ${({ labelWhiteSpace }) => labelWhiteSpace || 'nowrap'};

  &:before {
    content: "";
    border: 1px solid ${rgba(colors.black, 0.5)};
    border-radius: 100%;
    width: 17px;
    height: 17px;
    position: absolute;
    top: 7px;
    left: 0;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    border-radius: 100%;
    top: 7px;
    left: 0;
    background-color: ${({ color }) => buttonBackground({ color }, colors)};
    width: 17px;
    height: 17px;
    z-index: -1;
    transition: all 0.1s linear;
    opacity: 0;
    z-index: 0;
  }

  &.active&:after {
    opacity: 1;
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
const input = () => css`
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  position: absolute;
`
const buttonRadioStyle = ({ settings }) => ({
  wrapper: wrapper({ settings }),
  label: label({ settings }),
  input: input({ settings }),
})

export default buttonRadioStyle
