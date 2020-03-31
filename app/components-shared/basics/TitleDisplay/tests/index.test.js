import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import TitleDisplay from '../index'


describe('<TitleDisplay />', () => {
  it('should render a prop', () => {
    const id = 'testId'
    const renderedComponent = shallow(
      <TitleDisplay id={id} />
    )
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should render its title with no color', () => {
    const children = 'Title'
    const renderedComponent = shallow(
      <TitleDisplay>{children}</TitleDisplay>
    )
    expect(renderedComponent.contains(children)).toBe(true)
  })

  it('should render a span and a h1 tag', () => {
    const renderedComponent = shallow(
      <TitleDisplay>
        <span>Text</span>
      </TitleDisplay>
    )
    expect(renderedComponent.find('h1')).toHaveLength(1)
    expect(renderedComponent.find('span')).toHaveLength(1)
  })

  it('renders when color and headings are passed in', () => {
    const theme = {
      displayHeadings: {
        h1: 2,
      },
      colors: {
        black: 'black',
      },
    }
    const tree = renderer.create(<TitleDisplay theme={theme} color="black" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'black')
    expect(tree).toHaveStyleRule('font-size', '2rem')
  })
})
