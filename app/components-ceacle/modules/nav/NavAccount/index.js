import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'

import { app, auth } from 'theme'
import { lang } from 'services/intl/getLocale'

import Image from 'components-shared/basics/Image'
import IconPerson from 'components-shared/icons/IconPerson'
import IconMoreVertical from 'components-shared/icons/IconMoreVertical'
import LocaleList from 'components-shared/modules/LocaleList'

import UserImage from './UserImage'
import IconBox from './IconBox'
import Dropdown from './Dropdown'
import NavItem from './NavItem'
import messages from './messages'


const { subAppName } = app
const Wrapper = styled.div`
  text-align: center;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
`
const Separator = styled.div`
  width: 100%;
  display: block;
  margin: 5px 0;
  height: 1px;
`
const accountPath = auth.signInBaseUrl
const isAccount = window.location.origin.includes(accountPath)

class NavAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
    }

    this.dropdown = React.createRef()

    this.handleClick = this.handleClick.bind(this)
    this.signoutUser = this.signoutUser.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  handleClick() {
    const { dropdownOpen } = this.state
    const dropdown = this.dropdown.current

    const toggle = (isOpen) => {
      this.setState({ dropdownOpen: isOpen })

      if (!isOpen) {
        window.removeEventListener('click', navAccountDropdown, true)
        window.removeEventListener('keydown', closeByEscape, true)
      }
    }

    toggle(!dropdownOpen)

    const navAccountDropdown = (event) => {
      const { target } = event
      if (target !== dropdown && !dropdown.contains(target)) {
        toggle(false)
      }
    }

    const closeByEscape = (event) => {
      if ((event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27)) {
        toggle(false)
      }
    }

    if (!dropdownOpen) {
      window.addEventListener('click', navAccountDropdown, true)
      window.addEventListener('keydown', closeByEscape, true)
    }
  }

  closeDropdown() {
    this.setState({ dropdownOpen: false })
  }

  signoutUser() {
    const { signout } = this.props
    this.setState({ dropdownOpen: false })
    signout()
  }

  render() {
    const {
      user,
      intl: { formatMessage, locale },
    } = this.props
    const authenticated = !isEmpty(user)
    let username
    let profile_picture

    if (!isEmpty(user)) {
      // eslint-disable-next-line prefer-destructuring
      username = user.username
      // eslint-disable-next-line prefer-destructuring
      profile_picture = user.profile_picture
    }

    const { dropdownOpen } = this.state
    return (
      <Wrapper
        ref={this.dropdown}
      >
        {authenticated &&
          <UserImage
            onClick={this.handleClick}
            className={dropdownOpen ? 'open' : ''}
          >
            { profile_picture ?
              <Image
                src={profile_picture}
                alt="Profile Picture"
                width="100%"
                height="100%"
              />
              :
              <IconPerson />
            }
          </UserImage>
        }
        {authenticated &&
          <Dropdown
            onClick={this.handleClick}
            className={dropdownOpen ? 'open' : ''}
          >
            {subAppName === 'mockup' &&
              <NavItem
                to={`/@${username}`}
                color="gray"
                onClick={this.closeDropdown}
              >
                {formatMessage(messages.navProfile)}
              </NavItem>
            }
            <NavItem
              to={isAccount && (`${lang(locale)}` || '/')}
              href={!isAccount && accountPath}
              color="gray"
              onClick={this.closeDropdown}
            >
              {formatMessage(messages.navAccount)}
            </NavItem>

            <LocaleList />

            <Separator />

            <NavItem
              to="#"
              onClick={this.signoutUser}
              color="gray"
            >
              {formatMessage(messages.navSignOut)}
            </NavItem>
          </Dropdown>
        }
        {!authenticated &&
          <IconBox
            onClick={this.handleClick}
            className={dropdownOpen ? 'open' : ''}
          >
            <IconMoreVertical />
          </IconBox>
        }
        {!authenticated &&
          <Dropdown
            onClick={this.handleClick}
            className={dropdownOpen ? 'open' : ''}
          >
            <LocaleList />
          </Dropdown>
        }
      </Wrapper>
    )
  }
}

NavAccount.propTypes = {
  intl: PropTypes.object,
  user: PropTypes.object,
  signout: PropTypes.func.isRequired,
}

export default compose(
  injectIntl,
)(NavAccount)
