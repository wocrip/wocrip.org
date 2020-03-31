import { css } from 'styled-components'
import { rgba, lighten } from 'polished'

import { colors } from '../colors'


const tooltip = (settings) => css`
 position: absolute;
  background: ${lighten(0.3, colors.black)};
  border-radius: 2px;
  height: fit-content;
  width: max-content;
  padding: 5px;
  z-index: ${settings.zindex.tooltip};
  box-shadow: 0 0 0 1px ${rgba(colors.black, 0.25)};
  color: white;
  font-size: 0.85em;
  line-height: 1em;

  ${({ tooltipPosition }) => tooltipPosition === 'top' && css`
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(calc(-100% - 5px));
  `}

  ${({ tooltipPosition }) => tooltipPosition === 'bottom' && css`
    left: 50%;
    top: 100%;
    transform: translateX(-50%) translateY(5px);
  `}

  ${({ tooltipPosition }) => tooltipPosition === 'bottomLeft' && css`
    left: 0;
    top: 100%;
    transform: translateY(5px);
  `}

  ${({ tooltipPosition }) => tooltipPosition === 'bottomRight' && css`
    right: 0;
    top: 100%;
    transform: translateY(5px);
  `}

  ${({ tooltipPosition }) => tooltipPosition === 'left' && css`
    transform: translateX(calc(-100% - 7px)) translateY(-50%);
    top: 50%;
    left: 0;
  `}

  ${({ tooltipPosition }) => tooltipPosition === 'right' && css`
    transform: translateX(calc(100% + 5px)) translateY(-50%);
    top: 50%;
    right: 0;
  `}
`
const dataTooltip = (settings) => css`
  &[data-tooltip]:before {
    transition: opacity 0.1s 0.3s linear, visibility 0.1s 0.3s linear;

    ${tooltip(settings)}
  }

  &[data-tooltip]:hover:before,
  &[data-tooltip]:hover:after {
    visibility: visible;
    opacity: 1;
  }
`
const tooltipStyle = ({ settings }) => ({
  normal: tooltip(settings),
  dataTooltip: dataTooltip(settings),
})

export default tooltipStyle
