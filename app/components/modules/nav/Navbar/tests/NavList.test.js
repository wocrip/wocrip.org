import React from 'react'
import { shallow } from 'enzyme'

import NavList from '../NavList'


const renderComponent = (props = {}) => shallow(
  <NavList {...props} />
)

describe('<NavList />', () => {
  it('renders a <div /> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('div')
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })
})
