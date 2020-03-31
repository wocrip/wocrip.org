import React from 'react'
import { shallow } from 'enzyme'

import CategoryTitle from '../CategoryTitle'


const renderComponent = (props = {}) => shallow(
  <CategoryTitle {...props} />
)

describe('<CategoryTitle />', () => {
  it('renders a <span /> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('span')
  })
})
