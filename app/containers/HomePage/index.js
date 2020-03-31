import React from 'react'
import { Helmet } from 'react-helmet'
import { Flex, Box } from '@rebass/grid'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import Footer from 'components-ceacle/modules/Footer'

import EmailSubscriptionForm from 'components-shared/modules-form/EmailSubscriptionForm'
import Title from 'components-shared/basics/Title'
import Feature from 'components-shared/modules/Feature'
import HeaderHome from 'components-shared/templates/HeaderHome'
import Block from 'components-shared/basics/Block'
import Container from 'components-shared/basics/Container'

import messages from './messages'


const HomePage = ({
  intl: { formatMessage },
}) => (
  <Block>
    <Helmet>
      <title>{formatMessage(messages.metaTitle)}</title>
      <meta name="description" content={formatMessage(messages.metaDescription)} />
    </Helmet>

    <Container px={[30, 50, 80]}>
      <HeaderHome
        title={formatMessage(messages.headerTitle)}
        sub={formatMessage(messages.headerSubTitle)}
        width={[1]}
        textSize="h2"
        padding="50px 0"
        align="center"
        subBold
        subNoColor
        subMultiLine
      />
    </Container>

    <Container px={[30, 50, 80]}>
      <Flex
        flexWrap="wrap"
        px={[30, 50, 80]}
        pt={20}
        justifyContent="space-evenly"
      >
        <Box
          width={[1, 0.6, 0.5, 0.33]}
          px={[10, 10, 25]}
          mb={[50, 50, 20, 10]}
        >
          <Feature
            title={formatMessage(messages.Feature1Title)}
            text={formatMessage(messages.Feature1Text)}
            textSize={1.1}
            image="https://cdn1.ceacle.com/modo/images/illustrations/graphs@2x.png"
            imageWidth="100px"
            align="center"
          />
        </Box>
        <Box
          width={[1, 0.6, 0.5, 0.33]}
          px={[10, 10, 25]}
          mb={[50, 50, 20, 10]}
        >
          <Feature
            title={formatMessage(messages.Feature2Title)}
            text={formatMessage(messages.Feature2Text)}
            textSize={1.1}
            image="https://cdn1.ceacle.com/modo/images/illustrations/goup@2x.png"
            imageWidth="100px"
            align="center"
          />
        </Box>
        <Box
          width={[1, 0.6, 0.5, 0.33]}
          px={[10, 10, 25]}
          mb={[50, 50, 20, 10]}
        >
          <Feature
            title={formatMessage(messages.Feature3Title)}
            text={formatMessage(messages.Feature3Text)}
            textSize={1.1}
            image="https://cdn1.ceacle.com/modo/images/illustrations/users@2x.png"
            imageWidth="100px"
            align="center"
          />
        </Box>
      </Flex>
    </Container>

    <Container
      px={[30, 50, 80]}
      py={80}
    >
      <Flex
        flexWrap="wrap"
      >
        <Box
          width={[1, 0.8, 0.8, 0.5]}
          m="auto"
        >
          <Title
            sub={formatMessage(messages.onInviteOnlySub)}
            subColor="gray"
            subMultiLine
            align="center"
          >
            {formatMessage(messages.onInviteOnly)}
          </Title>

          <EmailSubscriptionForm
            application="modo"
            consentTexts={[
              {
                text: formatMessage(messages.receiveNews),
                key: 'receiveNews',
                optional: false,
              },
            ]}
            list="Modo"
          />
        </Box>
      </Flex>
    </Container>

    <Footer />
  </Block>
  )

HomePage.propTypes = {
  intl: PropTypes.object,
}

export default injectIntl(HomePage)
