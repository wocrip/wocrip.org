import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import Cookies from 'universal-cookie'
import { withRouter } from 'react-router-dom'

import { auth_updateUser } from 'services/user/mutations'
import { userIdSelector } from 'services/user/selectors'
import { appLocales } from 'services/intl/i18n'
import { dispatchLocale } from 'services/intl/LanguageProvider/dispatch'
import { getLocaleSelector } from 'services/intl/LanguageProvider/selectors'
import setCookieLocale from 'services/intl/LanguageProvider/setCookieLocale'
import { lang } from 'services/intl/getLocale'

import Toggle from 'components-shared/modules/Toggle'

import messages from './messages'
import Wrapper from './Wrapper'


class LocaleToggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      _locale: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  UNSAFE_componentWillMount() {
    const cookies = new Cookies()
    const cookieLocale = cookies.get('_locale')
    this.setState({ _locale: cookieLocale })
  }

  onSubmit(event) {
    event.preventDefault()
    const {
      history,
      location,
      match,
      onLocaleToggle,
      userId,
    } = this.props
    const { value } = event.target

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
    const { locale } = this.props
    const { _locale } = this.state

    return (
      <Wrapper>
        <Toggle
          value={_locale || locale}
          values={appLocales}
          messages={messages}
          onToggle={this.onSubmit}
        />
      </Wrapper>
    )
  }
}

LocaleToggle.propTypes = {
  auth_updateUser: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  locale: PropTypes.string,
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
  graphql(auth_updateUser, {
    name: 'auth_updateUser',
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(LocaleToggle)
