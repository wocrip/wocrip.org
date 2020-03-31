import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'

import App from '../index'


const renderedComponent = shallow(
  <App />
)

describe('<App />', () => {
  it('should render the Navbar', () => {
    expect(renderedComponent.find('Navbar')).toHaveLength(1)
  })

  it('should render some routes', () => {
    expect(renderedComponent.find(Route)).not.toHaveLength(0)
  })

  it('should render the footer', () => {
    expect(renderedComponent.find('Footer')).toHaveLength(1)
  })
})
