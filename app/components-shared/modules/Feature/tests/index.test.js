import React from 'react'
import { shallow } from 'enzyme'

import Feature from '../index'


const image = 'https://cdn1.ceacle.com/modo/images/documentation/database-architecture.jpg'
const right = true

const renderComponent = (props = {}) => shallow(
  <Feature {...props} />
)

describe('<Feature />', () => {
  it('renders only text when image prop is not passed in', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.dive().find('div')).toHaveLength(1)
    expect(renderedComponent.find('H5')).toHaveLength(1)
    expect(renderedComponent.find('Image')).toHaveLength(0)
    expect(renderedComponent.find('P')).toHaveLength(1)
  })

  it('renders some texts on the right and an image on the left when image is passed in', () => {
    const renderedComponent = renderComponent({ image })
    expect(renderedComponent.find('Box')).toHaveLength(3)
    expect(renderedComponent.find('Box').children()).toHaveLength(4)
    expect(renderedComponent.find('Box').at(0).childAt(0).find('Box').find('Image')).toHaveLength(1)
    expect(renderedComponent.find('Box').at(0).childAt(1).find('Box').find('H5')).toHaveLength(1)
    expect(renderedComponent.find('Box').at(0).childAt(1).find('Box').find('P')).toHaveLength(1)
  })

  it('renders some texts on the left and an image on the right when image and right props are passed in', () => {
    const renderedComponent = renderComponent({ image, right })
    expect(renderedComponent.find('Box')).toHaveLength(3)
    expect(renderedComponent.find('Box').children()).toHaveLength(4)
    expect(renderedComponent.find('Box').at(0).childAt(0).find('Box').find('H5')).toHaveLength(1)
    expect(renderedComponent.find('Box').at(0).childAt(0).find('Box').find('P')).toHaveLength(1)
    expect(renderedComponent.find('Box').at(0).childAt(1).find('Box').find('Image')).toHaveLength(1)
  })
})
