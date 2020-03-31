import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import { injectIntl } from 'react-intl'

import { styles } from 'theme'
import { slugify } from 'utils/helpers'

import HelpBlock from 'components-shared/basics/HelpBlock'
import LoadingIndicator from 'components-shared/modules/LoadingIndicator'
import Label from 'components-shared/basics/Label'

import TagButton from './TagButton'
import TagInput from './TagInput'
import Suggestions from './Suggestions'
import Suggestion from './Suggestion'
import defaultValidation from './defaultValidation'
import messages from './messages'


const findTag = (keyword, tagArray, exclude) => tagArray.filter((tag) => {
  const isExcluded = exclude.includes(tag.name)
  return tag.name.toLowerCase().includes(keyword.toLowerCase()) && !isExcluded && tag
})

const FormWrapper = styled.div`
  ${styles.tag.formWrapper}
`
const InputWrapper = styled.div`
  ${styles.tag.wrapper}
`
const TagsWrapper = styled.div`
  ${styles.tag.tagsWrapper}
`
class TagInputForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeSuggestionIndex: -1,
      errors: {},
      filteredSuggestions: [],
      isFocused: false,
      showSuggestions: true,
      tags: [],
      tagInput: '',
    }

    this.input = React.createRef()

    this.onChange = this.onChange.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleClickClose = this.handleClickClose.bind(this)
    this.handleClickSuggestion = this.handleClickSuggestion.bind(this)
    this.handleHoverSuggestion = this.handleHoverSuggestion.bind(this)
    this.handleFocusSuggestion = this.handleFocusSuggestion.bind(this)
    this.handlePaste = this.handlePaste.bind(this)
    this.pushTag = this.pushTag.bind(this)
    this.addSuggestion = this.addSuggestion.bind(this)
    this.isValid = this.isValid.bind(this)
  }

  componentDidUpdate(prevProps) {
    const { cleanUp } = this.props
    if (cleanUp !== prevProps.cleanUp) {
      if (cleanUp) this.clearTags()
    }
  }

  onChange(event) {
    const { suggestions } = this.props
    const { tags } = this.state
    const toExclude = tags.map((tag) => tag.name)
    const { value } = event.target
    let state = { tagInput: value }

    // If detected comma, push tag
    const values = value ? value.split(',') : []
    if (values && values.length > 1) {
      this.pushTag(values[0])
      state = { tagInput: values[1] }
    }

    if (!value) state.errors = {}
    state.showSuggestions = true

    if (suggestions) {
      const reinitiateSuggestionsCycling = () => {
        state.activeSuggestionIndex = -1
      }

      const filterSuggestions = () => {
        if (value.length >= 1) {
          state.filteredSuggestions = findTag(value, suggestions, toExclude)
        } else if (value.length < 1) {
          state.filteredSuggestions = []
        }
      }

      reinitiateSuggestionsCycling()
      filterSuggestions()
    }

    this.setState(state)
  }

  onBlur(event) {
    // When mouseover the suggestions slowly
    // onBlur prevents onClick to fire
    // thus adding a timeout helps to go around this
    setTimeout(() => {
      this.setState({ isFocused: false, showSuggestions: false })
    }, 100)

    this.pushTag(event.target.value)
  }

  onFocus() {
    this.setState({ isFocused: true })
  }

  pushTag(value) {
    const {
      tagCount,
      getTagInputValue,
      suggestionOnly,
      intl,
    } = this.props
    const { tags, activeSuggestionIndex } = this.state

    if (!suggestionOnly) {
      if (tagCount === 0 || tagCount > tags.length) {
        if (this.isValid(value) && value && value.length > 2) {
          this.setState({ errors: {} })
          const allValues = value.split(',')

          allValues.forEach((val) => {
            const tag = { name: val }
            tags.push(tag)
          })

          getTagInputValue(tags)
          this.setState({ tags, tagInput: '' })
        }
      }
    } else if (activeSuggestionIndex >= 0) {
      this.addSuggestion(activeSuggestionIndex)
    } else {
      this.setState({
        errors: {
          tagInput: intl.formatMessage(messages.addOnlyFromSuggestion),
        },
      })
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.pushTag(event.target.value)
    }
  }

  handlePaste(event) {
    const { isEmail } = this.props
    const clipboardData = event.clipboardData || window.clipboardData
    const pastedData = clipboardData.getData('Text')

    if (isEmail && isEmail(pastedData)) {
      setTimeout(() => {
        this.pushTag(pastedData)
      }, 100)
    }
  }

  handleKeyDown(event) {
    const {
      removeOnBackspace,
      suggestions,
      getTagInputValue,
    } = this.props

    if (removeOnBackspace && event.key === 'Backspace') {
      let { tags } = this.state
      const { tagInput } = this.state

      if (!isEmpty(tags) && !tagInput) {
        const lastIndex = (tags.length - 1)
        tags = tags.slice()
        tags.splice(lastIndex, 1)

        getTagInputValue(tags)
        this.setState({ tags })
      }
    }

    if (suggestions && event.key === 'ArrowDown') {
      const {
        activeSuggestionIndex,
        filteredSuggestions,
      } = this.state
      let index = activeSuggestionIndex + 1
      let input = ''
      const state = {}
      const isLast = (index + 1) > filteredSuggestions.length

      const goToFirstSuggestion = () => {
        index = 0
        input = filteredSuggestions[0].name
      }

      const goToNextSuggestion = () => {
        input = filteredSuggestions[index].name
      }

      if (isLast) goToFirstSuggestion()
      else goToNextSuggestion()

      state.activeSuggestionIndex = index
      state.tagInput = input

      this.setState(state)
    }

    if (suggestions && event.key === 'ArrowUp') {
      const {
        activeSuggestionIndex,
        filteredSuggestions,
      } = this.state
      const isFirst = activeSuggestionIndex < 1
      let index = activeSuggestionIndex - 1
      let input = ''
      const state = {}

      const goToLastSuggestion = () => {
        index = filteredSuggestions.length - 1
      }

      if (isFirst) goToLastSuggestion()

      input = filteredSuggestions[index].name
      state.activeSuggestionIndex = index
      state.tagInput = input
      this.setState(state)

      const position = input.length + 1
      const inputRef = this.input.current
      inputRef.style.caretColor = 'transparent'
      setTimeout(() => {
        inputRef.setSelectionRange(position, position)
        inputRef.style.caretColor = ''
      }, 0)
    }

    if (suggestions && event.key === 'Escape') {
      this.setState({ showSuggestions: false })
    }
  }

  handleClickClose(index) {
    const { getTagInputValue } = this.props
    let { tags } = this.state
    tags = tags.slice()
    tags.splice(index, 1)
    getTagInputValue(tags)
    this.setState({ tags })
  }

  addSuggestion(index) {
    const { tagCount, getTagInputValue, intl } = this.props
    const { tags, filteredSuggestions } = this.state
    const suggestion = filteredSuggestions[index]
    this.setState({ errors: {} })

    if (tagCount === 0 || tagCount > tags.length) {
      tags.push(suggestion)
      getTagInputValue(tags)
      this.setState({ tags, tagInput: '' })
    } else {
      this.setState({
        errors: {
          tagInput: intl.formatMessage(messages.maximumAllowed, { count: tagCount }),
        },
      })
    }
  }

  handleClickSuggestion(index) {
    this.addSuggestion(index)
  }

  handleHoverSuggestion(index) {
    const {
      filteredSuggestions,
    } = this.state
    const state = {}
    const input = filteredSuggestions[index].name

    state.activeSuggestionIndex = index
    state.tagInput = input
    this.setState(state)
  }

  handleFocusSuggestion() {}

  clearTags() {
    const { onCleanUp } = this.props
    if (onCleanUp) {
      onCleanUp(false)
      this.setState({ tags: [] })
    }
  }

  isValid(value) {
    const { validation, intl } = this.props
    const tagValidation = validation || defaultValidation
    const { errors, isValid } = tagValidation(value, 'tagInput', intl)
    if (!isValid) this.setState({ errors })

    return isValid
  }

  render() {
    const {
      closeButton,
      color,
      error,
      label,
      labelColor,
      labelWeight,
      loaderSize,
      placeholder,
      suggestions,
    } = this.props
    const {
      activeSuggestionIndex,
      errors,
      filteredSuggestions,
      isFocused,
      isLoading,
      showSuggestions,
      tagInput,
      tags,
    } = this.state

    return (
      <FormWrapper>
        { label &&
          <Label
            color={labelColor}
            labelWeight={labelWeight}
          >
            {label}
          </Label>
        }

        {(error || errors.tagInput) &&
          <HelpBlock
            color="red"
            label={label}
          >
            {error || errors.tagInput}
          </HelpBlock>
        }

        <InputWrapper
          className={isFocused ? 'focused' : ''}
          color={(error || errors.tagInput) ? 'red' : null}
        >
          {tags && tags.length > 0 &&
            <TagsWrapper>
              {tags.map((tag, index) => (
                <TagButton
                  key={`tag_${slugify(tag.name)}`}
                  onClick={() => this.handleClickClose(index)}
                  closeButton={closeButton}
                  tagName={tag.name}
                />
              ))}
            </TagsWrapper>
          }

          <TagInput
            ref={this.input}
            onKeyPress={this.handleKeyPress}
            onKeyDown={this.handleKeyDown}
            onPaste={this.handlePaste}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            name="tagInput"
            value={tagInput}
            placeholder={placeholder}
          />

          {suggestions && tagInput &&
            <Suggestions
              className={(showSuggestions && !isEmpty(filteredSuggestions)) ? 'show' : ''}
            >
              {filteredSuggestions.map((suggestion, index) => (
                <Suggestion
                  key={`suggestion_${suggestion.name}`}
                  onClick={() => this.handleClickSuggestion(index)}
                  onMouseOver={() => this.handleHoverSuggestion(index)}
                  onFocus={() => this.handleFocusSuggestion(index)}
                  className={activeSuggestionIndex === index ? 'active' : ''}
                >
                  {suggestion.name}
                </Suggestion>
              ))}
            </Suggestions>
          }

          {isLoading &&
            <LoadingIndicator
              color={color || 'black'}
              size={loaderSize || 17}
              noWrapper
              strokeWidth={8}
            />
          }
        </InputWrapper>
      </FormWrapper>
    )
  }
}

TagInputForm.propTypes = {
  cleanUp: PropTypes.bool,
  closeButton: PropTypes.bool,
  color: PropTypes.string,
  error: PropTypes.string,
  getTagInputValue: PropTypes.func.isRequired,
  intl: PropTypes.object,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  labelWeight: PropTypes.string,
  loaderSize: PropTypes.number,
  isEmail: PropTypes.func,
  onCleanUp: PropTypes.func,
  placeholder: PropTypes.string,
  removeOnBackspace: PropTypes.bool,
  suggestions: PropTypes.array,
  suggestionOnly: PropTypes.bool,
  tagCount: PropTypes.number,
  validation: PropTypes.func,
}

TagInputForm.defaultProps = {
  closeButton: true,
  placeholder: 'Add tag',
  removeOnBackspace: true,
  suggestions: [],
  suggestionOnly: false,
  tagCount: 0,
}

export default injectIntl(TagInputForm)
