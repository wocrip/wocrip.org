import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router'

import LogoSymbolLink from '../LogoSymbolLink'


const renderComponent = (props = {}) => shallow(<LogoSymbolLink {...props} />).dive()

describe('<LogoSymbolLink />', () => {
  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders LogoSymbolLink when prop to is passed in', () => {
    const context = {}
    const tree = renderer.create(
      <StaticRouter location="#" context={context}>
        <LogoSymbolLink to="#" />
      </StaticRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders all combinations of subApp and reversed props', () => {
    const component = (props = {}) => shallow(<LogoSymbolLink {...props} />)
    const renderedComponent = component({ subApp: false, reversed: false })

    expect(renderedComponent.prop('subApp')).toEqual(false)
    expect(renderedComponent.prop('reversed')).toEqual(false)

    renderedComponent.setProps({ subApp: true, reversed: true })
    expect(renderedComponent.prop('subApp')).toEqual(true)
    expect(renderedComponent.prop('reversed')).toEqual(true)

    renderedComponent.setProps({ subApp: true, reversed: false })
    expect(renderedComponent.prop('subApp')).toEqual(true)
    expect(renderedComponent.prop('reversed')).toEqual(false)
  })
})
