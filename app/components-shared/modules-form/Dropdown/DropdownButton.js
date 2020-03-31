import styled from 'styled-components'


const Button = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 5px;
  user-select: none;
  cursor: pointer;
  position: relative;
  display: flex;
  z-index: 100;

  &.open {
    z-index: 102;
  }

  &:hover {
    opacity: 0.8;
  }

  &:focus, &:active {
    outline: none;
    border: none;
  }
`

export default Button
