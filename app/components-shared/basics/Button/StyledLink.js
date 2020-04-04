import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { styles } from 'theme'

const StyledLink = styled(({
  customStyle,
  padding,
  margin,
  noBackground,
  exact,
  weight,
  styleType,
  ...rest
}) => <Link {...rest} />)`${styles.button.getStyle()}`

export default StyledLink
