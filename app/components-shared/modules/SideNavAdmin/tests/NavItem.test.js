import React from 'react'
import { shallow } from 'enzyme'

import NavItem from '../NavItem'


const renderComponent = (props = {}) => shallow(
  <NavItem {...props} />
)

describe('<NavItem />', () => {
  it('renders a <NavLink /> tag', () => {
    const renderedComponent = renderComponent({ to: '#' }).dive()
    expect(renderedComponent.find('NavLink')).toHaveLength(1)
  })

  it('renders a props when passed in', () => {
    const renderedComponent = renderComponent({ id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })
})
