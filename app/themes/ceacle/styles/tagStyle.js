import { css } from 'styled-components'

import getColor from '../utils/getColor'


const {
  tagColor,
  tagBackground,
  tagBorder,
  inputBorder,
  inputBorderFocus,
} = getColor

const input = ({ settings }) => css`
  border: none;
  outline: none;
  box-shadow: none;
  width: ${100}%;
  min-width: 120px;
  background:${tagBackground({ color: 'gray' })};
  border-radius: ${settings.radius}px;
  padding: 5px 10px;
  font-size: 14px;
  min-height: 35px;
  border: 1px solid ${(props) => inputBorder(props)};

  &:focus {
    border-color: ${({ status, color }) => inputBorderFocus({ status, color })};
  }
`
const suggestions = ({ settings }) => css`
  user-select: none;
  position: absolute;
  top: 110%;
  left: -2px;
  background: white;
  margin: 5px 0 0;
  border-radius: ${settings.radius}px;
  box-shadow: 4px 4px 0 0 ${({ wrapperColor }) => tagBorder({ color: wrapperColor })};
  z-index: 5;
  transition: all 0.1s ease-out;
  min-height: 45px;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  list-style: none;
  padding: 0;

  &.show {
    visibility: visible;
    opacity: 1;
    top: 100%;
  }
`
const suggestion = ({ settings }) => css`
  display: block;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: ${settings.radius}px;

  &:focus {
    background:${tagBackground({ color: 'blue' })};
  }

  &.active {
    background:${tagBackground({ color: 'gray' })};
  }
`
const button = ({ settings }) => css`
  background:${({ color }) => tagBackground({ color })};
  color:${({ color }) => tagColor({ color })};
  padding: 5px 10px;
  margin: 5px;
  border-radius: ${settings.radius}px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
`
const closeButton = () => css`
  cursor: pointer;
  width: 20px;
  margin-left: 7px;

  svg {
    fill:${({ color }) => tagColor({ color })};
  }
`
const wrapper = ({ settings }) => css`
  display: flex;
  flex-wrap: wrap;
  min-height: ${45}px;
  position: relative;
  border-radius: ${settings.radius}px;
`
const tagsWrapper = ({ settings }) => css`
  margin: 0 -5px;
`
const formWrapper = () => css`
  margin: 10px 0;
`
const tagStyle = ({ settings }) => ({
  input: input({ settings }),
  suggestions: suggestions({ settings }),
  suggestion: suggestion({ settings }),
  button: button({ settings }),
  wrapper: wrapper({ settings }),
  tagsWrapper: tagsWrapper({ settings }),
  formWrapper: formWrapper({ settings }),
  closeButton: closeButton({ settings }),
})

export default tagStyle
