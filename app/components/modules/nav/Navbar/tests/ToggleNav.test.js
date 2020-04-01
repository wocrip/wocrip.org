import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import ToggleNav from '../ToggleNav'


const children = (<p>text</p>)
const renderComponent = (props = {}) => shallow(
  <ToggleNav {...props}>
    { children }
  </ToggleNav>
)

describe('<ToggleNav />', () => {
  it('renders a <div /> tag', () => {
    const renderedComponent = renderComponent().dive()
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should render', () => {
    const tree = renderer.create(
      <ToggleNav>
        {children}
      </ToggleNav>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should have <ToggleButton /> to handle click', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.state().navOpen).toEqual(false)
    renderedComponent.childAt(0).simulate('click')
    expect(renderedComponent.state().navOpen).toEqual(true)
  })

  it('should have <ToggleNavList /> to handle click', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.state().navOpen).toEqual(false)
    renderedComponent.childAt(1).simulate('click')
    expect(renderedComponent.state().navOpen).toEqual(true)
  })

  it('should have <Mask /> to handle click', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.state().navOpen).toEqual(false)
    renderedComponent.childAt(2).simulate('click')
    expect(renderedComponent.state().navOpen).toEqual(true)
  })
})
