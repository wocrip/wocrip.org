import React from 'react'
import loadable from 'utils/loadable'
import { css } from 'styled-components'

import LoadingIndicator from 'components-shared/modules/LoadingIndicator'

const style = css`
  margin: 150px 0;
`
export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator additionalStyle={style} />,
})
