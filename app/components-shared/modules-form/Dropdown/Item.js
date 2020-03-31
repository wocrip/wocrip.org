import styled, { css } from 'styled-components'


const Item = styled.div`
  user-select: none;
  cursor: pointer;
  position: relative;
  display: flex;
  padding: 5px 10px;
  white-space: pre;

  ${({ padding }) => padding && css`
    padding: ${padding};
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ fontWeight }) => fontWeight && css`
    font-weight: ${fontWeight};
  `}

  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize};
  `}

  &:hover {
    opacity: 0.8;
  }

  &:focus, &:active {
    outline: none;
    border: none;
  }
`

export default Item
