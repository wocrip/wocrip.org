import React from 'react'
import { render } from 'enzyme'

import LoadingIndicator from '../index'

describe('<LoadingIndicator />', () => {
  it('should render 1 circle', () => {
    const renderedComponent = render(
      <LoadingIndicator />
    )
    expect(renderedComponent.find('circle').length).toBe(1)
  })
})
