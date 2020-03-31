import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from '@rebass/grid'

import { nav } from 'theme'
import { randomInt } from 'utils/helpers'

import TextSmall from 'components-shared/basics/TextSmall'
import IconExpandMore from 'components-shared/icons/IconExpandMore'

import DropdownButton from './DropdownButton'
import Item from './Item'
import List from './List'


const { size } = nav

const Wrapper = styled.div`
  text-align: center;
  padding: 0;
  position: relative;

  @media (max-width: ${size * 830}px) {
    margin-left: auto;
  }
`
class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
      id: `${Date.now()}_${randomInt(1000, 9999)}`,
    }

    this.appDropdown = React.createRef()

    this.handleClick = this.handleClick.bind(this)
    this.closeDropdown = this.closeDropdown.bind(this)
  }

  handleClick() {
    const { dropdownOpen } = this.state

    this.setState({ dropdownOpen: !dropdownOpen })

    const closeDropdown = () => this.setState({ dropdownOpen: false })

    window.addEventListener('click', function dropdown(event) {
      const { target } = event
      if (
        !dropdownOpen
        && this.appDropdown
        && target !== this.appDropdown
        && !this.appDropdown.contains(target)
      ) {
        window.removeEventListener('click', dropdown)
        closeDropdown()
      }
    })
  }

  closeDropdown() {
    this.setState({ dropdownOpen: false })
  }

  render() {
    const {
      fontSize,
      fontSizeList,
      fontWeight,
      fontWeightList,
      iconSize,
      iconMl,
      iconMt,
      onClick,
      options,
    } = this.props
    const { dropdownOpen, id } = this.state

    const defaultValue = options.filter((option) => !!option.default)[0].name
    const optionsWithoutDefault = options.filter((option) => !option.default)

    return (
      <Wrapper
        ref={this.appDropdown}
      >
        <DropdownButton
          onClick={this.handleClick}
          className={dropdownOpen ? 'open' : ''}
          tabIndex="0"
        >
          <TextSmall
            fontSize={fontSize}
            lineHeight="1em"
            fontWeight={fontWeight}
          >
            {defaultValue}
          </TextSmall>

          <Box
            ml={iconMl}
            mt={iconMt}
          >
            <IconExpandMore
              size={iconSize}
              open={dropdownOpen ? 'open' : ''}
            />
          </Box>
        </DropdownButton>

        <List
          onClick={this.handleClick}
          className={dropdownOpen ? 'open' : ''}
        >
          {optionsWithoutDefault && optionsWithoutDefault.map((option) => (
            <Item
              key={`${id}${option.key}`}
              fontSize={fontSizeList}
              fontWeight={fontWeightList}
              onClick={() => onClick(option.key)}
            >
              {option.name}
            </Item>
          ))}
        </List>
      </Wrapper>
    )
  }
}

Dropdown.propTypes = {
  iconSize: PropTypes.number,
  iconMt: PropTypes.string,
  iconMl: PropTypes.string,
  fontSize: PropTypes.string,
  fontSizeList: PropTypes.string,
  fontWeight: PropTypes.string,
  fontWeightList: PropTypes.string,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    default: PropTypes.bool,
  })).isRequired,
}

Dropdown.defaultProps = {
  iconSize: 24,
  iconMt: '2px',
  iconMl: '3px',
  fontSize: '1em',
  fontSizeList: '1em',
  fontWeight: 'normal',
  fontWeightList: 'normal',
}

export default Dropdown
