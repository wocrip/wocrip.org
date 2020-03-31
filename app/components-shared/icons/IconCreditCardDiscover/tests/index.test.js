import React from 'react'
import { mount } from 'enzyme'

import IconArrowRight from '../index'


const renderComponent = mount(<IconArrowRight />)

describe('IconArrowRight', () => {
  it('renders <svg />', () => {
    expect(renderComponent.find('svg')).toHaveLength(1)
  })

  it('has a child', () => {
    expect(renderComponent.find('path')).toHaveLength(1)
  })
})
