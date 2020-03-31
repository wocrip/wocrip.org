import React from 'react'
import { mount } from 'enzyme'

import IconServices from '../index'


const renderComponent = mount(<IconServices />)

describe('IconServices', () => {
  it('renders <svg />', () => {
    expect(renderComponent.find('svg')).toHaveLength(1)
  })

  it('rendres svg content', () => {
    expect(renderComponent.find('title')).toHaveLength(1)
    expect(renderComponent.find('circle')).toHaveLength(4)
  })
})
