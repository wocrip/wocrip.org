import React from 'react'
import { shallow, mount } from 'enzyme'

import ServicesList from '../ServicesList'


const renderComponent = (props = {}) => shallow(
  <ServicesList {...props} />
)

describe('<ServicesList />', () => {
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

  it('renders all possibilities of reversed prop', () => {
    const renderedComponent = mount(
      <ServicesList reversed={false} />
    )

    expect(renderedComponent.prop('reversed')).toEqual(false)
    renderedComponent.setProps({ reversed: true })
    expect(renderedComponent.prop('reversed')).toEqual(true)
  })
})
