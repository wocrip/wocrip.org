import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'

import { styles } from 'theme'
import IconClose from 'components-shared/icons/IconClose'


const CloseButton = styled.div`
  ${styles.tag.closeButton}
`
const Wrapper = styled(Flex)`
  ${styles.tag.button}
  position: relative;
`
class TagButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: [],
    }
  }

  render() {
    const {
      onClick,
      closeButton,
      tagName,
    } = this.props

    return (
      <Wrapper>
        <Box is="span">
          {tagName}
        </Box>

        {closeButton &&
          <CloseButton
            onClick={onClick}
          >
            <IconClose />
          </CloseButton>
        }
      </Wrapper>
    )
  }
}

TagButton.propTypes = {
  onClick: PropTypes.func,
  tagName: PropTypes.string.isRequired,
  closeButton: PropTypes.bool,
}

TagButton.defaultProps = {
  closeButton: true,
}

export default TagButton
