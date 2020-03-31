import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { rgba } from 'polished'

import { setModalIsDisplayed } from 'services/modal/actions'
import {
  modalIsAlertSelector,
  modalPreventCloseSelector,
  modalChildrenSelector,
  modalContentPropsSelector,
} from 'services/modal/selectors'
import { colors, settings } from 'theme'

import Mask from './Mask'


const { radius, zindex: { modal } } = settings
const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ isAlert }) => isAlert ? modal.alert : modal.content};
  transition: all 0.15s ease-out;
  overflow-y: auto;
  grid-template-areas: ". a a ." ". a a .";
  grid-template-columns: repeat(4, 1fr);
`
const Content = styled.div`
  padding: 0;
  display: flex;
  justify-content: flex-end;
  z-index: ${({ isAlert }) => isAlert ? (modal.alert + 1) : (modal.content + 1)};
  border-radius: ${radius}px;
  box-shadow: 0 0 0 4px ${rgba(colors.gray, 0.15)};
  transition: all 0.15s ease-out;
  background: white;
  grid-area: a;
  align-self: center;
  justify-self: center;
  margin: 20px 0;
`
class Modal extends Component {
  constructor(props) {
    super(props)

    this.onClose = this.onClose.bind(this)
    this.closeByEscape = this.closeByEscape.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape, true)
  }

  onClose() {
    const {
      modalIsDisplayedDispatch,
      preventClose,
    } = this.props
    if (preventClose) return

    modalIsDisplayedDispatch(false)
    window.removeEventListener('keydown', this.closeByEscape, true)
  }

  closeByEscape(event) {
    if ((event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27)) {
      this.onClose()
    }
  }

  render() {
    const {
      children,
      contentProps,
      isAlert,
    } = this.props
    const ModalContent = children

    return (
      <Wrapper
        isAlert={isAlert}
      >
        <Content
          isAlert={isAlert}
          {...contentProps}
        >
          <ModalContent onClose={this.onClose} />
        </Content>

        <Mask
          onClick={this.onClose}
          isAlert={isAlert}
        />
      </Wrapper>
    )
  }
}

Modal.propTypes = {
  isAlert: PropTypes.bool,
  children: PropTypes.any.isRequired,
  contentProps: PropTypes.object,
  modalIsDisplayedDispatch: PropTypes.func.isRequired,
  preventClose: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAlert: modalIsAlertSelector(state),
  preventClose: modalPreventCloseSelector(state),
  children: modalChildrenSelector(state),
  contentProps: modalContentPropsSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  modalIsDisplayedDispatch: (value) => dispatch(setModalIsDisplayed(value)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Modal)
