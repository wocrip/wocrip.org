import React from 'react'
import { mount } from 'enzyme'

import LogoAccount from '../index'


const renderComponent = mount(<LogoAccount />)

describe('LogoAccount', () => {
  it('renders <svg />', () => {
    expect(renderComponent.find('svg')).toHaveLength(1)
  })

  it('renders <path /> and <title /> tags', () => {
    expect(renderComponent.find('title')).toHaveLength(1)
    expect(renderComponent.find('path')).toHaveLength(7)
  })
})
