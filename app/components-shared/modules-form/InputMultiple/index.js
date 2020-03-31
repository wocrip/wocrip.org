import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@rebass/grid'
import styled from 'styled-components'

import { slugify } from 'utils/helpers'
import Label from 'components-shared/basics/Label'
import Input from 'components-shared/basics/Input'


const InputWrapper = styled(Flex)`
  min-height: ${45}px;
  margin: 10px 0;
  user-select: none;
  position: relative;
`
const getFlatSide = (fields, index) => {
  let side = 'leftRight'
  if (index === 0) side = 'right'
  if (index === (fields.length - 1)) side = 'left'
  return side
}
class InputMultiple extends Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {},
    }
  }

  render() {
    const {
      color,
      getInputMultipleValue,
      field,
      fields,
      label,
      labelColor,
      labelWeight,
      reversed,
    } = this.props

    return (
      <InputWrapper
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

        <Flex>
          {fields.map((element, index) => (
            <Box
              key={`Input_${slugify(element.field)}`}
              width={`${100 / fields.length}%`}
            >
              <Input
                color={color}
                reversed={reversed}
                name={`${field}.${element.value}`}
                placeholder={element.field}
                value={[field][element.value]}
                onChange={(event) => {
                  const value = {
                    [element.value]: event.target.value,
                  }
                  getInputMultipleValue(field, value)
                }}
                flat={getFlatSide(fields, index)}
              />
            </Box>
          ))}
        </Flex>
      </InputWrapper>
    )
  }
}

InputMultiple.propTypes = {
  color: PropTypes.string,
  getInputMultipleValue: PropTypes.func.isRequired,
  field: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    }),
  ),
  label: PropTypes.string,
  labelColor: PropTypes.string,
  labelWeight: PropTypes.string,
  reversed: PropTypes.bool,
}

export default InputMultiple
