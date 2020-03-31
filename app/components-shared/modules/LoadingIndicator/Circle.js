import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

import { colors } from 'theme'


const progress = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  20% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`

const Circle = styled.circle`
  animation: ${progress} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  fill: none;
  stroke: ${(props) => props.color ?
    props.colors[props.color] :
    rgba(props.colors.black, 0.4)};
  stroke-linecap: round;
  stroke-width: ${(props) => props.strokeWidth || 3};
`

Circle.defaultProps = {
  colors,
}

export default Circle
