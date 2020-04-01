import React from 'react'
import { shallow, mount } from 'enzyme'

import Nav from '../Nav'


const renderComponent = (props = {}) => shallow(
  <Nav {...props} />
)

describe('<Nav />', () => {
  it('renders a <nav /> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('nav')
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders all possibilities of reversed prop', () => {
    const renderedComponent = mount(
      <Nav reversed={false} />
    )

    expect(renderedComponent.prop('reversed')).toEqual(false)
    renderedComponent.setProps({ reversed: true })
    expect(renderedComponent.prop('reversed')).toEqual(true)
  })
})
