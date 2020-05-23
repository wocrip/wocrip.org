import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { useMutation } from '@apollo/react-hooks'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { colors } from 'theme'
import { HELP_OFFER } from 'services/help/mutations'
import { authenticatedSelector } from 'services/user/selectors'
import { lang } from 'services/intl/getLocale'

import Footer from 'components/modules/Footer'
import Title from 'components-shared/basics/Title'
import Text from 'components-shared/basics/Text'
import Button from 'components-shared/basics/Button'
import Input from 'components-shared/basics/Input'
import Block from 'components-shared/basics/Block'
import Container from 'components-shared/basics/Container'
import ButtonRadio from 'components-shared/modules-form/ButtonRadio'
import GuestForm from 'components/modules-form/GuestForm'

import messages from './messages'


const Form = styled.form`
`
const KindsOfHelp = styled.div`
`
const ChilAgeBlock = styled.div`
  margin-left: 27px;
`
const wrapperstyle = css`
  min-height: 30px;
  margin: 0;
`
const OfferPage = ({
  authenticated,
  intl: { formatMessage, locale },
  reversed,
}) => {
  const [errors, setErrors] = useState(null)
  // const [helpKind, setHelpKind] = useState('')
  const [errandsForHealthWorkers, setErrandsForHealthWorkers] = useState(false)
  const [errandsForFragilePeople, setErrandsForFragilePeople] = useState(false)
  const [babysitting, setBabysitting] = useState(false)
  const [lessThan3, setLessThan3] = useState(false)
  const [from3to5, setFrom3to5] = useState(false)
  const [from5to10, setFrom5to10] = useState(false)
  const [moreThan10, setMoreThan10] = useState(false)

  const onChange = () => {}
  const onInput = () => {}
  const onCompleted = () => {}
  // const onFocus = () => {}

  const [sendHelpOffer, {
  }] = useMutation(HELP_OFFER, { onCompleted })

  return (
    <Block>
      <Helmet>
        <title>{formatMessage(messages.metaTitle)}</title>
        <meta name="description" content={formatMessage(messages.metaDescription)} />
      </Helmet>

      <Container px={[30, 50, 80]}>
        <Title>
          Offer help
        </Title>

        <Form>
          {!authenticated &&
            <GuestForm />
          }

          <KindsOfHelp>
            <Title
              size="h4"
            >
              What kind of help can I offer?
            </Title>

            <ButtonRadio
              allowUnselect
              getButtonRadioValue={(value) =>
                setErrandsForHealthWorkers(value === 0)}
              options={[
                <div
                >
                  Buy and deliver errands for health workers
                </div>,
              ]}
            />

            <ButtonRadio
              allowUnselect
              getButtonRadioValue={(value) =>
                setErrandsForFragilePeople(value === 0)}
              options={[
                <div
                >
                  Buy and deliver errands for health workers
                </div>,
              ]}
            />

            <ButtonRadio
              allowUnselect
              getButtonRadioValue={(value) =>
                setBabysitting(value === 0)}
              options={[
                <div
                >
                  Babysitting
                </div>,
              ]}
            />

            {babysitting &&
              <ChilAgeBlock>
                <ButtonRadio
                  allowUnselect
                  getButtonRadioValue={(value) =>
                    setLessThan3(value === 0)}
                  wrapperstyle={wrapperstyle}
                  initActiveIndex={lessThan3 ? 0 : -1}
                  options={[
                    <div>
                      Less than 3 years old
                    </div>,
                  ]}
                />

                <ButtonRadio
                  allowUnselect
                  getButtonRadioValue={(value) =>
                    setFrom3to5(value === 0)}
                  wrapperstyle={wrapperstyle}
                  initActiveIndex={from3to5 ? 0 : -1}
                  options={[
                    <div>
                      3 to 5 years old
                    </div>,
                  ]}
                />

                <ButtonRadio
                  allowUnselect
                  getButtonRadioValue={(value) =>
                    setFrom5to10(value === 0)}
                  wrapperstyle={wrapperstyle}
                  initActiveIndex={from5to10 ? 0 : -1}
                  options={[
                    <div>
                      5 to 10 years old
                    </div>,
                  ]}
                />

                <ButtonRadio
                  allowUnselect
                  getButtonRadioValue={(value) =>
                    setMoreThan10(value === 0)}
                  wrapperstyle={wrapperstyle}
                  initActiveIndex={moreThan10 ? 0 : -1}
                  options={[
                    <div>
                      More than 10 years old
                    </div>,
                  ]}
                />
              </ChilAgeBlock>
            }
          </KindsOfHelp>





          <ButtonRadio
            allowUnselect
            getButtonRadioValue={(value) => {}}
            wrapperstyle={wrapperstyle}
            initActiveIndex={moreThan10 ? 0 : -1}
            options={[
              <div>
                I consent
              </div>,
            ]}
          />

          <Button
            handleRoute
          >
            {/* {formatMessage(messages.askhelp)} */}
            Offer my Help
          </Button>

        </Form>
      </Container>


      <Footer />
    </Block>
  )
}

OfferPage.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  intl: PropTypes.object,
  reversed: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  authenticated: authenticatedSelector(state),
})

export default compose(
  connect(mapStateToProps),
  injectIntl,
)(OfferPage)
