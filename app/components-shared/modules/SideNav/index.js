import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IconMenu from 'components-shared/icons/IconMenu'
import Category from './Category'
import CategoryTitle from './CategoryTitle'
import NavItem from './NavItem'
import NavButton from './NavButton'
import NavList from './NavList'


const Nav = styled.nav`
  width: 100%;
  background-color: white;
  font-size: 0.85em;
`

const IconWrapper = styled.span`
  margin: 0 10px 0 0;
`

class SideNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { navOpen } = this.state
    this.setState({ navOpen: !navOpen })

    window.scrollTo(0, 0)
  }

  render() {
    let content = ''
    const { handleClick } = this
    const { items } = this.props
    const { navOpen } = this.state

    if (items) {
      content = items.map((category) => (
        <Category key={category.name}>
          <CategoryTitle>{category.name}</CategoryTitle>

          { category.children.map((item) => (
            <NavItem
              activeClassName="active"
              onClick={handleClick}
              to={item.path}
              key={item.path}
            >
              { item.name }
            </NavItem>
          )) }
        </Category>
      )
      )
    }

    return (
      <Nav role="navigation">
        <NavButton
          onClick={handleClick}
        >
          <IconWrapper>
            <IconMenu />
          </IconWrapper>
          Table of Content
        </NavButton>

        <NavList
          className={navOpen ? 'open' : ''}
        >
          { content }
        </NavList>
      </Nav>
    )
  }
}

SideNav.propTypes = {
  items: PropTypes.array,
}

export default SideNav
