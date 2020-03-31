import React from 'react'
import { shallow } from 'enzyme'

import HeaderImage from '../HeaderImage'

const children = (<p>text</p>)
const renderComponent = (props = {}) => shallow(
  <HeaderImage {...props}>
    {children}
  </HeaderImage>
)

describe('<HeaderImage />', () => {
  it('should have <svg />', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find('svg')).toHaveLength(1)
  })
})
