import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'

import parentScroll from './utils/parentScroll'
import inViewport from './utils/inViewport'


export default class LazyLoad extends Component {
  constructor(props) {
    super(props)

    this.lazyLoadHandler = this.lazyLoadHandler.bind(this)

    if (props.throttle > 0) {
      if (props.debounce) {
        this.lazyLoadHandler = debounce(this.lazyLoadHandler, props.throttle)
      } else {
        this.lazyLoadHandler = throttle(this.lazyLoadHandler, props.throttle)
      }
    }

    this.state = { visible: false }
  }

  componentDidMount() {
    this._mounted = true
    this.lazyLoadHandler()

    if (this.lazyLoadHandler.flush) {
      this.lazyLoadHandler.flush()
    }

    window.addEventListener('resize', this.lazyLoadHandler)
    window.addEventListener('scroll', this.lazyLoadHandler)
  }

  UNSAFE_componentWillReceiveProps() {
    if (!this.state.visible) {
      this.lazyLoadHandler()
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    return nextState.visible
  }

  componentWillUnmount() {
    this._mounted = false
    if (this.lazyLoadHandler.cancel) {
      this.lazyLoadHandler.cancel()
    }

    this.detachListeners()
  }

  getEventNode() {
    return parentScroll(findDOMNode(this))
  }

  getOffset() {
    const {
      offset, offsetVertical, offsetHorizontal,
      offsetTop, offsetBottom, offsetLeft, offsetRight, threshold,
    } = this.props

    const _offsetAll = threshold || offset
    const _offsetVertical = offsetVertical || _offsetAll
    const _offsetHorizontal = offsetHorizontal || _offsetAll

    return {
      top: offsetTop || _offsetVertical,
      bottom: offsetBottom || _offsetVertical,
      left: offsetLeft || _offsetHorizontal,
      right: offsetRight || _offsetHorizontal,
    }
  }

  lazyLoadHandler() {
    if (!this._mounted) {
      return
    }

    const offset = this.getOffset()
    const node = findDOMNode(this)
    const eventNode = this.getEventNode()

    if (inViewport(node, eventNode, offset)) {
      const { onContentVisible } = this.props

      this.setState({ visible: true }, () => {
        if (onContentVisible) {
          onContentVisible()
        }
      })
      this.detachListeners()
    }
  }

  detachListeners() {
    window.removeEventListener('resize', this.lazyLoadHandler)
    window.removeEventListener('scroll', this.lazyLoadHandler)
  }

  render() {
    const { children, className, height, width } = this.props
    const { visible } = this.state

    const elStyles = { height, width }
    const elClasses = (
      `LazyLoad ${(visible ? ' is-visible' : '')} ${(className ? 'className' : '')}`
    )

    return (
      <div className={elClasses} style={elStyles}>
        {visible && children}
      </div>
    )
  }
}

LazyLoad.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  debounce: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  offset: PropTypes.number,
  offsetBottom: PropTypes.number,
  offsetHorizontal: PropTypes.number,
  offsetLeft: PropTypes.number,
  offsetRight: PropTypes.number,
  offsetTop: PropTypes.number,
  offsetVertical: PropTypes.number,
  threshold: PropTypes.number,
  throttle: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onContentVisible: PropTypes.func,
}

LazyLoad.defaultProps = {
  debounce: false,
  offset: 0,
  offsetBottom: 0,
  offsetHorizontal: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetTop: 0,
  offsetVertical: 0,
  throttle: 250,
}
