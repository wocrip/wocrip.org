import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Button from 'components-shared/basics/Button'
import LoadingIndicator from 'components-shared/modules/LoadingIndicator'


const additionalStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const ChildrenBox = styled.span`
  opacity: ${({ hideChildren }) => hideChildren ? 0 : 1}
`
const ButtonLoader = (props) => {
  const {
    children,
    isLoading,
    loaderColor,
    loaderSize,
  } = props

  return (
    <Button {...props}>
      <ChildrenBox
        hideChildren={isLoading}
      >
        { Children.toArray(children) }
      </ChildrenBox>
      { isLoading &&
        <LoadingIndicator
          color={loaderColor || 'black'}
          size={loaderSize || 20}
          noWrapper
          strokeWidth={5}
          additionalStyle={isLoading && additionalStyle}
        />
      }
    </Button>
  )
}

ButtonLoader.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  loaderColor: PropTypes.string,
  loaderSize: PropTypes.number,
  children: PropTypes.node.isRequired,
}

export default ButtonLoader
