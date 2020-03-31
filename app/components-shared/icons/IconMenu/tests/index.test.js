import React from 'react'
import { mount } from 'enzyme'

import IconAccountCircle from '../index'


const renderComponent = mount(<IconAccountCircle />)

describe('IconAccountCircle', () => {
  it('renders <svg />', () => {
    expect(renderComponent.find('svg')).toHaveLength(1)
  })

  it('rendres svg content', () => {
    expect(renderComponent.find('path')).toHaveLength(2)
  })
})
