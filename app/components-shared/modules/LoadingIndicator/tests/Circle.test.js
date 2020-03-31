import React from 'react'
import { mount, shallow } from 'enzyme'

import Circle from '../Circle'

describe('<Circle />', () => {
  it('should render an <circle> tag', () => {
    const renderedComponent = mount(<Circle />)
    expect(renderedComponent.find('circle').length).toEqual(1)
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Circle />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Circle id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Circle attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
