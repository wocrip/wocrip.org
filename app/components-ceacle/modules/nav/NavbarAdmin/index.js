import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

import { nav, colors } from 'theme'
import IconExpandMore from 'components-shared/icons/IconExpandMore'
import Navbar from 'components-ceacle/modules/nav/Navbar'

import DropdownButton from './DropdownButton'
import Dropdown from './Dropdown'
import AppList from './AppList'


/*
 * Known issue Event listener are called too many times
 * Don't know how to fix that.
 * Tried the addEventListener option { once: true }, but not working
 */
const { size } = nav

const Wrapper = styled.div`
  text-align: center;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${size * 830}px) {
    margin-left: auto;
  }
`
const LogoMode = styled(Box)`
  svg {
    height: ${`${size * 24}px`};
    fill: ${({ color }) => colors[color]} !important;
  }
`

class NavbarAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
    }

    this.appDropdown = React.createRef()

    this.handleClick = this.handleClick.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  handleClick() {
    const { dropdownOpen } = this.state
    const appDropdown = this.appDropdown.current

    this.setState({ dropdownOpen: !dropdownOpen })

    const closeNav = () => this.setState({ dropdownOpen: false })

    window.addEventListener('click', function navAdminAppListDropdown(event) {
      const { target } = event
      if (!dropdownOpen && target !== appDropdown && !appDropdown.contains(target)) {
        window.removeEventListener('click', navAdminAppListDropdown)
        closeNav()
      }
    })
  }

  closeDropdown() {
    this.setState({ dropdownOpen: false })
  }

  render() {
    const { dropdownOpen } = this.state
    const { modeLogo, modeColor } = this.props

    const AdminApps = () => (
      <Wrapper
        ref={this.appDropdown}
      >
        <DropdownButton
          onClick={this.handleClick}
          className={dropdownOpen ? 'open' : ''}
          tabIndex="0"
        >
          {modeLogo &&
            <LogoMode color={modeColor}>
              {modeLogo()}
            </LogoMode>
          }

          <Box
            ml="-7px"
          >
            <IconExpandMore
              open={dropdownOpen ? 'open' : ''}
            />
          </Box>
        </DropdownButton>

        <Dropdown
          onClick={this.handleClick}
          className={dropdownOpen ? 'open' : ''}
        >
          <AppList />
        </Dropdown>
      </Wrapper>
    )

    return (
      <Navbar
        adminapps={AdminApps}
        {...this.props}
      />
    )
  }
}

NavbarAdmin.propTypes = {
  modeLogo: PropTypes.func,
  modeColor: PropTypes.string,
}

export default NavbarAdmin
