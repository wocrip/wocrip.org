import styled from 'styled-components'

import { colors } from 'theme'


const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
  color: ${(props) => props.colors.text}
`

Wrapper.defaultProps = {
  colors,
}

export default Wrapper
