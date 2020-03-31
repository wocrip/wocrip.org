import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

import Image from 'components-shared/basics/Image'
import Title from 'components-shared/basics/Title'
import Text from 'components-shared/basics/Text'


const TextWrapper = styled.div`
  margin: 10px 0px;
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`

class Feature extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      align,
      right,
      imageWidth,
      title,
      text,
      textSize,
      textColor,
      image,
      svgImage,
      svgColor,
      reversed,
    } = this.props
    // const division = 12
    // const leftSize = !right ? division : division / 2
    // const rightSize = right ? division / 2 : division

    const textContent = (
      <TextWrapper>
        <Title
          size="h4"
          reversed={reversed}
          align={align}
          whiteSpace="pre-wrap"
        >
          { title }
        </Title>
        <Text
          reversed={reversed}
          align={align}
          size={textSize}
          color={textColor}
        >
          { text }
        </Text>
      </TextWrapper>
    )

    let content = textContent
    if (image || svgImage) {
      const Img = image ? Image : svgImage
      const svgProps = { align, width: imageWidth, colorBrush: svgColor }
      const imageProps = { align, width: imageWidth, src: image, alt: title }
      const imgProps = image ? imageProps : svgProps

      content = (
        <Box>
          <ImageBox>
            {
              !right ? <Img {...imgProps} /> : textContent
            }
          </ImageBox>
          <Box>
            {
              right ? <Img {...imgProps} /> : textContent
            }
          </Box>
        </Box>
      )
    }

    return content
  }
}

Feature.propTypes = {
  right: PropTypes.bool,
  reversed: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  textSize: PropTypes.number,
  textColor: PropTypes.string,
  image: PropTypes.string,
  svgImage: PropTypes.func,
  svgColor: PropTypes.string,
  align: PropTypes.string,
  imageWidth: PropTypes.string,
}

Feature.defaultProps = {
  right: false,
  reversed: false,
  title: 'Default feature title',
  text: 'Default feature text',
}

export default Feature
