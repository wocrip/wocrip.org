import { css } from 'styled-components'

import getColor from '../utils/getColor'
import { colors } from '../colors'


const {
  buttonBackground,
  buttonRadioBackgroundActive,
  buttonText,
  // buttonInsetShadow,
} = getColor

const wrapper = () => css`
  min-height: ${45}px;
  margin: 10px 0;
  user-select: none;
  position: relative;
`
const label = ({ settings }) => css`
  text-decoration: none;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  display: inline-table;
  font-size: ${({ size }) => size ? `${size * 0.9}em` : `${settings.text.size}em`};
  padding: ${({ padding }) => padding ? `${padding * 0.5}em ${padding * 1}em` : '0.5em 1em'};
  border: 1px solid ${colors.deepblack};
  font-weight: 400;
  color: ${({ color }) => buttonText({ color })};
  transition: all 0.1s ease-in;
  font-family: inherit;
  position: relative;

  &:disabled {
    cursor: not-allowed;
  }

  border-radius: 0;
  border-left: none;
  box-shadow: none;

  &:nth-child(1) {
    border-radius: ${settings.radius}px 0 0 ${settings.radius}px;
    border-left: 2px solid ${colors.deepblack};
    border-right: 2px solid ${colors.deepblack};
  }

  &:nth-last-child(1) {
    border-radius: 0 ${settings.radius}px ${settings.radius}px 0;
    border-left: none;
    border-right: 2px solid ${colors.deepblack};
  }

  &:nth-child(1)&:after {
    border-radius: ${settings.radius - 2}px 0 0 ${settings.radius}px;
  }

  &:nth-child(2)&:after {
    border-radius: 0;
  }

  &:nth-last-child(1)&:after {
    border-radius: 0 ${settings.radius}px ${settings.radius + 1}px 0;
  }

  &:after {
    content: "";
    position: absolute;
    border-radius: 6px ${settings.radius}px ${settings.radius}px;
    top: 2px;
    left: 2px;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    z-index: -1;
    transition: all 0.05s linear;
  }

  &:focus&:after , &:active&:after  {
    background-color: ${({ color }) => buttonRadioBackgroundActive({ color })};
  }

  &:hover&:after {
    background-color: ${({ color }) => buttonRadioBackgroundActive({ color }, colors)};
  }

  &.active&:after, &:hover.active&:after {
    background-color: ${({ color }) => buttonBackground({ color }, colors)};
  }

  &:focus&:after, &:active&:after {
    background-color: ${({ color }) => buttonRadioBackgroundActive({ color })};
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
