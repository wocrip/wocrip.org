import React from 'react'
import { shallow, mount } from 'enzyme'

import Element from '../Element'


const renderComponent = (props = {}) => shallow(
  <Element {...props} />
)

describe('<Element />', () => {
  it('renders a <span /> tag', () => {
    const renderedComponent = renderComponent().dive()
    expect(renderedComponent.type()).toEqual('span')
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders all possibilities of reversed prop', () => {
    const renderedComponent = mount(
      <Element reversed={false} />
    )

    expect(renderedComponent.prop('reversed')).toEqual(false)
    renderedComponent.setProps({ reversed: true })
    expect(renderedComponent.prop('reversed')).toEqual(true)
  })
})
