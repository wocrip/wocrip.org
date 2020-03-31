import React from 'react'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import throttle from 'lodash/throttle'


const withInfiniteScroll = (condition) => (Component) =>
  class WithInfiniteScroll extends React.Component {
    static propTypes = {
      getMore: PropTypes.func.isRequired,
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false)
    }

    onScroll = throttle(() => {
      if (condition(this.props)) {
        const paginate = this.props.getMore
        paginate()
      }
    }, 500)

    render() {
      return <Component {...this.props} />
    }
  }

const InfiniteScroll = ({ list }) => list

InfiniteScroll.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const condition = ({
  list,
  isError,
  isFetching,
  isLoading,
}) =>
  (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
  && list.length
  && !isError
  && !isFetching
  && !isLoading

export default compose(
  withInfiniteScroll(condition),
)(InfiniteScroll)
