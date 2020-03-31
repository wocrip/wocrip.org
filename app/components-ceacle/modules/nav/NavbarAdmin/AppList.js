import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import { ceacleServices } from 'components-ceacle/modules/ServicesList/ceacleServices'
import NavItem from './NavItem'


const AppList = ({
  reversed,
  intl,
}) => {
  const services = ceacleServices(intl)

  return services.map((group) =>
    group.services.map((service) => (
      <NavItem
        key={`app_${service.name}`}
        color={group.color}

        reversed={reversed}
        noVisited
        to={`/app/${service.slug}`}
      >
        {service.name}
      </NavItem>
    ))
  )
}

AppList.propTypes = {
  intl: PropTypes.any,
  reversed: PropTypes.bool,
}

export default injectIntl(AppList)
