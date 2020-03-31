import { css } from 'styled-components'
import { mix } from 'polished'

// import getColor from '../utils/getColor'
import { colors } from '../colors'


const base = () => css`
  margin: 20px 0;
  position: relative;
  -ms-touch-action: none;
  touch-action: none;
  cursor: pointer;
`
const bar = () => css`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background: ${colors.black};
`
const handle = () => css`
  width: 40px;
  height: 40px;
  background: ${({ color }) => colors[color]};
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  transform: translate(-50%, -50%);
  left: ${({ position }) => position}px;
  margin-top: -2px;

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: ${({ color }) => mix(0.2, colors.white, colors[color])};
  }

  &:focus {
    outline: none;
    border: 1px solid ${colors.black};
  }
`
const tooltip = () => css`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translate(-50%, -50%);
`
const label = () => css`
  margin-top: 10px;
  position: relative;
`
const item = () => css`
  left: ${({ position }) => position}px;
  display: inline-block;
  position: absolute;
  transform: translateX(-50%);
`
const tagStyle = ({ settings }) => ({
  base: base({ settings }),
  bar: bar({ settings }),
  handle: handle({ settings }),
  tooltip: tooltip({ settings }),
  label: label({ settings }),
  item: item({ settings }),
})

export default tagStyle
