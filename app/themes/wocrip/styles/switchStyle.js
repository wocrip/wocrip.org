import { css } from 'styled-components'
import { rgba } from 'polished'

import getColor from '../utils/getColor'


const {
  switchColor,
  switchBackground,
  // switchShadow,
} = getColor
const light = true
const wrapper = () => css`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin: 10px;
  user-select: none;

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
    cursor:not-allowed;
  }

`

const checkbox = () => css`
  position: absolute;
  opacity: 0;
  visibility: hidden;
`

const knob = () => css`
  position: absolute;
  border-radius: 20px;
  width: 25px;
  height: 25px;
  background-color: ${switchColor({ color: 'white' })};
  z-index: 2;
  top: -5px;
  left: -5px;
  transition: all 0.1s ease-out;
  border: 1px solid ${rgba(switchColor({ color: 'deepblack' }), 0.4)};

  &.on {
    left: 20px;
    background-color: ${({ color }) => switchColor({ color })};
  }
`

const background = () => css`
  position: relative;
  border-radius: 20px;
  width: 40px;
  height: 16px;
  z-index: 1;
  background-color: ${switchBackground({ color: 'gray', light })};

  &.on {
    background-color: ${({ color }) => switchBackground({ color, light })};
  }
`

const switchStyle = ({ settings }) => ({
  wrapper: wrapper({ settings }),
  checkbox: checkbox({ settings }),
  knob: knob({ settings }),
  background: background({ settings }),
})

export default switchStyle
