import styled from 'styled-components'
import { rgba } from 'polished'

import { nav, colors } from 'theme'


const ServicesButton = styled.div`
  user-select: none;
  cursor: pointer;
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  &.open {
    z-index: 102;

    svg {
      fill: ${colors.white};

      @supports (backdrop-filter: saturate(180%) blur(15px)) {
        fill: ${colors.deepblack};
      }
    }
  }

  &:after {
    content: "";
    border-radius: 50%;
    background: ${rgba(colors.gray, 0.15)};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: transform 0.1s ease-in;
    transform: scale(0.3);
    opacity: 0;
  }


  &:hover:after {
    transform: scale(0.9);
    opacity: 1;
  }

  &:focus, &:active {
    outline: none;
    border: none;
  }
`

ServicesButton.defaultProps = {
  size: nav.size,
}

export default ServicesButton
