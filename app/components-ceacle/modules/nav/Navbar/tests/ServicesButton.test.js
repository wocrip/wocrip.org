import React from 'react'
import { shallow } from 'enzyme'

import ServicesButton from '../ServicesButton'


const renderComponent = (props = {}) => shallow(
  <ServicesButton {...props} />
)

describe('<ServicesButton />', () => {
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
