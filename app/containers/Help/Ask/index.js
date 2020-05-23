import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { useMutation } from '@apollo/react-hooks'

import { colors } from 'theme'
import { HELP_OFFER } from 'services/help/mutations'
import { lang } from 'services/intl/getLocale'

import Footer from 'components/modules/Footer'
import Title from 'components-shared/basics/Title'
import Text from 'components-shared/basics/Text'
import Button from 'components-shared/basics/Button'
import Input from 'components-shared/basics/Input'
import Block from 'components-shared/basics/Block'
import Container from 'components-shared/basics/Container'
import ButtonRadio from 'components-shared/modules-form/ButtonRadio'

import messages from './messages'


const Form = styled.form`
`
const KindsOfHelp = styled.div`
`
const ChilAgeBlock = styled.div`
  margin-left: 30px;
  margin-top: -20px;
`
const wrapperstyle = css`
  min-height: 30px;
  margin: 0;
`
const OfferPage = ({
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

  const getButtonRadioValue = (kind, value) => {
    switch (kind) {
      case 'errandsForHealthWorkers':
        setErrandsForHealthWorkers(value === 0)
        break;

      case 'errandsForFragilePeople':
        setErrandsForFragilePeople(value === 0)
        break;

      case 'babysitting':
        setBabysitting(value === 0)
        break;

      case 'lessThan3':
        setLessThan3(value === 0)
        break;

      case 'from3to5':
        setFrom3to5(value === 0)
        break;

      case 'from5to10':
        setFrom5to10(value === 0)
        break;

      case 'moreThan10':
        setMoreThan10(value === 0)
        break;

      default:
        break;
    }
  }

  const [sendHelpOffer, {
  }] = useMutation(HELP_OFFER, { onCompleted })

  return (
    <Block>
      <Helmet>
        <title>{formatMessage(messages.metaTitle)}</title>
        <meta name="description" content={formatMessage(messages.metaDescription)} />
      </Helmet>
  {/*
      If not logged in
        Create account?
      What kind of help
      Location
  */}
      <Container px={[30, 50, 80]}>
        <Title>
          Offer help
        </Title>

        <Form>
          { errors && errors.name &&
            <ErrorContainer>
              <ErrorBlock>
                {errors.name}
              </ErrorBlock>
            </ErrorContainer>
          }

          <Input
            onChange={onChange}
            // onKeyDown={onKeyDownFieldName}
            // placeholder={formatMessage(messages.untitledBrief)}
            // value={name}
            inputType="text"
            status={errors && errors.name && 'error'}
            reversed={reversed}
            autoComplete="off"
            // onFocus={onFocus}
            // onBlur={onBlur}
            onInput={onInput}
            // customStyle={nameStyle}
            invisibleInput
            autoHeight
            rows={1}
          />

          <KindsOfHelp>
            <Title
              size="h3"
            >
              Offer help
            </Title>

            <ButtonRadio
              allowUnselect
              getButtonRadioValue={(value) =>
                getButtonRadioValue('errandsForHealthWorkers', value)}
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
                getButtonRadioValue('errandsForFragilePeople', value)}
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
                getButtonRadioValue('babysitting', value)}
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
                    getButtonRadioValue('lessThan3', value)}
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
                    getButtonRadioValue('from3to5', value)}
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
                    getButtonRadioValue('from5to10', value)}
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
                    getButtonRadioValue('moreThan10', value)}
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
  intl: PropTypes.object,
  reversed: PropTypes.bool,
}

export default injectIntl(OfferPage)
