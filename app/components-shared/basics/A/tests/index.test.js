import React from 'react'
import { shallow } from 'enzyme'

import A from '../index'


const renderComponent = (props = {}) => shallow(<A {...props} />).dive()

describe('<A />', () => {
  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders anchor by default', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find('a')).toHaveLength(1)
  })

  it('renders A when prop to is passed in', () => {
    const renderedComponent = renderComponent({ to: '#' }).dive()
    expect(renderedComponent.find('Link')).toHaveLength(1)
  })
})
