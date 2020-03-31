import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import { injectIntl } from 'react-intl'
import { compose } from 'redux'

import { nav, auth } from 'theme'
import { authenticatedSelector } from 'services/user/selectors'
import { lang } from 'services/intl/getLocale'

import NavAccount from 'components-ceacle/modules/nav/NavAccount'
import NavBrand from 'components-ceacle/modules/nav/NavBrand'
import Button from 'components-shared/basics/Button'
import NavItem from './NavItem'
import NavList from './NavList'
import NavServices from './NavServices'
import Nav from './Nav'
import NavWrapper from './NavWrapper'
import ToggleNav from './ToggleNav'
import messages from './messages'


const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

const NavLeft = styled.div`
  display: flex;
  margin-left: auto;
`

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibilityStyle: false,
    }

    this.navigation = React.createRef()
  }

  render() {
    let content = ''
    const {
      adminapps: AdminApps,
      authenticated,
      hiddeServices,
      intl: { formatMessage, locale },
      items,
      onLogoClick,
      navAccount,
      NavRight,
      // noSideMenu,
      reversed,
      search,
      sideMenu,
      signout,
      user,
      wrapperAdditionalStyle,
      ...rest
    } = this.props
    const { visibilityStyle } = this.state

    const { inAppSignIn, signInBaseUrl } = auth
    let from = `?from=${window.location.href}`
    if (
      from
      && (from.includes('forgotten-password')
      || from.includes('reset-password'))
    ) {
      from = ''
    }

    const signUrl = inAppSignIn ?
      `${lang(locale)}/signin${from}` :
      `${signInBaseUrl}${lang(locale)}/signin${from}`
    const routeProp = {}
    if (inAppSignIn) routeProp.to = signUrl
    if (!inAppSignIn) routeProp.href = signUrl

    if (!isEmpty(items)) {
      content = items.map((item) => (
        <NavItem
          to={item.href}
          key={item.href}
          role="menuitem"
          aria-haspopup="false"
          isExternalLink={item.href.includes('https://') || item.href.includes('http://')}
        >
          {item.component || item.name}
        </NavItem>
      ))
    } else if (sideMenu && sideMenu.content) {
      // eslint-disable-next-line prefer-destructuring
      content = sideMenu.content
    }

    return (
      <NavWrapper
        visibilityStyle={visibilityStyle}
        additionalStyle={wrapperAdditionalStyle}
        {...rest}
      >
        <Nav
          ref={this.navigation}
          className="navigation"
          role="navigation"
          {...rest}
        >
          {content &&
            <ToggleNav
              alwaysDisplayed={sideMenu && sideMenu.alwaysDisplayed}
            >
              {content}
            </ToggleNav>
          }

          <NavBrand onLogoClick={onLogoClick} />

          {AdminApps &&
            <AdminApps reversed={nav.reversed} />
          }

          {!hiddeServices &&
            <NavServices reversed={nav.reversed} />
          }

          {search && search}

          <NavLeft>
            <NavList role="menu">
              {!isEmpty(items) && content}
              {NavRight && <NavRight user={user} />}
            </NavList>

            {/* { navAccount && !isEmpty(user) && */}
            <NavAccount
              user={user}
              signout={signout}
              reversed={nav.reversed}
            />
            {/* } */}

            { navAccount && isEmpty(user) && !authenticated &&
              <ButtonWrapper>
                <Button
                  color="red"
                  size={nav.size}
                  reversed={reversed}
                  {...routeProp}
                  margin={items ? '0' : '0 0 0 auto'}
                  whitespace="pre"
                >
                  {formatMessage(messages.navSignIn)}
                </Button>
              </ButtonWrapper>
            }
          </NavLeft>

        </Nav>
      </NavWrapper>
    )
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool,
  adminapps: PropTypes.any,
  hiddeServices: PropTypes.bool,
  intl: PropTypes.object,
  items: PropTypes.array,
  navAccount: PropTypes.bool.isRequired,
  NavRight: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  // noSideMenu: PropTypes.bool,
  onLogoClick: PropTypes.func,
  position: PropTypes.string,
  search: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  sideMenu: PropTypes.shape({
    content: PropTypes.any,
    showCloseButton: PropTypes.bool,
    alwaysDisplayed: PropTypes.bool,
  }),
  reversed: PropTypes.bool,
  signout: PropTypes.func,
  user: PropTypes.object,
  wrapperAdditionalStyle: PropTypes.array,
}

const mapStateToProps = (state) => ({
  authenticated: authenticatedSelector(state),
})

export default compose(
  connect(mapStateToProps),
  injectIntl,
)(Navbar)
