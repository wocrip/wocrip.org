import React from 'react'
import { mount } from 'enzyme'

import IconCircleCheck from '../index'


const renderComponent = mount(<IconCircleCheck />)

describe('IconCircleCheck', () => {
  it('renders <svg />', () => {
    expect(renderComponent.find('svg')).toHaveLength(1)
  })

  it('rendres svg content', () => {
    expect(renderComponent.find('polygon')).toHaveLength(1)
    expect(renderComponent.find('path')).toHaveLength(1)
  })
})
