import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Title from '../index'

describe('<Title />', () => {
  it('should render a prop', () => {
    const id = 'testId'
    const renderedComponent = shallow(
      <Title id={id} />
    )
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should render its title with no color', () => {
    const children = 'Title'
    const renderedComponent = shallow(
      <Title>{children}</Title>
    )
    expect(renderedComponent.contains(children)).toBe(true)
  })

  it('renders when color and headings are passed in', () => {
    const theme = {
      headings: {
        h1: 2,
      },
      colors: {
        black: 'black',
      },
    }
    const tree = renderer.create(<Title theme={theme} color="black" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'black')
    expect(tree).toHaveStyleRule('font-size', '2rem')
  })
})
