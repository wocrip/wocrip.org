import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { StaticRouter } from 'react-router'

import Logo2 from '../Logo2'


const renderComponent = (props = {}) => shallow(<Logo2 {...props} />).dive()

describe('<Logo2 />', () => {
  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders Logo2 when prop to is passed in', () => {
    const context = {}
    const tree = renderer.create(
      <StaticRouter location="#" context={context}>
        <Logo2 to="#" />
      </StaticRouter>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
