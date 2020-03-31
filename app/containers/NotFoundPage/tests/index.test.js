import React from 'react'
import { shallow } from 'enzyme'

import NotFound from '../index'


const renderComponent = (props = {}) => shallow(
  <NotFound {...props} />
)

describe('<NotFound />', () => {
  it('renders a <article /> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('article')
  })

  it('should render the Page Not Found text', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find('H1')).toHaveLength(1)
    expect(renderedComponent.find('FormattedMessage')).toHaveLength(1)
  })
})
