import React from 'react'
import { mount } from 'enzyme'

import IconDoubleBars from '../index'


const renderComponent = mount(<IconDoubleBars />)

describe('IconDoubleBars', () => {
  it('renders <svg />', () => {
    expect(renderComponent.find('svg')).toHaveLength(1)
  })

  it('rendres svg content', () => {
    expect(renderComponent.find('rect')).toHaveLength(2)
  })
})
