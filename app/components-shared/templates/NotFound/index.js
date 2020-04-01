import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'
import { injectIntl } from 'react-intl'

import { lang } from 'services/intl/getLocale'

import A from 'components-shared/basics/A'
import TitleDisplay from 'components-shared/basics/TitleDisplay'
import Section from 'components-shared/basics/Section'
import Text from 'components-shared/basics/Text'

import messages from './messages'


const NotFound = ({
  reversed,
  align,
  small,
  textColor,
  title,
  size,
  intl: { formatMessage, locale },
}) => (
  <Section
    flexWrap="wrap"
    reversed={reversed}
    py={200}
  >
    <Box width={1} px={[30, 50, 80]}>
      <TitleDisplay
        size={size}
        align={align}
        small={small || formatMessage(messages.small)}
        color={textColor && textColor}
      >
        {title || formatMessage(messages.header)}
      </TitleDisplay>
    </Box>

    <Box width={1} px={[30, 50, 80]} mt={-30} mb={50}>
      <Text
        align={align && align}
      >
        <A to={`${lang(locale)}/`}>
          {formatMessage(messages.backHome)}
        </A>
      </Text>
    </Box>
  </Section>
)

NotFound.propTypes = {
  align: PropTypes.string,
  intl: PropTypes.object,
  reversed: PropTypes.bool,
  small: PropTypes.string,
  size: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
}

NotFound.defaultProps = {
  size: 'h1',
  align: 'center',
}

export default injectIntl(NotFound)
