import React from 'react'
import renderer from 'react-test-renderer'

import GridServices from '../index'


const children = (<p>text</p>)

describe('<GridServices />', () => {
  it('should render', () => {
    const tree = renderer.create(
      <GridServices>
        {children}
      </GridServices>
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
