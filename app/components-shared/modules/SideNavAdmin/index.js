import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, settings } from 'theme'
import Category from './Category'
import CategoryTitle from './CategoryTitle'
import NavItem from './NavItem'
import NavList from './NavList'


const Nav = styled.nav`
  width: 100%;
  background-color: ${({ reversed }) => reversed ? colors.black : colors.white};
  color: ${({ reversed }) => reversed ? colors.white : colors.black};
  font-size: 0.85em;
  border-radius: ${settings.radius}px;
  margin: 0 0 0 5px;
`

class SideNavAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navOpen: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    window.scrollTo(0, 0)
  }

  render() {
    let content = ''
    const { items, reversed } = this.props
    const { navOpen } = this.state

    if (items) {
      content = items.map((category) => (
        <Category key={category.name}>
          <CategoryTitle>{category.name}</CategoryTitle>

          { category.children.map((item) => (
            <NavItem
              activeClassName="active"
              onClick={this.handleClick}
              key={`${category.slug}_${item.slug}`}
              to={`${category.slug}/${item.slug}`}
              reversed={reversed}
            >
              { item.name }
            </NavItem>
          )) }
        </Category>
      )
      )
    }

    return (
      <Nav
        role="navigation"
        reversed={reversed}
      >
        <NavList
          className={navOpen ? 'open' : ''}
        >
          { content }
        </NavList>
      </Nav>
    )
  }
}

SideNavAdmin.propTypes = {
  items: PropTypes.array,
  reversed: PropTypes.bool,
}

export default SideNavAdmin
