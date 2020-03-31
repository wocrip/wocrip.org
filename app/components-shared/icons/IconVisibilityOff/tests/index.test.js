import React from 'react'
import { mount } from 'enzyme'

import IconVisibilityOff from '../index'


const renderComponent = mount(<IconVisibilityOff />)

describe('IconVisibilityOff', () => {
  it('renders <svg />', () => {
    expect(renderComponent.find('svg')).toHaveLength(1)
  })

  it('rendres svg content', () => {
    expect(renderComponent.find('title')).toHaveLength(1)
    expect(renderComponent.find('path')).toHaveLength(2)
  })
})
