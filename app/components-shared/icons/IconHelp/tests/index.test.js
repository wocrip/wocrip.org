import React from 'react'
import { mount } from 'enzyme'

import IconHelp from '../index'


const renderComponent = mount(<IconHelp />)

describe('IconHelp', () => {
  it('renders <svg />', () => {
    expect(renderComponent.find('svg')).toHaveLength(1)
  })

  it('rendres svg content', () => {
    expect(renderComponent.find('title')).toHaveLength(1)
    expect(renderComponent.find('path')).toHaveLength(2)
  })
})
