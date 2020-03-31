import React from 'react'
import { mount, shallow } from 'enzyme'

import Svg from '../Svg'

describe('<Svg />', () => {
  it('should render an <circle> tag', () => {
    const renderedComponent = mount(<Svg />)
    expect(renderedComponent.find('svg').length).toEqual(1)
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Svg />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Svg id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Svg attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
