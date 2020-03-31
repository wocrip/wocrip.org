import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { nav, settings, colors } from 'theme'
import { noScrollBody } from 'utils/helpers'

import MenuIconDoubleBars from 'components-shared/icons/IconDoubleBars'
import Mask from './Mask'
import ToggleNavList from './ToggleNavList'


const { size } = nav
const Toggle = styled.div`
  user-select: none;
  width: ${size * 40}px;
  height: ${size * 40}px;
  max-width: 45px;
  max-height: 45px;
  flex-shrink: 0;
  margin-right: -15px;
  margin-left: -5px;

  @media (max-width: 1200px) {
    margin-right: 10px;
  }

  ${({ alwaysDisplayed }) => !alwaysDisplayed && css`
    display: none;

    @media (max-width: 830px) {
      display: block;
    }
  `}
`
const ToggleButton = styled.div`
  user-select: none;
  cursor: pointer;
  position: relative;
  margin-left: -20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    margin-left: 0px;
  }

  ${({ showCloseButton }) => showCloseButton && css`
    &.open {
      z-index: ${settings.zindex.navigation + 11};
    }
  `}

  &:hover {
    background: ${rgba(colors.gray, 0.1)};
    opacity: 0.8;
  }

  &:focus, &:active {
    outline: none;
    border: none;
  }

  svg {
    margin: 0 auto;
  }
`
class ToggleNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { navOpen } = this.state

    const toggle = (isOpen) => {
      noScrollBody(isOpen, 'noScroll2')
      this.setState({ navOpen: isOpen })

      if (!isOpen) {
        window.removeEventListener('keydown', closeByEscape, true)
      }
    }

    toggle(!navOpen)

    const closeByEscape = (event) => {
      if((event.key == 'Escape' || event.key == 'Esc' || event.keyCode == 27)) {
        toggle(false)
      }
    }

    if (!navOpen) {
      window.addEventListener('keydown', closeByEscape, true)
    }
  }

  render() {
    const { children, alwaysDisplayed } = this.props
    const { navOpen } = this.state

    return (
      <Toggle alwaysDisplayed={alwaysDisplayed}>
        <ToggleButton
          onClick={this.handleClick}
          tabIndex="0"
          className={navOpen ? 'open' : ''}
        >
          <MenuIconDoubleBars
            open={!alwaysDisplayed && navOpen ? 'open' : ''}
            size={`${size * 16}px`}
          />
        </ToggleButton>

        <ToggleNavList
          onClick={this.handleClick}
          className={navOpen ? 'open toggleNav' : 'toggleNav'}
        >
          { children }
        </ToggleNavList>

        <Mask
          onClick={this.handleClick}
          className={navOpen ? 'open' : ''}
        />
      </Toggle>
    )
  }
}

ToggleNav.propTypes = {
  children: PropTypes.node.isRequired,
  alwaysDisplayed: PropTypes.bool,
}

ToggleNav.defaultProps = {
  alwaysDisplayed: true,
}

export default ToggleNav
