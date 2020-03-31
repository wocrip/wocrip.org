import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import NavServices from '../NavServices'


const renderComponent = (props = {}) => shallow(
  <NavServices {...props} />
)

describe('<NavServices />', () => {
  it('renders a <div /> tag', () => {
    const renderedComponent = renderComponent().dive()
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should render', () => {
    const tree = renderer.create(
      <NavServices />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should have <ServicesButton /> to handle click', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.state().navOpen).toEqual(false)
    renderedComponent.childAt(0).simulate('click')
    expect(renderedComponent.state().navOpen).toEqual(true)
    renderedComponent.childAt(0).simulate('click')
    expect(renderedComponent.state().navOpen).toEqual(false)
  })

  it('should have <NavServices /> to handle click', () => {
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
