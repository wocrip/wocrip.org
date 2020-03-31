import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'


const HeaderImage = (props) => {
  const Image = props.image

  return (
    <Box width={[0, 0, 0, 1 / 3]}>
      <Image reversed={props.reversed} />
    </Box>
  )
}

HeaderImage.propTypes = {
  image: PropTypes.func,
  reversed: PropTypes.bool,
}

export default HeaderImage
