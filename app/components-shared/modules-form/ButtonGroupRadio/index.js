import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from '@rebass/grid'

import { styles } from 'theme'
import { slugify } from 'utils/helpers'
import Label from 'components-shared/basics/Label'


const ButtonWrapper = styled(Flex)`
  ${styles.buttonGroupRadio.wrapper}
`
const LabelButton = styled.label`
  ${styles.buttonGroupRadio.label}
`
const Input = styled.input`
  ${styles.buttonGroupRadio.input}
`
class ButtonGroupRadio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: -1,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  UNSAFE_componentWillMount() {
    const {
      initActiveIndex,
      getButtonGroupRadioValue,
      options,
    } = this.props

    if (typeof initActiveIndex === 'number' && initActiveIndex >= 0) {
      this.setState({ activeIndex: initActiveIndex })
      getButtonGroupRadioValue(options[initActiveIndex])
    }
  }


  handleOnClick(index) {
    this.setState({ activeIndex: index })
  }

  render() {
    const {
      color,
      getButtonGroupRadioValue,
      label,
      labelColor,
      labelWeight,
      options,
      reversed,
    } = this.props
    const {
      activeIndex,
    } = this.state

    return (
      <ButtonWrapper
        flexDirection="column"
      >
        <Box>
          {label &&
            <Label
              color={labelColor}
              labelWeight={labelWeight}
              reversed={reversed}
            >
              {label}
            </Label>
          }
        </Box>

        <Box>
          {options.map((option, index) => (
            <LabelButton
              key={`LabelButton_${slugify(option)}`}
              color={color}
              reversed={reversed}
              onClick={() => {
                this.handleOnClick(index)
                getButtonGroupRadioValue(option)
              }}
              className={index === activeIndex && 'active'}
              size={0.8}
            >
              <Input
                type="radio"
                name="options"
                autoComplete="off"
              />
              {option}
            </LabelButton>

          ))}
        </Box>
      </ButtonWrapper>
    )
  }
}

ButtonGroupRadio.propTypes = {
  initActiveIndex: PropTypes.number,
  color: PropTypes.string,
  getButtonGroupRadioValue: PropTypes.func.isRequired,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  labelWeight: PropTypes.string,
  options: PropTypes.array.isRequired,
  reversed: PropTypes.bool,
}

export default ButtonGroupRadio
