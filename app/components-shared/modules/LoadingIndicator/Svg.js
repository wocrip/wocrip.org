import styled, { keyframes } from 'styled-components'


const spin = keyframes`
  0% {
    transform: rotate(-110deg);
  }
  20% {
    transform: rotate(-70deg);
  }
  60% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(250deg);
  }
`

const Svg = styled.svg`
  animation: ${spin} 1.5s linear infinite;
  height: ${({ size }) => size || 54}px;
  width: ${({ size }) => size || 54}px;

  ${({ customStyle }) => customStyle && customStyle }
`

export default Svg
