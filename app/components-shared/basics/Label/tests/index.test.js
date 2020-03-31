import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Label from '../index'


const renderComponent = (props = {}) => shallow(<Label {...props} />).dive()
const color = 'blue'

describe('<Label />', () => {
  it('should render an <span> tag', () => {
    const renderedComponent = renderComponent({ color })
    expect(renderedComponent.type()).toEqual('span')
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'Just some test text.' })
    expect(renderedComponent.contains('Just some test text.')).toBe(true)
  })

  it('renders props when passed in', () => {
    const renderedComponent = renderComponent({ color, id: 'testId' })
    expect(renderedComponent.find({ id: 'testId' })).toHaveLength(1)
  })

  it('renders color if color prop is passed in', () => {
    const tree = renderer.create(<Label color="blue" />).toJSON()
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
    const tree = renderer.create(<Label theme={theme} size={1} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'black')
  })
})
