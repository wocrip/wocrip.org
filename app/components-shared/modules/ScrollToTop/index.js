import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'


class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location !== prevProps.location) {
      if (
        !location.state
        || (location.state && !location.state.noScrollTop)
      ) {
        window.scrollTo(0, 0)
      }
    }
  }

  render() {
    return this.props.children
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.any,
}

export default withRouter(ScrollToTop)
