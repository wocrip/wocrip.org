import React from 'react'
import { Helmet } from 'react-helmet'
import { Flex, Box } from '@rebass/grid'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { colors } from 'theme'

import Footer from 'components/modules/Footer'

import EmailSubscriptionForm from 'components-shared/modules-form/EmailSubscriptionForm'
import Title from 'components-shared/basics/Title'
import Button from 'components-shared/basics/Button'
import Feature from 'components-shared/modules/Feature'
import Block from 'components-shared/basics/Block'
import Container from 'components-shared/basics/Container'

import messages from './messages'


const Header = styled.div`
  margin-top: -80px;
  background-color: ${colors.black};
  background-image: url(https://cdn1.wocrip.org/images/home/homeheader-min.jpg);
  background-position: center;
  background-size: cover;
  width: 100vw;
  min-height: 600px;
  padding: 150px 0 50px;
`
const headerTitleStyle = css`
  font-size: 2.5em;
  font-weight: normal;
  margin: 0 0 80px;
`
const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonRow = styled.div`
  margin: 5px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const ButtonCommonStyle = css`
  padding: 10px 20px;
  width: 200px;
  font-size: 1.2em;
`
const ButtonHelpLeftStyle = css`
  ${ButtonCommonStyle}

  margin: 5px 2px 0;
  background-color: ${colors.green};
`
const ButtonHelpRightStyle = css`
  ${ButtonCommonStyle}

  margin: 5px 2px 0 2px;
  background-color: ${rgba(colors.green, 0.7)};
`
const ButtonProduceLeftStyle = css`
  ${ButtonCommonStyle}

  margin: 5px 2px 0;
  background-color: ${colors.deepblue};
`
const ButtonProduceRightStyle = css`
  ${ButtonCommonStyle}

  margin: 5px 2px 0 2px;
  background-color: ${rgba(colors.deepblue, 0.7)};
`
const ButtonMissionLeftStyle = css`
  ${ButtonCommonStyle}

  margin: 5px 2px 0;
  background-color: ${colors.red};
`
const ButtonMissionRightStyle = css`
  ${ButtonCommonStyle}

  margin: 5px 2px 0 2px;
  background-color: ${rgba(colors.red, 0.7)};
`
const ButtonInitiativeLeftStyle = css`
  ${ButtonCommonStyle}

  margin: 5px 2px 0;
  background-color: ${colors.brown};
`
const ButtonInitiativeRightStyle = css`
  ${ButtonCommonStyle}

  margin: 5px 2px 0 2px;
  background-color: ${rgba(colors.brown, 0.7)};
`
const HomePage = ({
  intl: { formatMessage },
}) => (
  <Block>
    <Helmet>
      <title>{formatMessage(messages.metaTitle)}</title>
      <meta name="description" content={formatMessage(messages.metaDescription)} />
    </Helmet>

    <Header>
      <Container px={[30, 50, 80]}>
        <Title
          color="white"
          align="center"
          customStyle={headerTitleStyle}
        >
          {`Collective mobilization during a crisis`}
        </Title>

        <ButtonBlock>
          <ButtonRow>
            <Button
              customStyle={ButtonHelpLeftStyle}
            >
              Can help
            </Button>

            <Button
              customStyle={ButtonHelpRightStyle}
            >
              Need help
            </Button>
          </ButtonRow>

          <ButtonRow>
            <Button
              customStyle={ButtonProduceLeftStyle}
            >
              Can produce
            </Button>

            <Button
              customStyle={ButtonProduceRightStyle}
            >
              Need product
            </Button>
          </ButtonRow>

          <ButtonRow>
            <Button
              customStyle={ButtonMissionLeftStyle}
            >
              Find a mission
            </Button>

            <Button
              customStyle={ButtonMissionRightStyle}
            >
              Start a mission
            </Button>
          </ButtonRow>

          <ButtonRow>
            <Button
              customStyle={ButtonInitiativeLeftStyle}
            >
              Find an initiative
            </Button>

            <Button
              customStyle={ButtonInitiativeRightStyle}
            >
              Start an initiative
            </Button>
          </ButtonRow>
        </ButtonBlock>
      </Container>
    </Header>

    {/* <Container px={[30, 50, 80]}>
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
    </Container> */}

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
            align="center"
          >
            {/* {formatMessage(messages.onInviteOnly)} */}
            Stay in touch
          </Title>

          <EmailSubscriptionForm
            application="wocrip"
            consentTexts={[
              {
                text: formatMessage(messages.receiveNews),
                key: 'receiveNews',
                optional: false,
              },
            ]}
            list="general"
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
