import React from 'react'
import { shallow, mount } from 'enzyme'

import StyledFlex from '../StyledFlex'


const renderComponent = (props = {}) => shallow(
  <StyledFlex {...props} />
)

describe('<StyledFlex />', () => {
  it('renders a <div /> tag', () => {
    const renderedComponent = renderComponent().dive()
    expect(renderedComponent.find('Flex')).toHaveLength(1)
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders all possibilities of reversed prop', () => {
    const renderedComponent = mount(
      <StyledFlex reversed={false} />
    )

    expect(renderedComponent.prop('reversed')).toEqual(false)
    renderedComponent.setProps({ reversed: true })
    expect(renderedComponent.prop('reversed')).toEqual(true)
  })
})
