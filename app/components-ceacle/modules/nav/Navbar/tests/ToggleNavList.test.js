import React from 'react'
import { shallow, mount } from 'enzyme'

import ToggleNavList from '../ToggleNavList'


const renderComponent = (props = {}) => shallow(
  <ToggleNavList {...props} />
)

describe('<ToggleNavList />', () => {
  it('renders a <div /> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('div')
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders all possibilities of reversed prop', () => {
    const renderedComponent = mount(
      <ToggleNavList reversed={false} />
    )

    expect(renderedComponent.prop('reversed')).toEqual(false)
    renderedComponent.setProps({ reversed: true })
    expect(renderedComponent.prop('reversed')).toEqual(true)
  })
})
