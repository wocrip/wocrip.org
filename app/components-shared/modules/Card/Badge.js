import styled from 'styled-components'
import { colors } from 'theme'


const Badge = styled.span`
  position: absolute;
  border-radius: 8px;
  top: -10px;
  right: 10px;
  background-color: ${colors.yellow};
  font-size: 10px;
  padding: 1px 7px;
  color: white;
`

export default Badge
