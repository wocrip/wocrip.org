import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { settings } from 'theme'
import LazyLoad from './LazyLoad'


const Img = styled.img`
  border-radius: ${settings.radius}px;
  max-height: 100%;
  max-width: 100%;
`
const Wrapper = styled.div`
  border-radius: ${settings.radius}px;
  display: flex;
  justify-content: ${({ alignImage }) => alignImage};
  align-items: ${({ alignImage }) => alignImage};

  ${({ color }) => color && css`
    background: ${color};
  `}

  ${({ textAlign }) => textAlign && css`
    text-align: ${textAlign};
  `}

  ${({ height }) => height && css`
    height: ${height};
  `}

  ${({ width }) => width && css`
    width: ${width};
  `}
`
const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Image = React.forwardRef(({
  alt,
  alignImage,
  className,
  color,
  height,
  lazyLoading,
  loader,
  offsetVertical,
  pinable,
  // pinUrl,
  src,
  textAlign,
  title,
  width,
  ...props
}, ref) => {
  const [isLoading, setLoading] = useState(true)
  const onLoad = () => setLoading(false)

  const ImageComponent = (
    <Img
      className={className}
      src={src}
      // data-pin-url={pinUrl}
      data-pin-media={src}
      alt={alt}
      title={title}
      {...props}
      onLoad={onLoad}
    />
  )

  return (
    <Wrapper
      alignImage={alignImage}
      textAlign={textAlign}
      height={height}
      width={width}
      color={color}
      ref={ref}
    >
      {lazyLoading ?
        <LazyLoad offsetVertical={offsetVertical}>
          {ImageComponent}
        </LazyLoad>
        : ImageComponent
      }
      {isLoading && loader &&
        <Loader>
          {loader}
        </Loader>
      }
    </Wrapper>
  )
})
// We require the use of src and alt, only enforced by react in dev mode
Image.propTypes = {
  alt: PropTypes.string.isRequired,
  alignImage: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  lazyLoading: PropTypes.bool,
  loader: PropTypes.any,
  offsetVertical: PropTypes.number,
  pinable: PropTypes.bool,
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  textAlign: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
}

Image.defaultProps = {
  alignImage: 'center',
  alt: '',
  className: '',
  offsetVertical: 500,
  pinable: true,
  title: '',
}

export default Image
