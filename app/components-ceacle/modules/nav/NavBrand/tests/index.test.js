import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router'

import NavBrand from '../index'


const renderComponent = (props = {}) => shallow(
  <NavBrand {...props} />
)

describe('<NabBrand />', () => {
  it('renders with isSubApp false', () => {
    const context = {}
    const tree = renderer.create(
      <StaticRouter location="#" context={context}>
        <NavBrand isSubApp={false} />
      </StaticRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with isSubApp true', () => {
    const context = {}
    const tree = renderer.create(
      <StaticRouter location="#" context={context}>
        <NavBrand isSubApp />
      </StaticRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render a prop', () => {
    const id = 'testId'
    const renderedComponent = renderComponent({ id })
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not have children', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toEqual(false)
  })

  it('renders <LogoA /> when isSubApp is passed in', () => {
    const renderedComponent = renderComponent({ isSubApp: true })
    expect(renderedComponent.find('LogoA').first()).toHaveLength(1)
  })

  it('renders <LogoSymbolA /> when isSubApp is passed in', () => {
    const renderedComponent = renderComponent({ isSubApp: true })
    expect(renderedComponent.find('LogoSymbolA').first()).toHaveLength(1)
  })

  it('renders <Logo2 /> when isSubApp is passed in', () => {
    const renderedComponent = renderComponent({ isSubApp: true })
    expect(renderedComponent.find('Logo2').first()).toHaveLength(1)
  })

  it('renders <LogoLink /> when isSubApp is not passed in', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find('LogoLink').first()).toHaveLength(1)
  })

  it('renders <LogoSymbolLink /> when isSubApp is not passed in', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find('LogoSymbolLink').first()).toHaveLength(1)
  })
})
