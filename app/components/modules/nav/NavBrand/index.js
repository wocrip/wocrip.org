import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import { colors, app } from 'theme'
import { lang } from 'services/intl/getLocale'

import A from 'components-shared/basics/A'


const LogoLink = styled(A)`
  padding: 0;
  display: flex;
  align-items: center;
`
const {
  logo,
} = app
const Logo = logo
const NavBrand = ({
  intl: { locale },
}) => (
  <LogoLink
    to={`${lang(locale)}/`}
    noVisited
    noHover
  >
    {logo &&
      <Logo color={colors.logo} />
    }
  </LogoLink>
)

NavBrand.propTypes = {
  intl: PropTypes.object,
}

export default injectIntl(NavBrand)
