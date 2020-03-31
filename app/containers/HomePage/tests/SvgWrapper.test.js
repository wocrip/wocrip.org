import React from 'react'
import { shallow, mount } from 'enzyme'

import SvgWrapper from '../SvgWrapper'


const children = (<p>text</p>)
const renderComponent = (props = {}) => shallow(
  <SvgWrapper {...props}>
    {children}
  </SvgWrapper>
)

describe('<SvgWrapper />', () => {
  it('should have <div />', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find('div')).toHaveLength(1)
  })

  it('renders all possibilities of reversed prop', () => {
    const renderedComponent = mount(
      <SvgWrapper reversed={false} />
    )

    expect(renderedComponent.prop('reversed')).toEqual(false)
    renderedComponent.setProps({ reversed: true })
    expect(renderedComponent.prop('reversed')).toEqual(true)
  })
})
