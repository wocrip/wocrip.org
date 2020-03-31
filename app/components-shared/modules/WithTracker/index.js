import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'


const WithTrackerHoc = (
  WrappedComponent,
  track = true,
  options = {},
) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options,
    })
    ReactGA.pageview(page)
  }

  class WithTracker extends Component {
    componentDidMount() {
      const { location } = this.props
      const page = location.pathname
      if (track) trackPage(page)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      const { location } = this.props
      const currentPage = location.pathname
      const nextPage = nextProps.location.pathname

      if (currentPage !== nextPage && track) {
        trackPage(nextPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  WithTracker.propTypes = {
    location: PropTypes.object.isRequired,
  }

  return WithTracker
}

export default WithTrackerHoc
