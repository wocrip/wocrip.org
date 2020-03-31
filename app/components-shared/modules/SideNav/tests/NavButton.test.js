import React from 'react'
import { shallow } from 'enzyme'

import NavButton from '../NavButton'


const renderComponent = (props = {}) => shallow(
  <NavButton {...props} />
)

describe('<NavButton />', () => {
  it('renders a <button /> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('button')
  })
})
