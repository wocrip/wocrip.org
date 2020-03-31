import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex } from '@rebass/grid'

import { styles } from 'theme'
import { randomInt } from 'utils/helpers'
import Label from 'components-shared/basics/Label'


const ButtonWrapper = styled(Flex)`
  ${styles.buttonRadio.wrapper}

  ${({ wrapperstyle }) => wrapperstyle && wrapperstyle}
`
const LabelBoxes = styled(Box)`
  ${({ labelboxstyle }) => labelboxstyle && labelboxstyle}
`
const LabelBox = styled.div`
  position: relative;
`
const LabelButton = styled.label`
  ${styles.buttonRadio.label}
`
const Input = styled.input`
  ${styles.buttonRadio.input}
`
class ButtonRadio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: -1,
    }

    this.name = `radios_${Date.now()}`
    this.optionKeys = props.options.map((option, index) =>
      `${index}_${randomInt(100, 999)}`
    )

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  UNSAFE_componentWillMount() {
    const {
      initActiveIndex,
      getButtonRadioValue,
    } = this.props

    if (initActiveIndex >= 0) {
      this.setState({ activeIndex: initActiveIndex })
      getButtonRadioValue(initActiveIndex)
    }
  }


  handleOnClick(index) {
    const {
      allowUnselect,
      getButtonRadioValue,
    } = this.props
    const { activeIndex } = this.state
    let newIndex = index
    if (allowUnselect && index === activeIndex) newIndex = -1
    this.setState({ activeIndex: newIndex })
    getButtonRadioValue(newIndex)
  }

  render() {
    const {
      color,
      label,
      labelboxstyle,
      labelColor,
      labelWeight,
      labelWhiteSpace,
      options,
      reversed,
      wrapperstyle,
    } = this.props
    const {
      activeIndex,
    } = this.state

    return (
      <ButtonWrapper
        flexDirection="column"
        wrapperstyle={wrapperstyle}
      >
        {label &&
          <Box>
            <Label
              color={labelColor}
              labelWeight={labelWeight}
              reversed={reversed}
            >
              {label}
            </Label>
          </Box>
        }

        <LabelBoxes labelboxstyle={labelboxstyle}>
          {options.map((option, index) => ([
            <LabelBox
              key={`${this.name}_inputBox_${this.optionKeys[index]}`}
            >
              <Input
                key={`${this.name}_input_${this.optionKeys[index]}`}
                type="radio"
                name={this.name}
              />
              <LabelButton
                key={`${this.name}_label_${this.optionKeys[index]}`}
                color={color}
                reversed={reversed}
                labelWhiteSpace={labelWhiteSpace}
                onClick={() => this.handleOnClick(index)}
                className={index === activeIndex && 'active'}
              >
                {option}
              </LabelButton>
            </LabelBox>
          ]))}
        </LabelBoxes>
      </ButtonWrapper>
    )
  }
}

        // <LabelBox labelboxstyle={labelboxstyle}>
        //   {options.map((option, index) => ([
        //     <Input
        //       key={`${this.name}_input_${this.optionKeys[index]}`}
        //       type="radio"
        //       name={this.name}
        //     />,
        //     <LabelButton
        //       key={`${this.name}_label_${this.optionKeys[index]}`}
        //       color={color}
        //       reversed={reversed}
        //       labelWhiteSpace={labelWhiteSpace}
        //       onClick={() => this.handleOnClick(index)}
        //       className={index === activeIndex && 'active'}
        //     >
        //       {option}
        //     </LabelButton>,
        //   ]))}
        // </LabelBox>

ButtonRadio.propTypes = {
  allowUnselect: PropTypes.bool,
  initActiveIndex: PropTypes.number.isRequired,
  color: PropTypes.string,
  getButtonRadioValue: PropTypes.func.isRequired,
  labelboxstyle: PropTypes.array,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  labelWeight: PropTypes.string,
  labelWhiteSpace: PropTypes.string,
  options: PropTypes.array.isRequired,
  reversed: PropTypes.bool,
  wrapperstyle: PropTypes.array,
}

ButtonRadio.defaultProps = {
  initActiveIndex: -1,
}

export default ButtonRadio
