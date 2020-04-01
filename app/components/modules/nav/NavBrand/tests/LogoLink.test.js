import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router'

import LogoLink from '../LogoLink'


const context = {}
const renderComponent = (props = {}) => shallow(<LogoLink {...props} />).dive()

describe('<LogoLink />', () => {
  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders LogoLink when prop to is passed in', () => {
    const tree = renderer.create(
      <StaticRouter location="#" context={context}>
        <LogoLink to="#" />
      </StaticRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders all combinations of subApp and reversed props', () => {
    const component = (props = {}) => shallow(<LogoLink {...props} />)
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
