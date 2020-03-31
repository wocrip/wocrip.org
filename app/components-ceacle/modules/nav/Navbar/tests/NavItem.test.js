import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { StaticRouter } from 'react-router'

import NavItem from '../NavItem'


const renderComponent = (props = {}) => shallow(
  <NavItem {...props} />
)

describe('<NavItem />', () => {
  it('renders Link when prop to is passed in', () => {
    const wrapper = renderComponent({ to: '#' }).dive()
    expect(wrapper.find('NavLink')).toHaveLength(1)
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders with reversed prop false', () => {
    const context = {}
    const tree = renderer.create(
      <StaticRouter location="#" context={context}>
        <NavItem to="#" reversed={false} />
      </StaticRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders with reversed prop true', () => {
    const context = {}
    const tree = renderer.create(
      <StaticRouter location="#" context={context}>
        <NavItem to="#" reversed />
      </StaticRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
