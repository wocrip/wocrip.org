import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../index'

const children = (<p>text</p>)
const renderComponent = (props = {}) => shallow(
  <Footer {...props}>
    {children}
  </Footer>
)

describe('<Footer />', () => {
  it('should have children', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.contains(children)).toEqual(true)
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })
})
