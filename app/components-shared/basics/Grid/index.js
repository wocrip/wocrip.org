/*
 * From https://github.com/azz/styled-css-grid/blob/master/lib/Grid.js
 */
import styled from 'styled-components'
import PropTypes from 'prop-types'

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`
const getColumns = ({ columns = 12 }) =>
  typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns

const getGap = ({ gap = '8px' }) => `${gap} ${gap}`
const getFlow = ({ flow = 'row' }) => flow
const formatAreas = (areas) => areas.map((area) => `${area}`).join(' ')

const Grid = styled.div`
  display: grid;
  grid-auto-flow: ${getFlow};
  grid-auto-rows: ${autoRows};
  ${({ rows }) => rows && `grid-template-rows: ${rows}`};
  grid-template-columns: ${getColumns};
  grid-gap: ${getGap};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`};
  ${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`

Grid.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gap: PropTypes.string,
  minRowHeight: PropTypes.string,
  flow: PropTypes.string,
  rows: PropTypes.string,
  areas: PropTypes.arrayOf(PropTypes.string),
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
}

export default Grid
