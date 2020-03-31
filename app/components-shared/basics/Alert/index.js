import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { styles } from 'theme'


const StyledAlert = styled.div`${styles.alert}`

const Alert = ({ ...props }) => (
  <StyledAlert role="alert" {...props} />
)

Alert.propTypes = {
  color: PropTypes.string,
}

export default Alert
