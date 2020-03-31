import styled from 'styled-components'

import { nav } from 'theme'


const {
  size,
} = nav
const UserImage = styled.span`
  user-select: none;
  border-radius: 100%;
  cursor: pointer;
  margin: 0 5px;
  transition: all 0.15s ease-in;
  width: ${size * 40}px;
  height: ${size * 40}px;
  max-width: 40px;
  max-height: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 100%;
  }

  svg {
    width: auto;
    height: 24px;
  }

  &:hover {
    opacity: 0.85;
  }
`

export default UserImage
