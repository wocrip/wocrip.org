import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'
import styled, { css } from 'styled-components'

import Switch from 'components-shared/modules-form/Switch'
import LoadingIndicator from 'components-shared/modules/LoadingIndicator'

const loaderStyle = css`
  position: absolute;
  top: 10px;
  left: -20px;
`
const Wrapper = styled(Box)`
  position: relative;
`
const SwitchLoader = (props) => {
  const { color, isLoading, loaderSize } = props

  return (
    <Wrapper>
      <Switch {...props} />

      { isLoading &&
        <LoadingIndicator
          color={color || 'black'}
          size={loaderSize || 17}
          noWrapper
          strokeWidth={8}
          customStyle={loaderStyle}
        />
      }
    </Wrapper>
  )
}

SwitchLoader.propTypes = {
  onClick: PropTypes.func,
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  loaderSize: PropTypes.number,
}

export default SwitchLoader
