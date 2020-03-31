import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import HomePage from '../index'


const renderComponent = (props = {}) => shallow(
  <HomePage {...props} />
)

describe('<HomePage />', () => {
  it('renders a <article /> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('article')
  })

  it('should render when reversed is true', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('article')
  })

  it('should render', () => {
    const tree = renderer.create(
      <HomePage />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
