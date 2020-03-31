import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { styles } from 'theme'
import Label from 'components-shared/basics/Label'


const Wrapper = styled.div`
  ${styles.switch.wrapper}

  ${({ customStyle }) => customStyle && css`${customStyle}`}
`
const HiddenCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  ${styles.switch.checkbox}
`
const Knob = styled.div`
  ${styles.switch.knob}
`
const Background = styled.div`
  ${styles.switch.background}
`
const ContentBox = styled.div`
  position: relative;
`
const LabelBox = styled.span`
  margin-left: 15px;
`
const Switch = ({
  checked,
  color,
  customStyle,
  disabled,
  field,
  label,
  labelOn,
  onChange,
  onClick,
  reversed,
}) => (
  <Wrapper
    onClick={(event) => {
      if (onClick) onClick()

      if (onChange) {
        const evt = event
        evt.target.name = field
        evt.target.value = !checked
        onChange(evt)
      }
    }}
    className={disabled ? 'disabled' : ''}
    reversed={reversed}
    customStyle={customStyle}
  >
    <ContentBox>
      <HiddenCheckbox
        value={checked ? 'on' : 'off'}
        defaultChecked={checked}
      />
      <Knob
        className={checked ? 'on' : ''}
        color={color}
      />
      <Background
        className={checked ? 'on' : ''}
        color={color}
      />
    </ContentBox>

    {label &&
      <LabelBox>
        <Label>
          {(checked && labelOn) ? labelOn : label}
        </Label>
      </LabelBox>
    }
  </Wrapper>
)

Switch.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string,
  customStyle: PropTypes.array,
  disabled: PropTypes.bool,
  field: PropTypes.string,
  label: PropTypes.string,
  labelOn: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  reversed: PropTypes.bool,
}

Switch.defaultProps = {
  checked: false,
}

export default Switch
