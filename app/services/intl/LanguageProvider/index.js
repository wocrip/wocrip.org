/*
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import Cookies from 'universal-cookie'

import { app } from 'theme'
import { dispatchLocale } from './dispatch'
import setCookieLocale from './setCookieLocale'
import getLocale from '../getLocale'


export class LanguageProvider extends Component {
  UNSAFE_componentWillMount() {
    const { locale, onLocaleToggle } = this.props
    const cookie = new Cookies()
    const cookieLocale = cookie.get('_locale')

    if (cookieLocale) onLocaleToggle(cookieLocale)
    else setCookieLocale(locale)
  }

  render() {
    let { locale } = this.props
    const { messages, children } = this.props
    const { intl: isIntl, lang } = app

    if (!isIntl) locale = lang
    else locale = getLocale()

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={messages[locale]}
      >
        {React.Children.only(children)}
      </IntlProvider>
    )
  }
}

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  messages: PropTypes.object,
  onLocaleToggle: PropTypes.func,
}

const mapDispatchToProps = dispatchLocale

export default connect(null, mapDispatchToProps)(LanguageProvider)
