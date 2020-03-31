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
})
