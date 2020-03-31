import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { colors } from 'theme'

import Image from 'components-shared/basics/Image'


const Wrapper = styled.div`
  position: relative;
`
const MainImages = styled.div`
  border-radius: 12px;
  border: 4px solid ${rgba(colors.gray, 0.1)};
  width: 100%;
  padding-bottom: 64%;
  position: relative;

  ${({ ratio }) => ratio && css`
    padding-bottom: ${ratio}%;
  `}
`
const ThumbnailVisible = styled.div`
  width: 100%;
  overflow: hidden;
`
const ImageWrapper = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;

  div {
    height: 100%;
    margin: 0 auto;
  }

  img {
    height: 100%;
    width: auto;
  }

  ${({ isActive }) => isActive && css`
    opacity: 1;
    z-index: 10;
  `}
`

const ThumbnailWrapper = styled.div`
  display: flex;
  position: relative;
  margin: 20px 0 0;
  width: max-content;
  transition-property: left;
  transition-duration: 0.2s;
  left: 0px;

  ${({ wrapperPosition }) => wrapperPosition && css`
    left: ${wrapperPosition}px;
  `}
`
const Thumbnail = styled.div`
  cursor: pointer;
  border-radius: 12px;
  border: 4px solid ${rgba(colors.gray, 0.1)};
  margin: 0 2px;

  img {
    height: 100px;
    user-select: none;
  }

  ${({ isActive }) => isActive && css`
    border-color: ${rgba(colors.deepblue, 0.5)};
  `}
`

class Gallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      wrapperPosition: 0,
    }
  }

  onThumnailClick(event, index) {
    const target = event.currentTarget
    const { offsetLeft, parentNode } = target
    const topParent = parentNode.parentNode
    const wrapper = parentNode
    let position =
      topParent.offsetWidth / 2
      - offsetLeft
      - (target.offsetWidth / 2)

    if (position >= 0) position = 0

    const endPosition = position * -1 + topParent.offsetWidth
    if (endPosition >= wrapper.offsetWidth) {
      position = wrapper.offsetWidth * -1 + topParent.offsetWidth
    }

    this.setState({
      activeIndex: index,
      wrapperPosition: position,
    })
  }

  render() {
    const {
      images,
      ratio,
    } = this.props
    const {
      activeIndex,
      wrapperPosition,
    } = this.state

    return (
      <Wrapper>
        <MainImages ratio={ratio || 56.25}>
          {/* 56.25 => 16:9 */}

          {images.map((image, index) => (
            <ImageWrapper
              key={`image_gallery_${image.original}`}
              isActive={activeIndex === index}
            >
              <Image
                itemProp="image"
                src={image.original}
                alt={image.title}
                color="#f4f3f8"
                lazyLoading
              />
            </ImageWrapper>
          ))}
        </MainImages>

        <ThumbnailVisible>
          <ThumbnailWrapper wrapperPosition={wrapperPosition}>
            {images.map((image, index) => (
              <Thumbnail
                key={`image_gallery_thumb_${image.thumbnail}`}
                onClick={(event) => this.onThumnailClick(event, index)}
                isActive={activeIndex === index}
              >
                <Image
                  itemProp="image"
                  src={image.thumbnail}
                  color="#f4f3f8"
                  lazyLoading
                />
              </Thumbnail>
            ))}
          </ThumbnailWrapper>
        </ThumbnailVisible>
      </Wrapper>
    )
  }
}

Gallery.propTypes = {
  images: PropTypes.array,
  ratio: PropTypes.number,
}

export default Gallery
