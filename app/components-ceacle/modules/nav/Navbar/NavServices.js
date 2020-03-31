import React, { Component } from 'react'
import styled from 'styled-components'

import { nav } from 'theme'
import { noScrollBody } from 'utils/helpers'

import ServicesList from 'components-ceacle/modules/ServicesList'
import MenuServices from 'components-shared/icons/IconServices'

import Mask from './Mask'
import ServicesWrapper from './ServicesWrapper'
import ServicesButton from './ServicesButton'


const { size } = nav
const Services = styled.div`
  user-select: none;
  width: ${size * 40}px;
  height: ${size * 40}px;
  max-width: 45px;
  max-height: 45px;
  flex-shrink: 0;

  svg {
    width: ${size * 12}px;
    height: ${size * 12}px;
    margin: 0 auto;
  }
`

class NavServices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
    }

    this.dropdown = React.createRef()

    this.handleClick = this.handleClick.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  handleClick() {
    const { dropdownOpen } = this.state
    const dropdown = this.dropdown.current

    const toggle = (isOpen) => {
      this.setState({ dropdownOpen: isOpen })
      noScrollBody(isOpen, 'noScroll2')

      if (!isOpen)
      {
        window.removeEventListener('click', navServicesDropdown, true)
        window.removeEventListener('keydown', closeByEscape, true)
      }
    }

    toggle(!dropdownOpen)

    const navServicesDropdown = (event) => {
      const { target } = event
      if (target !== dropdown && !dropdown.contains(target)) {
        toggle(false)
      }
    }

    const closeByEscape = (event) => {
      if((event.key == 'Escape' || event.key == 'Esc' || event.keyCode == 27)) {
        toggle(false)
      }
    }

    if (!dropdownOpen) {
      window.addEventListener('click', navServicesDropdown, true)
      window.addEventListener('keydown', closeByEscape, true)
    }
  }

  closeDropdown() {
    this.setState({ dropdownOpen: false })
  }

  render() {
    const { dropdownOpen } = this.state

    return (
      <Services
        ref={this.dropdown}
      >
        <ServicesButton
          onClick={this.handleClick}
          tabIndex="0"
          className={dropdownOpen ? 'open' : ''}
        >
          <MenuServices open={dropdownOpen ? 'open' : ''} />
        </ServicesButton>

        <ServicesWrapper
          className={dropdownOpen ? 'open' : ''}
        >
          <ServicesList
            padding="15px"
            cardOnClick={this.closeDropdown}
            // secondStyle
            noShadow={false}
          />
        </ServicesWrapper>

        <Mask
          onClick={this.handleClick}
          className={dropdownOpen ? 'open' : ''}
        />
      </Services>
    )
  }
}

export default NavServices
