import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { injectIntl } from 'react-intl'

import { app } from 'theme'
import { isDev } from 'utils/helpers'
import { lang } from 'services/intl/getLocale'

import A from 'components-shared/basics/A'
import Container from 'components-shared/basics/Container'
import Text from 'components-shared/basics/Text'
import LocaleToggle from 'components-shared/modules/LocaleToggle'
import IconBehance from 'components-shared/icons/IconBehance'
import IconFacebook from 'components-shared/icons/IconFacebook'
import IconInstagram from 'components-shared/icons/IconInstagram'
import IconTwitter from 'components-shared/icons/IconTwitter'
import IconYoutube from 'components-shared/icons/IconYoutube'
import WocripLogo from 'components/logos/wocrip'

import messages from './messages'


const year = new Date().getFullYear()
const prelink = isDev ? 'http://localhost:3031' : 'https://wocrip.org'

const Wrapper = styled.footer`
  display: flex;
  margin: 50px 0 0;
  padding: 5em 0 4em;
  font-size: 0.7em;
`
const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
const Logo = styled(A)`
  font-weight: 700;
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-size: 2em;
`
const LogoStyle = css`
  height: 20px;
  margin-bottom: -5px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 1.1em;
    margin: 0;
  }
`
const IconBox = styled.div`
  margin-left: -5px;

  a {
    padding: 5px;
  }
`
const SubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Footer = ({
  intl: { formatMessage, locale },
}) => (
  <Wrapper>
    <Container
      px={20}
    >
      <SubContainer>
        <Columns>
          <Column>
            <Logo
              href={`${prelink}${lang(locale)}`}
              noVisited
              color="black"
            >
              <WocripLogo customStyle={LogoStyle} />
            </Logo>
            <Text
              size="1"
            >
              {`© ${year}`}
            </Text>
          </Column>

          <Column>
            <Text
              size="1.5"
              margin="0 0 6px 0"
              fontWeight="600"
            >
              Company
            </Text>
            <A
              to={app.subApp ? '' : `${lang(locale)}/about`}
              href={`${prelink}${lang(locale)}/about`}
              size="1.2"
              color="black"
              margin="5px 0"
              noVisited
            >
              {formatMessage(messages.about)}
            </A>
            <A
              to={app.subApp ? '' : `${lang(locale)}/legal/terms-of-services`}
              href={`${prelink}${lang(locale)}/legal/terms-of-services`}
              size="1.2"
              color="black"
              margin="5px 0"
              noVisited
            >
              {formatMessage(messages.termsOfService)}
            </A>
            <A
              to={app.subApp ? '' : `${lang(locale)}/legal/privacy-policy`}
              href={`${prelink}${lang(locale)}/legal/privacy-policy`}
              size="1.2"
              color="black"
              margin="5px 0"
              noVisited
            >
              {formatMessage(messages.privacyPolicy)}
            </A>
          </Column>

          <Column>
            <Text
              size="1.5"
              margin="0 0 6px 0"
              fontWeight="600"
            >
              Information
            </Text>
            <A
              href="mailto:support@ceacle.com"
              size="1.2"
              color="black"
              margin="5px 0"
              noVisited
            >
              {formatMessage(messages.help)}
            </A>
            <A
              href="mailto:contact@ceacle.com"
              size="1.2"
              color="black"
              margin="5px 0"
              noVisited
            >
              {formatMessage(messages.contact)}
            </A>
          </Column>

          <Column>
            <Text
              size="1.5"
              margin="0 0 6px 0"
              fontWeight="600"
            >
              {formatMessage(messages.followUs)}
            </Text>

            <IconBox>
              <A
                href="https://www.youtube.com/c/ceacle"
                target="_blank"
                size="1.2"
                color="black"
                margin="5px 0"
                noVisited
              >
                <IconYoutube size={16} />
              </A>
              <A
                href="https://www.behance.net/ceacle"
                target="_blank"
                size="1.2"
                color="black"
                margin="5px 0"
                noVisited
              >
                <IconBehance size={16} />
              </A>
              <A
                href="https://www.pinterest.com/onceacle/"
                target="_blank"
                size="1.2"
                color="black"
                margin="5px 0"
                noVisited
              >
                <IconInstagram size={16} />
              </A>
              <A
                href="https://twitter.com/onCeacle"
                target="_blank"
                size="1.2"
                color="black"
                margin="5px 0"
                noVisited
              >
                <IconTwitter size={16} />
              </A>
              <A
                href="https://www.facebook.com/ceacle"
                target="_blank"
                size="1.2"
                color="black"
                margin="5px 0"
                noVisited
              >
                <IconFacebook size={16} />
              </A>
            </IconBox>
          </Column>
        </Columns>

        <div>
          <LocaleToggle />
        </div>
      </SubContainer>
    </Container>
  </Wrapper>
)

Footer.propTypes = {
  intl: PropTypes.any,
}

export default injectIntl(Footer)
