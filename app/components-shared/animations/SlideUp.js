import { keyframes } from 'styled-components'

const SlideUp = keyframes`
  from {
    transform: translateY(500px);
  }
  to {
    transform: translateX(0px);
  }
`

export default SlideUp
