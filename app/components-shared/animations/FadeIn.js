import { keyframes } from 'styled-components'

const FadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`

export default FadeIn
