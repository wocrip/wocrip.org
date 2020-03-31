import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { styles } from 'theme'


const Tooltip = styled.div`
  position: relative;
`
const TooltipText = styled.div`
  ${styles.tooltip.normal}
`
const WithTooltip = (WrappedComponent) => {
  const TooltipComponent = ({
    tooltipText,
    tooltipPosition,
    ...props
  }) => {
    const [isTooltip, setIsTooltip] = useState(false)

    let showTimeout
    const showTimeoutFunc = () => {
      showTimeout = setTimeout(() => setIsTooltip(true), 500)
    }

    const onClick = () => clearTimeout(showTimeout)
    const showTootltip = () => showTimeoutFunc()
    const hideTootltip = () => {
      setIsTooltip(false)
      clearTimeout(showTimeout)
    }

    return (
      <Tooltip
        onClick={onClick}
        onMouseEnter={showTootltip}
        onMouseLeave={hideTootltip}
        data-tooltip={tooltipText}
      >
        {isTooltip &&
          <TooltipText
            tooltipPosition={tooltipPosition}
            styleType="tooltip"
          >
            {tooltipText}
          </TooltipText>
        }
        <WrappedComponent {...props} />
      </Tooltip>
    )
  }

  TooltipComponent.propTypes = {
    tooltipText: PropTypes.string.isRequired,
    tooltipPosition: PropTypes.string.isRequired,
  }

  return TooltipComponent
}

export default WithTooltip
