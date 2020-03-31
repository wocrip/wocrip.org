import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose } from 'redux'
import isEmpty from 'lodash/isEmpty'
import { injectIntl } from 'react-intl'

import { styles } from 'theme'
import { getFileExtension, getBytes } from 'utils/helpers'
import ImageTools from 'services/file/image/ImageTools'

import HelpBlock from 'components-shared/basics/HelpBlock'
import Img from 'components-shared/basics/Image'
import TextSmall from 'components-shared/basics/TextSmall'
import ProgressBar from 'components-shared/modules/ProgressBar'
import ButtonLoader from 'components-shared/modules-form/ButtonLoader'

import messages from './messages'


const Preview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 8px;

  img {
    height: auto;
    width: 100%;
    border-radius: 8px;
  }
`
const CloseButton = styled(TextSmall)`
  ${styles.button.file.remove}
`
const Bottom = styled.div`
  display: flex;

  ${styles.button.file.bottom}
`
const FileName = styled.div`
  ${styles.button.file.name}
`
const Zone = styled.div`
  ${styles.button.zone}
`
const Center = styled.div`
  ${styles.button.zoneCenter}
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ${styles.input.wrapper}
`
const HiddenInput = styled.input.attrs(() => ({
  type: 'file',
}))`
  ${styles.input.hidden}
`

class InputFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      dropzoneStatus: '',
      fileReady: false,
      isUploading: false,
      errors: {},
      progress: 0,
      success: '',
      storedUrls: [],
    }

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.hiddenInput = React.createRef()

    this.treatFile = this.treatFile.bind(this)
    this.preventEvent = this.preventEvent.bind(this)
    this.handleOnDrop = this.handleOnDrop.bind(this)
    this.handleOnDragOver = this.handleOnDragOver.bind(this)
    this.handleOnDragLeave = this.handleOnDragLeave.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.upload = this.upload.bind(this)
  }

  componentDidMount() {
    const { simulation, identifier, name } = this.props

    if (!isEmpty(simulation)
      && identifier === simulation.identifier
    ) {
      const { action, fieldName, dataTransfer } = simulation

      if (action === 'ondrop'
        && name === fieldName
      ) {
        const event = {
          dataTransfer,
          preventDefault: () => { },
          stopPropagation: () => { },
        }
        this.handleOnDrop(event)
      }
    }
  }

  onClick(event) {
    event.preventDefault()
    const { clicked } = this.state
    this.setState({ clicked: !clicked })
    this.hiddenInput.current.click()
  }

  onChange() {
    const {
      multiple,
    } = this.props
    const { files } = this.hiddenInput.current

    Object.keys(files).forEach((key, index) => {
      const file = files[key]
      if (!multiple && index > 0) return
      this.treatFile(file)
    })
  }

  handleOnDrop(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.preventEvent()) return

    const { multiple } = this.props
    const { dropzoneStatus } = this.state
    const { files } = event.dataTransfer

    if (!(dropzoneStatus === 'drop')) {
      this.setState({ dropzoneStatus: 'drop' })
    }

    Object.keys(files).forEach((key, index) => {
      const file = files[key]
      if (!multiple && index > 0) return
      this.treatFile(file)
    })
  }

  handleOnDragOver(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.preventEvent()) return
    const { dropzoneStatus } = this.state
    if (!(dropzoneStatus === 'dragOver')) {
      this.setState({ dropzoneStatus: 'dragOver' })
    }
  }

  handleOnDragLeave(event) {
    event.preventDefault()
    event.stopPropagation()
    if (this.preventEvent()) return
    const { dropzoneStatus } = this.state
    if (!(dropzoneStatus === 'dragLeave')) {
      this.setState({ dropzoneStatus: 'dragLeave' })
    }
  }

  handleClose() {
    const { clearFile } = this.props
    this.setState({ fileReady: false })
    if (clearFile) clearFile()
  }

  treatFile(file) {
    const {
      crop,
      getImageDimension,
      image,
      instantUpload,
      intl,
      minimumImageDimension,
      resize,
    } = this.props
    const { name } = file

    if (!this.isValid(name)) return
    if (!file && !instantUpload) return

    const resizeImage = () => resize.forEach((size, index) => {
      const options = {
        crop,
        height: size.height,
        width: size.width,
        against: size.against,
      }

      ImageTools.resize(file, options, (blob, didItResize, imageSize) => {
        if (didItResize) {
          const newSize = { ...size, ...imageSize }
          delete newSize.against
          const dimensions = `${imageSize.width}x${imageSize.height}`
          this.upload(file, blob, dimensions, index, newSize)
        } else {
          const error = { file: intl.formatMessage(messages.resizeError) }
          this.setState({ errors: error, isUploading: false })
        }
      })
    })

    const checkImageSize = () => {
      const img = new Image()
      img.src = URL.createObjectURL(file)
      img.onload = () => {
        if (minimumImageDimension) {
          const { width, height } = minimumImageDimension
          const isWidthEnough = img.width >= width
          const isHeightEnough = img.height >= height

          if (!isHeightEnough || !isWidthEnough) {
            const error = {
              file: intl.formatMessage(messages.imageTooLittleError),
            }
            this.setState({ errors: error, isUploading: false })
          } else if (!isEmpty(resize)) resizeImage()
          else this.upload(file)
        }

        if (getImageDimension) {
          getImageDimension({ width: img.width, height: img.height })
        }
      }
    }

    // 0. Verify file and instantUpload
    // 1. If image
    //    a. If minimun size
    //      I. Check size => checkImageSize()
    //         if resize => resize() => upload(file)
    //         else => upload(file)
    //      II. Size error
    //    b. Else if resize => resize()
    //    c. Else => upload(file)
    // 2. If not image => upload(file)
    if (image) {
      if (minimumImageDimension || getImageDimension) checkImageSize()
      else if (!isEmpty(resize)) resizeImage()
      else this.upload(file)
    } else this.upload(file)
  }

  preventEvent() {
    const { dropzone } = this.props
    const { isUploading } = this.state
    return !dropzone || isUploading
  }

  upload(file, blob, dimensions, index, size) {
    const {
      image,
      intl,
      mutation,
      mutationName,
      onChange,
      resize,
      showFile,
      showPreview,
      update,
      updateName,
    } = this.props
    const fileToSend = blob || file
    const { name, type } = file
    const variables = {
      fileType: type,
      fileName: name,
      dimensions,
    }

    this.setState({ errors: {}, isUploading: true })

    mutation({
      variables,
    }).then(({ data }) => {
      const { errors, signedRequest, url } = data[mutationName]

      if (isEmpty(errors)) {
        const xhr = new XMLHttpRequest()
        // xhr.open('POST', signedRequest)
        xhr.open('PUT', signedRequest)

        // const formData = new FormData('files[0]', fileToSend)

        xhr.upload.onprogress = (event) => {
          if (event.lengthComputable) {
            const percent = Math.round((event.loaded / event.total) * 100)
            this.setState({ progress: percent })
          }
        }

        if ((image && showPreview && size && size.preview)
          || (image && showPreview && !size)
        ) {
          this.setState({ previewUrl: URL.createObjectURL(fileToSend) })
        }

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              if (onChange) onChange({ url, dimensions: size, size: file.size })

              this.setState({
                fileName: file.name,
                fileSize: file.size,
                fileReady: showFile || false,
              })

              // If update mutation is passed to this component
              if (update) {
                const updateWithUrl = (urls) => {
                  update(urls).then(({ data: udpateData }) => {
                    const response = udpateData[updateName]
                    if (response && isEmpty(response.errors)) {
                      // const success = 'File uploaded'
                      // this.setState({ success, isUploading: false })
                    } else {
                      this.setState({ errors, isUploading: false, progress: 0 })
                    }
                  },
                  (error) => this.setState({ errors: error, isUploading: false }))
                }

                if (!isEmpty(resize)) {
                  const isLastResize = (resize.length - 1) === index
                  const moreThanOne = resize.length > 1

                  if (moreThanOne) {
                    const { storedUrls } = this.state
                    if (isLastResize) {
                      // Push url in array: { size, url } => []
                      // Update with all urls: [{ size, url }]
                      storedUrls.push({ url, size })
                      updateWithUrl(storedUrls)
                    } else {
                      // Push url in array: { size, url } => []
                      this.setState({
                        storedUrls: [...storedUrls, { url, size }],
                      })
                    }
                  } else {
                    // Update with one url: url
                    updateWithUrl(url)
                  }
                } else {
                  // Update with one url: url
                  updateWithUrl(url)
                }
              } else {
                this.setState({ isUploading: false, progress: 0 })
              }
            } else {
              const error = { file: intl.formatMessage(messages.uploadError) }
              this.setState({ errors: error, isUploading: false, progress: 0 })
            }
          }
        }

        xhr.onerror = () => {
          this.setState({
            errors: { file: intl.formatMessage(messages.uploadError) },
            isUploading: false,
            progress: 0,
          })
        }

        // xhr.setRequestHeader('Cache-Control', 'max-age=776000')
        xhr.send(fileToSend)
        // xhr.send(formData)
      } else {
        this.setState({ errors, isUploading: false, progress: 0 })
      }
    },
    (err) => this.setState({ errors: err, isUploading: false, progress: 0 }))
  }

  isValid(filename) {
    const { accept, intl } = this.props
    const fileExtension = getFileExtension(filename.toLowerCase())
    const isValid = accept.includes(fileExtension)

    if (!isValid) {
      let extensionText = ''

      accept.forEach((element, index) => {
        const onlyOne = accept.length === 1

        if (onlyOne) {
          extensionText += element
        } else {
          const isLast = accept.length === (index + 1)
          const or = intl.formatMessage(messages.or)
          const textToAdd = isLast ? `${or} .${element}` : `.${element}, `
          extensionText += textToAdd
        }
      })
      const values = { extensionText }
      this.setState({
        errors: { file: intl.formatMessage(messages.extensionError, values) },
      })
    }

    return isValid
  }

  render() {
    const {
      buttonText,
      color,
      dropzone,
      buttonSize,
      buttonStyle,
      hideProgress,
      image,
      inputDimension,
      multiple,
      reversed,
      showFile,
      showPreview,
    } = this.props
    const {
      dropzoneStatus,
      errors,
      fileName,
      fileReady,
      fileSize,
      isUploading,
      previewUrl,
      progress,
      success,
    } = this.state

    const width = (inputDimension && inputDimension.width)
      || (dropzone && '170px')
      || ''
    const height = (inputDimension && inputDimension.height)
      || (dropzone && '70px')
      || ''

    return (
      <Wrapper>
        {!fileReady &&
          <div>
            <HiddenInput
              ref={this.hiddenInput}
              onChange={this.onChange}
              multiple={multiple}
            />
            <ButtonLoader
              onClick={this.onClick}
              color={color}
              status={dropzoneStatus}
              handleRoute
              loaderSize={18}
              disabled={isUploading}
              isLoading={isUploading}
              size={buttonSize}
              styleType={buttonStyle}
              width={width}
              height={height}
              dropzone={dropzone}
              onDrop={this.handleOnDrop}
              // onDragStart={this.handleonDragStart}
              // onDragEnter={this.handleonDragEnter}
              onDragOver={this.handleOnDragOver}
              onDragLeave={this.handleOnDragLeave}
            >
              {dropzone &&
                <Zone
                  color={color}
                  status={dropzoneStatus}
                  className={isUploading && 'disabled'}
                >
                  <Center
                    status={dropzoneStatus}
                    className={isUploading && 'disabled'}
                  >
                    {buttonText}
                  </Center>
                </Zone>
              }

              {!dropzone && buttonText}

              {image && showPreview && previewUrl &&
                <Preview>
                  <Img
                    src={previewUrl}
                    alt="Preview"
                  />
                </Preview>
              }

            </ButtonLoader>
          </div>
        }

        {showFile && fileReady && fileName && fileSize &&
          <div>
            <FileName>
              <TextSmall size={0.8}>
                {fileName}
              </TextSmall>
            </FileName>

            <Bottom>
              <TextSmall size={0.7}>
                {getBytes(fileSize)}
              </TextSmall>

              <CloseButton
                size={0.7}
                onClick={this.handleClose}
              >
                Remove
              </CloseButton>
            </Bottom>
          </div>
        }

        {isUploading && !hideProgress &&
          <div>
            <ProgressBar progress={progress} />
          </div>
        }

        <div>
          {!isEmpty(errors.file) &&
            <HelpBlock
              color="red"
              reversed={reversed}
              label="noLabel"
            >
              {errors.file}
            </HelpBlock>
          }
          {!isEmpty(success) &&
            <HelpBlock
              color="green"
              reversed={reversed}
              label="noLabel"
            >
              {success}
            </HelpBlock>
          }
        </div>
      </Wrapper>
    )
  }
}

InputFile.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string),
  buttonSize: PropTypes.number,
  buttonStyle: PropTypes.string,
  buttonText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  clearFile: PropTypes.func,
  color: PropTypes.string,
  crop: PropTypes.bool,
  dropzone: PropTypes.bool,
  getImageDimension: PropTypes.func,
  hideProgress: PropTypes.bool,
  identifier: PropTypes.string,
  image: PropTypes.bool,
  inputDimension: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string,
  }),
  instantUpload: PropTypes.bool,
  intl: PropTypes.any,
  minimumImageDimension: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  multiple: PropTypes.bool,
  mutation: PropTypes.func.isRequired,
  mutationName: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  resize: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.number,
      preview: PropTypes.bool,
      width: PropTypes.number,
    }),
  ),
  reversed: PropTypes.bool,
  showFile: PropTypes.bool,
  showPreview: PropTypes.bool,
  simulation: PropTypes.object,
  update: PropTypes.func,
  updateName: PropTypes.string,
}

InputFile.defaultProps = {
  accept: ['jpeg', 'jpg', 'png'],
  color: 'black',
  dropzone: true,
  hideProgress: false,
  instantUpload: true,
  multiple: false,
}

export default compose(
  injectIntl,
)(InputFile)
