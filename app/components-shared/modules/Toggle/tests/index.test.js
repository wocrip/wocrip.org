import React from 'react'
import { shallow } from 'enzyme'
import { defineMessages } from 'react-intl'

import Toggle from '../index'


const renderComponent = (props = {}) => shallow(
  <Toggle {...props} />
)

describe('<Toggle />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent'
    const defaultDeMessage = 'someOtherContent'
    const messagesToDefine = {
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
      de: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultDeMessage,
      },
    }
    const messages = defineMessages(messagesToDefine)
    const renderedComponent = renderComponent({
      locale: 'en',
      values: ['en', 'de'],
      messages,
    })

    expect(renderedComponent.find('ToggleOption')).toHaveLength(2)
    expect(renderedComponent.find('option').length).toBe(0)
  })

  it('should not have ToggleOptions if props.values is not defined', () => {
    const renderedComponent = shallow(<Toggle />)
    expect(renderedComponent.contains(<option>--</option>)).toBe(true)
    expect(renderedComponent.find('option').length).toBe(1)
  })
})
