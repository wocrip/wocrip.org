import styled from 'styled-components'


const Wrapper = styled.div`
  height: 100%;
  width: ${({ size }) => size || 54}px;
  transition-property: height, opacity;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
`

export default Wrapper
