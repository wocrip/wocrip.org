import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql, withApollo } from 'react-apollo'
import Cookies from 'universal-cookie'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { auth_updateUser } from 'services/user/mutations'
import { userIdSelector } from 'services/user/selectors'
import { dispatchLocale } from 'services/intl/LanguageProvider/dispatch'
import { getLocaleSelector } from 'services/intl/LanguageProvider/selectors'
import setCookieLocale from 'services/intl/LanguageProvider/setCookieLocale'
import { lang } from 'services/intl/getLocale'

import NavItem from './NavItem'


class LocaleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _locale: '',
    }
    this.onClick = this.onClick.bind(this)
  }

  UNSAFE_componentWillMount() {
    const cookies = new Cookies()
    const cookieLocale = cookies.get('_locale')
    this.setState({ _locale: cookieLocale })
  }

  onClick(event, value) {
    event.preventDefault()
    const {
      history,
      location,
      match,
      onLocaleToggle,
      userId,
    } = this.props

    if (userId) {
      this.props.auth_updateUser({
        variables: { _id: userId, locale: value },
      })
    }

    let getLang = lang(value)
    const { params, path } = match
    const withLang = path.includes('lang([a-z]{2})?')
    const { pathname, search, state } = location

    if (getLang && withLang) {
      getLang = params.lang ? '' : getLang
      const newPathname = `${getLang}${pathname}`

      history.replace({
        pathname: newPathname,
        search,
        state,
      })
    } else if (!getLang && withLang) {
      const hasLang = !!params.lang
      const newPathname = hasLang ? pathname.substring(3) : pathname

      history.replace({
        pathname: newPathname,
        search,
        state,
      })
    }

    this.setState({ _locale: value })
    setCookieLocale(value)
    onLocaleToggle(value)
    window.location.reload()
  }

  render() {
    return [
      <NavItem
        key="english"
        onClick={(event) => this.onClick(event, 'en')}
      >
        English
      </NavItem>,
      <NavItem
        key="francais"
        onClick={(event) => this.onClick(event, 'fr')}
      >
        Français
      </NavItem>,
    ]
  }
}

LocaleList.propTypes = {
  auth_updateUser: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
  onLocaleToggle: PropTypes.func,
  userId: PropTypes.string,
}

const mapStateToProps = (state) => ({
  ...getLocaleSelector(state),
  userId: userIdSelector(state),
})

export const mapDispatchToProps = dispatchLocale

export default compose(
  withRouter,
  withApollo,
  graphql(auth_updateUser, {
    name: 'auth_updateUser',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(LocaleList)
