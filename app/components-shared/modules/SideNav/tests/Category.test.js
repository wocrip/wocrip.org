import React from 'react'
import { shallow } from 'enzyme'

import Category from '../Category'


const renderComponent = (props = {}) => shallow(
  <Category {...props} />
)

describe('<Category />', () => {
  it('renders a <div /> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('div')
  })
})
