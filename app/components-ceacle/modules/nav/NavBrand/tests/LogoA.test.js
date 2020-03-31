import React from 'react'
import { shallow, mount } from 'enzyme'

import LogoA from '../LogoA'


const href = 'http://ceacle.com/'
const children = (<svg><path></path></svg>)
const renderComponent = (props = {}) => shallow(
  <LogoA href={href} {...props}>
    {children}
  </LogoA>
)

describe('<LogoA />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.type()).toEqual('a')
  })

  it('should have an href attribute', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.prop('href')).toEqual(href)
  })

  it('should have children', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.contains(children)).toEqual(true)
  })

  it('should have a className attribute', () => {
    const className = 'test'
    const renderedComponent = renderComponent({ className })
    expect(renderedComponent.find('a').hasClass(className)).toEqual(true)
  })

  it('should adopt a target attribute', () => {
    const target = '_blank'
    const renderedComponent = renderComponent({ target })
    expect(renderedComponent.prop('target')).toEqual(target)
  })

  it('should adopt a type attribute', () => {
    const type = 'text/html'
    const renderedComponent = renderComponent({ type })
    expect(renderedComponent.prop('type')).toEqual(type)
  })

  it('renders without crashing when color are passed in', () => {
    const theme = {
      colors: {
        brand: 'black',
        white: 'white',
      },
    }
    const renderedComponent = mount(
      <LogoA theme={theme} />
    )
    expect(renderedComponent.prop('theme')).toEqual(theme)
  })

  it('renders all combinations of subApp and reversed props', () => {
    const renderedComponent = mount(
      <LogoA reversed={false} subApp={false} />
    )
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
