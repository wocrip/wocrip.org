import { css } from 'styled-components'
import { rgba, lighten } from 'polished'

import getColor from '../utils/getColor'
import { colors } from '../colors'


const {
  buttonBackground,
  // buttonBackgroundDisabled,
  buttonText,
  buttonText_withNoBackground,
  // buttonTextDisabled,
  buttonDropzone,
  buttonDropzoneBackground,
} = getColor
const commonStyle = ({
  display,
  fontSize,
  fontWeight,
  height,
  margin,
  padding,
  size,
  whitespace,
  width,
  zIndex,
}, settings) => css`
  text-decoration: none;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  display: ${display || 'inline-flex'};
  align-items: center;
  justify-content: center;
  padding: 0.3em 1.2em;
  font-family: arial, Helvetica, Helvetica-Neue, sans-serif;
  font-size: ${size ? `${size * 0.9}em` : `${settings.text.size}em`};
  line-height: 1.5;
  font-weight: ${fontWeight || 500};
  border-radius: ${settings.radius}px;
  transition: all 0.1s ease-in;
  position: relative;
  z-index: 0;
  background: none;

  ${width && css`
    width: ${width};
  `}

  ${height && css`
    height: ${height};
  `}

  ${padding && css`
    padding: ${padding};
  `}

  ${margin && css`
    margin: ${margin};
  `}

  ${fontSize && css`
    font-size: ${fontSize};
  `}

  ${whitespace && css`
    white-space: ${whitespace};
  `}

  ${zIndex && css`
    z-index: ${zIndex};
  `}

  ${({ dropzone }) => dropzone && css`
    padding: ${padding ? `${padding * 0.5}em` : '0.8em'};
  `}

  ${({ withTooltip, ...props }) => withTooltip && css`
    ${tooltip({ settings, props })}
  `}

  svg {
    color: ${({ status, color }) => buttonText({ status, color })};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:active {
    box-shadow: ${`0 0 0 2px ${rgba(colors.deepblue, 0.7)}`};
  }

  &:focus {
    box-shadow: ${`0 0 0 2px ${rgba(colors.deepblue, 0.4)}`};
  }
`
export const normalStyle = (props, settings) => css`
  ${commonStyle(props, settings)}

  border: none;
  background-color: ${({ status, color }) => buttonBackground({ status, color }, colors)};
  color: ${({ status, color }) => buttonText({ status, color })};

  &:disabled {
    opacity: 0.5;
  }

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`
const noBackgroundStyle = (props, settings) => css`
  ${commonStyle(props, settings)}

  border: 1px solid ${({ status, color }) => buttonBackground({ status, color })};
  color: ${({ status, color }) => buttonText_withNoBackground({ status, color })};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    border-color: ${buttonBackground({ color: 'gray' })};
    color: ${({ isLoading }) => isLoading ? rgba(buttonText({ textColor: 'gray' }), 0)
    : buttonText({ textColor: 'gray' })};

    svg * {
      stroke: ${colors.gray};
    }
  }

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`
const noBorderStyle = (props, settings) => css`
  ${commonStyle(props, settings)}

  color: ${({ status, color }) => buttonText_withNoBackground({ status, color })};
  border: none;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: ${({ isLoading }) => isLoading ? rgba(buttonText({ textColor: 'gray' }), 0)
    : buttonText({ textColor: 'gray' })};

    svg * {
      stroke: ${colors.gray};
    }
  }

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`
const menuStyle = ({ customStyle }, settings) => css`
  text-decoration: none;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: none;
  border: none;
  color: ${colors.black};
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg, img {
    z-index: 2;
  }

  &:hover {
    &::after {
      opacity: 1;
      width: 32px;
      height: 32px;
      transform: scale(1, 1);
    }
  }

  &:active {
  }

  &:focus {
  }

  &:disabled {
    color: ${({ isLoading }) => isLoading
    ? rgba(buttonText({ textColor: 'gray' }), 0)
    : buttonText({ textColor: 'gray' })};

    svg * {
      stroke: ${colors.gray};
    }
  }

  &::after {
    content: "";
    width: 32px;
    height: 32px;
    transform: scale(0.7, 0.7);
    position: absolute;
    border-radius: 8px;
    background-color: ${rgba(colors.gray, 0.15)};
    opacity: 0;
    z-index: 1;
    transition: opacity 0.1s, transform 0.1s linear;
  }

  ${({ withTooltip, ...props }) => withTooltip && css`
    ${tooltip({ settings, props })}
  `}

  ${customStyle && css`${customStyle}`}
`
const dropzoneStyle = (props, settings) => css`
  ${commonStyle(props, settings)}

  display: inline-table;
  color: ${({ status, color }) => buttonText({ status, textColor: color })};
  background: ${({ zoneColor, status }) => buttonDropzoneBackground({ zoneColor, status })};
  border: none;

  &:active {
    box-shadow: ${`0 0 0 2px ${rgba(colors.deepblue, 0.7)}`};
  }

  &:focus {
    box-shadow: ${`0 0 0 2px ${rgba(colors.deepblue, 0.4)}`};
  }

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`
const zone = () => css`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px dashed ${({ zoneColor, status }) => buttonDropzone({ zoneColor, status })};
  color: ${({ zoneColor, status }) => buttonDropzone({ zoneColor, status })};
  transition: all 0.1s ease-in;

  &.disabled {
    border-color: ${colors.gray};
    color: ${colors.gray};
  }
`
const zoneCenter = () => css`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 100%;
  transition: all 0.1s ease-in;
  white-space: pre-wrap;

  &.disabled {
    visibility: hidden;
    opacity: 0;
  }

  svg {
    color: ${({ color, status }) => buttonDropzone({ color, status })};
    width: 100%;
    height: 45px;
  }
`
const progressWrapper = () => css`
  border-radius: 4px;
  width: 100%;
  border: 1px solid ${rgba(colors.gray, 0.5)};
  background: ${colors.white};
  margin-top: 4px;
`
const progress = () => css`
  border-radius: 2px;
  width: ${({ progress: progrss }) => `calc(${progrss}% - 2px)`};
  background: ${({ color }) => color ? colors[color] : colors.green};
  margin: 1px;
  height: 3px;
  transition: all 0.2s ease-in;
`
const fileName = (settings) => css`
  border-radius: ${settings.radius}px;
  background: ${rgba(colors.gray, 0.15)};
  padding: 5px 10px;
`
const fileRemove = () => css`
  cursor: pointer;

  &:hover {
    color: ${colors.deepblue};
  }
`
const fileBottom = () => css`
  padding: 2px 10px;
  justify-content: space-between;

  span {
    color: ${colors.gray};
  }
`
const tooltip = (settings) => css`
  &[data-tooltip]:before {
    transition: opacity 0.1s 0.3s linear, visibility 0.1s 0.3s linear;
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

    ${({ tooltip_position }) => tooltip_position === 'top' && css`
      left: 50%;
      transform: translateX(-50%) translateY(calc(-100% - 3px));
    `}

    ${({ tooltip_position }) => tooltip_position === 'bottom' && css`
      left: 50%;
      transform: translateX(-50%) translateY(calc(100% + 14px));
    `}

    ${({ tooltip_position }) => tooltip_position === 'left' && css`
      transform: translateX(calc(-100% - 7px)) translateY(-50%);
      top: 50%;
      left: 0;
    `}

    ${({ tooltip_position }) => tooltip_position === 'right' && css`
      transform: translateX(calc(100% + 3px)) translateY(-50%);
      top: 50%;
      right: 0;
    `}
  }

  &[data-tooltip]:hover:before,
  &[data-tooltip]:hover:after {
    visibility: visible;
    opacity: 1;
  }
`
const buttonStyle = ({ settings }) => ({
  getStyle: () => css`${({ styleType, ...props }) => {
    if (styleType === 'noBackground') return noBackgroundStyle(props, settings)
    if (styleType === 'noBorder') return noBorderStyle(props, settings)
    if (styleType === 'dropzone') return dropzoneStyle(props, settings)
    if (styleType === 'menu') return menuStyle(props, settings)
    return normalStyle(props, settings)
  }}`,
  zone: zone(settings),
  zoneCenter: zoneCenter(settings),
  progressWrapper: progressWrapper(settings),
  progress: progress(settings),
  file: {
    name: fileName(settings),
    remove: fileRemove(settings),
    bottom: fileBottom(settings),
  },
})

export default buttonStyle
