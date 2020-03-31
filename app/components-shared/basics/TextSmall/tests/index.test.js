import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Text from '../index'


const renderComponent = (props = {}) => shallow(<Text {...props} />).dive()
const color = 'blue'

describe('<Text />', () => {
  it('should render an <p> tag', () => {
    const renderedComponent = renderComponent({ color })
    expect(renderedComponent.type()).toEqual('p')
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ color, children: 'Just some test text.' })
    expect(renderedComponent.contains('Just some test text.')).toBe(true)
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ color, id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders color if color prop is passed in', () => {
    const tree = renderer.create(<Text color="blue" />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'blue')
  })

  it('renders without crashin if colors and size are passed in', () => {
    const theme = {
      settings: {
        textSize: 1,
      },
      colors: {
        black: 'black',
      },
    }
    const tree = renderer.create(<Text theme={theme} size={1} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'black')
  })
})
