import { css } from 'styled-components'

import getColor from '../utils/getColor'


const {
  inputBackground,
  inputBorder,
  inputBorderSearch,
  inputBorderSearchFocus,
  inputBorderFocus,
  inputBorderFocusShadow,
  inputText,
  // inputInvisbleBackground,
  inputPlaceholder,
} = getColor

const common = ({ settings }) => css`
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  color: ${({ reversed, textColor }) => inputText({ reversed, textColor })};
  font-size: ${settings.text.size}em;
  padding: 5px 10px;
  height: 45px;
  border-radius: ${settings.radius}px;
  outline: 0;
  float: left;
  transition: all 0.1s ease-in;
  background-color: ${(props) => inputBackground(props)};
  border: 1px solid ${(props) => inputBorder(props)};

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  &:focus {
    border-color: ${({ status, color }) => inputBorderFocus({ status, color })};
    box-shadow: 0 0 0 2px ${({ status, color }) => inputBorderFocusShadow({ status, color })};
  }

  ${({ reversed, textColor, placeholder }) => placeholder && css`
    ::placeholder {
      color: ${inputPlaceholder({ reversed, textColor })};
    }
  `}

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }

  ${({ flat }) => flat === 'leftRight' && css`
    border-right: none;
    border-radius: 0;
  `}

  ${({ flat }) => flat === 'left' && css`
    border-radius: 0 ${settings.radius}px ${settings.radius}px 0;
  `}

  ${({ flat }) => flat === 'right' && css`
    border-right: none;
    border-radius: ${settings.radius}px 0 0 ${settings.radius}px;
  `}

  ${({ search }) => search && css`
    border-color: ${inputBorderSearch()};
    box-shadow: none;
    height: 44px;

    &:focus {
      border-color: ${inputBorderSearchFocus()};
    }
  `}

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`
const invisible = ({ settings }) => css`
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  color: ${({ reversed, textColor }) => inputText({ reversed, textColor })};
  font-size: 1em;

  padding: 5px 10px;
  border-radius: ${settings.radius}px;
  outline: 0;
  transition: background 0.1s ease-in, border 0.1s ease-in;
  background-color: transparent;
  border: 0px solid ${(props) => inputBorder(props)};
  display: block;

  ${({ autoHeight }) => autoHeight && css`
    resize: none;
    overflow: hidden;
  `}

  ${({ fontSize }) => fontSize && css`
    font-size: ${fontSize};
  `}

  ${({ height }) => height && css`
    height: ${height};
  `}

  ${({ margin }) => margin && css`
    margin: ${margin};
  `}

  ${({ reversed, textColor, placeholder }) => placeholder && css`
    ::placeholder {
      color: ${inputPlaceholder({ reversed, textColor })};
    }
  `}

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`
const hidden = () => css`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
`
const wrapper = () => css`
  ${({ position }) => position && css`
    position: ${position};
  `}
`
const inputStyle = ({ settings }) => ({
  common: common({ settings }),
  invisible: invisible({ settings }),
  hidden: hidden({ settings }),
  wrapper: wrapper({ settings }),
})

export default inputStyle
