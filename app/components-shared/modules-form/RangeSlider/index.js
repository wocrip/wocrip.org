/*
* From
* https://github.com/whoisandy/react-rangeslider/blob/master/src/Rangeslider.js
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'
import styled from 'styled-components'

import { capitalizeFirstLetter, clamp, randomInt } from 'utils/helpers'
import { styles } from 'theme'


const Slider = styled(Box)`${styles.slider.base}`
const Bar = styled(Box)`${styles.slider.bar}`
const Handle = styled(Box)`${styles.slider.handle}`
const Tooltip = styled(Box)`${styles.slider.tooltip}`

const Label = styled(Box)`${styles.slider.label}`
const Li = styled(Box)`${styles.slider.item}`
/**
 * Predefined constants
 * @type {Object}
 */
const constants = {
  orientation: {
    horizontal: {
      dimension: 'width',
      direction: 'left',
      reverseDirection: 'right',
      coordinate: 'x',
    },
    vertical: {
      dimension: 'height',
      direction: 'top',
      reverseDirection: 'bottom',
      coordinate: 'y',
    },
  },
}

class RangeSlider extends Component {
  static propTypes = {
    color: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    orientation: PropTypes.string,
    tooltip: PropTypes.bool,
    reverse: PropTypes.bool,
    labels: PropTypes.object,
    handleLabel: PropTypes.string,
    format: PropTypes.func,
    onChangeStart: PropTypes.func,
    onChange: PropTypes.func,
    onChangeComplete: PropTypes.func,
  }

  static defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    value: 0,
    orientation: 'horizontal',
    tooltip: true,
    reverse: false,
    labels: {},
    handleLabel: '',
    color: 'blue',
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      active: false,
      limit: 0,
      grab: 0,
    }

    this.sliderId = `rangeSlider_${randomInt(10000, 9999)}`
    // this.labels = React.createRef()

    this.getPositionFromValue = this.getPositionFromValue.bind(this)
    this.getValueFromPosition = this.getValueFromPosition.bind(this)
    this.handleFormat = this.handleFormat.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.position = this.position.bind(this)
    this.coordinates = this.coordinates.bind(this)
  }

  componentDidMount() {
    this.slider = document.querySelector(`#${this.sliderId}`)
    this.handle = document.querySelector(`#${this.sliderId} .rangeslider__handle`)
    this.tooltip = document.querySelector(`#${this.sliderId} .rangeslider__handle-tooltip`)
    this.label = document.querySelector(`#${this.sliderId} .rangeslider__handle-label`)
    this.handleUpdate()
  }

  /**
   * Calculate position of slider based on its value
   * @param  {number} value - Current value of slider
   * @return {position} pos - Calculated position of slider based on value
   */
  getPositionFromValue(value) {
    const { limit } = this.state
    const { min, max } = this.props
    const diffMaxMin = max - min
    const diffValMin = value - min
    const percentage = diffValMin / diffMaxMin
    const pos = Math.round(percentage * limit)

    return pos
  }

  /**
   * Translate position of slider to slider value
   * @param  {number} pos - Current position/coordinates of slider
   * @return {number} value - RangeSlider value
   */
  getValueFromPosition(pos) {
    const { limit } = this.state
    const { orientation, min, max, step } = this.props
    const percentage = clamp(pos, 0, limit) / (limit || 1)
    const baseVal = step * Math.round((percentage * (max - min)) / step)
    const value = orientation === 'horizontal' ? baseVal + min : max - baseVal

    return clamp(value, min, max)
  }

  /**
   * Format label/tooltip value
   * @param  {Number} - value
   * @return {Formatted Number}
   */
  handleFormat(value) {
    const { format } = this.props
    return format ? format(value) : value
  }

  /**
   * Update slider state on change
   * @return {void}
   */
  handleUpdate() {
    if (!this.slider) {
      // for shallow rendering
      return
    }
    const { orientation } = this.props
    const dimension = capitalizeFirstLetter(constants.orientation[orientation].dimension)
    const sliderPos = this.slider[`offset${dimension}`]
    const handlePos = this.handle[`offset${dimension}`]
    this.setState({
      limit: sliderPos - handlePos,
      grab: handlePos / 2,
    })
  }

  /**
   * Attach event listeners to mousemove/mouseup events
   * @return {void}
   */
  handleStart(event) {
    const { onChangeStart } = this.props
    document.addEventListener('mousemove', this.handleDrag)
    document.addEventListener('mouseup', this.handleEnd)
    this.setState(
      { active: true },
      () => onChangeStart && onChangeStart(event)
    )
  }

  /**
   * Handle drag/mousemove event
   * @param  {Object} event - Event object
   * @return {void}
   */
  handleDrag(event) {
    event.stopPropagation()
    const { onChange } = this.props
    const { target: { className, classList, dataset } } = event
    if (!onChange || className === 'rangeslider__labels') return

    let value = this.position(event)

    if (
      classList &&
      classList.contains('rangeslider__label-item') &&
      dataset.value
    ) {
      value = parseFloat(dataset.value)
    }

    this.handleUpdate()
    if (onChange) onChange(value, event)
  }

  /**
   * Detach event listeners to mousemove/mouseup events
   * @return {void}
   */
  handleEnd(event) {
    const { onChangeComplete } = this.props
    this.setState(
      { active: false },
      () => onChangeComplete && onChangeComplete(event)
    )
    document.removeEventListener('mousemove', this.handleDrag)
    document.removeEventListener('mouseup', this.handleEnd)
  }

  /**
   * Support for key events on the slider handle
   * @param  {Object} event - Event object
   * @return {void}
   */
  handleKeyDown(event) {
    event.preventDefault()
    const { keyCode } = event
    const { value, min, max, step, onChange } = this.props
    let sliderValue

    switch (keyCode) {
      case 38:
      case 39:
        sliderValue = value + step > max ? max : value + step
        if (onChange) onChange(sliderValue, event)
        break
      case 37:
      case 40:
        sliderValue = value - step < min ? min : value - step
        if (onChange) onChange(sliderValue, event)
        break
      default:
        return null
    }

    return null
  }

  /**
   * Calculate position of slider based on value
   * @param  {Object} event - Event object
   * @return {number} value - RangeSlider value
   */
  position(event) {
    const { grab } = this.state
    const { orientation, reverse } = this.props

    const node = this.slider
    const coordinateStyle = constants.orientation[orientation].coordinate
    const directionStyle = reverse
      ? constants.orientation[orientation].reverseDirection
      : constants.orientation[orientation].direction
    const clientCoordinateStyle = `client${capitalizeFirstLetter(coordinateStyle)}`
    const coordinate = !event.touches
      ? event[clientCoordinateStyle]
      : event.touches[0][clientCoordinateStyle]
    const direction = node.getBoundingClientRect()[directionStyle]
    const pos = reverse
      ? direction - coordinate - grab
      : coordinate - direction - grab
    const value = this.getValueFromPosition(pos)
    return value
  }

  /**
   * Grab coordinates of slider
   * @param  {Object} pos - Position object
   * @return {Object} - RangeSlider fill/handle coordinates
   */
  coordinates(pos) {
    const { limit, grab } = this.state
    const { orientation } = this.props
    const value = this.getValueFromPosition(pos)
    const position = this.getPositionFromValue(value)
    const handlePos = orientation === 'horizontal' ? position + grab : position
    const fillPos = orientation === 'horizontal'
      ? handlePos
      : limit - handlePos

    return {
      fill: fillPos,
      handle: handlePos,
      label: handlePos,
    }
  }

  renderLabels(labels) {
    return (
      <Label
        // ref={this.labels}
        className="rangeslider__labels"
      >
        {labels}
      </Label>
    )
  }

  render() {
    const {
      color,
      handleLabel,
      labels,
      min,
      max,
      orientation,
      reverse,
      value,
      tooltip,
    } = this.props
    const { active } = this.state
    const position = this.getPositionFromValue(value)
    const coords = this.coordinates(position)

    const reverseClass = reverse ? 'rangeslider-reverse' : ''
    const showTooltip = tooltip && active

    let labelItems = []
    let labelKeys = Object.keys(labels)

    if (labelKeys.length > 0) {
      labelKeys = labelKeys.sort((a, b) => (reverse ? a - b : b - a))
      labelItems = labelKeys.map((key) => {
        const labelPosition = this.getPositionFromValue(key)
        const labelCoords = this.coordinates(labelPosition)
        return (
          <Li
            key={key}
            className={'rangeslider__label-item'}
            data-value={key}
            onMouseDown={this.handleDrag}
            onTouchStart={this.handleStart}
            onTouchEnd={this.handleEnd}
            position={labelCoords.label}
          >
            {this.props.labels[key]}
          </Li>
        )
      })
    }

    return (
      <Slider
        id={this.sliderId}
        className={`rangeslider rangeslider-${orientation} ${reverseClass}`}
        onMouseDown={this.handleDrag}
        onMouseUp={this.handleEnd}
        onTouchStart={this.handleStart}
        onTouchEnd={this.handleEnd}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-orientation={orientation}
      >
        <Bar className="rangeslider__fill" />

        <Handle
          className="rangeslider__handle"
          onMouseDown={this.handleStart}
          onTouchMove={this.handleDrag}
          onTouchEnd={this.handleEnd}
          onKeyDown={this.handleKeyDown}
          position={coords.handle}
          tabIndex={0}
          color={color}
        >
          {showTooltip ?
            <Tooltip
              className="rangeslider__handle-tooltip"
            >
              <span>{this.handleFormat(value)}</span>
            </Tooltip>
            : null}
          <Label className="rangeslider__handle-label">{handleLabel}</Label>
        </Handle>

        {labels ? this.renderLabels(labelItems) : null}
      </Slider>
    )
  }
}

export default RangeSlider
