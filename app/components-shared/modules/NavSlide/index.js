import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { Flex } from '@rebass/grid'
import { injectIntl } from 'react-intl'
import styled from 'styled-components'


const Wrapper = styled(Flex)``

class NavSlide extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  handleClick() {

  }

  render() {
    const {
      intl: { formatMessage },
    } = this.props
    return (
      <Wrapper p="5px 25px">
      </Wrapper>
    )
  }
}

NavSlide.propTypes = {
  intl: PropTypes.object.isRequired,
}

export default compose(
  injectIntl,
)(NavSlide)
