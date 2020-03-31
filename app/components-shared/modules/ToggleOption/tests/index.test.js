import React from 'react'
import { mount } from 'enzyme'
import { IntlProvider, defineMessages } from 'react-intl'
import { mountWithIntl } from 'utils/intlEnzymeTestHelper'

import ToggleOption from '../index'

describe('<ToggleOption />', () => {
  it('should render default language messages', () => {
    const defaultEnMessage = 'someContent'
    const message = defineMessages({
      enMessage: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
    })
    const renderedComponent = mountWithIntl(
      <ToggleOption value="en" message={message.enMessage} />
    )

    expect(renderedComponent.find('ToggleOption')).toHaveLength(1)
    expect(renderedComponent.text()).toBe(defaultEnMessage)
  })

  it('should display `value`(two letter language code) when `message` is absent', () => {
    const renderedComponent = mount(
      <IntlProvider locale="de">
        <ToggleOption value="de" />
      </IntlProvider>
    )
    expect(renderedComponent.text()).toBe('de')
  })
})
