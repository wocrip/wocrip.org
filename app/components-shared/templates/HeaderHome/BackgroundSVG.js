import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'
import styled from 'styled-components'


const StyledBox = styled(Box)`
  position: absolute;
  z-index: 0;
  bottom: 0px;
`

const BackgroundSVG = (props) => {
  const Image = props.image

  return (
    <StyledBox width={[1, 1, 1, 1]}>
      <Image reversed={props.reversed} />
    </StyledBox>
  )
}

BackgroundSVG.propTypes = {
  image: PropTypes.func,
  reversed: PropTypes.bool,
}

export default BackgroundSVG
