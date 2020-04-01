import React from 'react'
import { shallow, mount } from 'enzyme'

import Navbar from '../index'


const renderComponent = (props = {}) => shallow(
  <Navbar {...props} />
)
const items = [
  { name: 'Documentation', href: '/documentation' },
  { name: 'Design System', href: '/design-system' },
]


describe('<Navbar />', () => {
  it('renders a <nav /> tag', () => {
    const renderedComponent = renderComponent().dive()
    expect(renderedComponent.type()).toEqual('nav')
  })

  it('renders nav elements by default', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find('ToggleNav')).toHaveLength(1)
    expect(renderedComponent.find('NavBrand')).toHaveLength(1)
  })

  it('renders items when passed in', () => {
    const renderedComponent = renderComponent({ items }).dive()
    expect(renderedComponent.childAt(3).dive().find('div').children()).toHaveLength(2)
  })

  it('renders items when passed in', () => {
    const div = global.document.createElement('div')
    global.document.body.appendChild(div)

    const spy = jest.spyOn(Navbar.prototype, 'componentDidMount')
    const wrapper = mount(<Navbar />, { attachTo: div })
    wrapper.instance().componentDidMount()
    expect(spy).toHaveBeenCalled()
    wrapper.detach()
  })
})
