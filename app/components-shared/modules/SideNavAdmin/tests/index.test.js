import React from 'react'
import { shallow } from 'enzyme'

import SideNav from '../index'


const renderComponent = (props = {}) => shallow(
  <SideNav {...props} />
)
const items = [
  {
    name: 'Architectures',
    path: '/documentation/architectures',
    children: [
      {
        name: 'Global view',
        path: '/documentation/architectures/global-view',
      },
      {
        name: 'Client application',
        path: '/documentation/architectures/client-application',
      },
    ],
  },
  {
    name: 'Client application',
    path: '/documentation/client-application',
    children: [
      {
        name: 'Getting started',
        path: '/documentation/client-application/getting-started',
      },
      {
        name: 'Components',
        path: '/documentation/client-application/components',
      },
    ],
  },
]

describe('<SideNav />', () => {
  it('renders a <nav /> tag', () => {
    const renderedComponent = renderComponent().dive()
    expect(renderedComponent.type()).toEqual('nav')
  })

  it('renders nav elements', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.childAt(0).dive().find('button')).toHaveLength(1)
    expect(renderedComponent.childAt(1).dive().find('div')).toHaveLength(1)
  })

  it('renders items when passed in', () => {
    const renderedComponent = renderComponent({ items }).dive()
    expect(renderedComponent.childAt(1).dive().find('div').children()).toHaveLength(2)
  })

  it('should have <NavButton /> to handle click', () => {
    const renderedComponent = renderComponent({ items })
    expect(renderedComponent.state().navOpen).toEqual(false)
    renderedComponent.childAt(0).dive().find('button').simulate('click')
    expect(renderedComponent.state().navOpen).toEqual(true)
  })

  it('should have <NavItem /> to handle click', () => {
    const renderedComponent = renderComponent({ items })
    expect(renderedComponent.state().navOpen).toEqual(false)
    renderedComponent.childAt(1).childAt(0).childAt(1).simulate('click')
    expect(renderedComponent.state().navOpen).toEqual(true)
  })
})
