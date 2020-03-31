import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import Section from '../index'


const renderComponent = (props = {}) => shallow(<Section {...props} />)
const color = 'blue'

describe('<Section />', () => {
  it('should render a <Flex> tag', () => {
    const renderedComponent = renderComponent({ color }).dive()
    expect(renderedComponent.find('Flex')).toHaveLength(1)
  })

  it('renders children when passed in', () => {
    const renderedComponent = renderComponent({ children: 'test' })
    expect(renderedComponent.contains('test')).toBe(true)
  })

  it('renders with theme.colors passed in', () => {
    const theme = {
      colors: {
        black: 'black',
        white: 'white',
      },
    }
    const tree = renderer.create(<Section theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'white')
    expect(tree).toHaveStyleRule('background-color', 'black')
  })

  it('renders with theme.colors and noDark passed in', () => {
    const theme = {
      colors: {
        black: 'black',
        white: 'white',
      },
    }
    const tree = renderer.create(<Section theme={theme} noDark />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('color', 'black')
    expect(tree).toHaveStyleRule('background-color', 'white')
  })

  it('renders all possibilities of reversed prop', () => {
    const renderedComponent = mount(
      <Section reversed={false} />
    )

    expect(renderedComponent.prop('reversed')).toEqual(false)
    renderedComponent.setProps({ reversed: true })
    expect(renderedComponent.prop('reversed')).toEqual(true)
  })
})
