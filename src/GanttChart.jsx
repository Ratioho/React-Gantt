import parseTableStructure from './parseSourceData'
import React from 'react'
import DisplayBoard from './DisplayBoard'
import GanttTHead from './GanttTHead'
import GanttTBody from './GanttTBody'
import {renderTableStyle} from './parseRenderSpec'

const GanttChart = (props) => {

  const tableStructure = parseTableStructure(props.sourceData)
  const sourceData = props.sourceData
  /**
   * tableStructure: information on table
   *    tableHead: [2012, 2013]
   *    totalSpan
   *    titleWidth
   *    monthWidth
   *    tableWidth: maximum width
   */

  return (
    <React.Fragment>
      <h1>Custom Gantt Chart in React</h1>
      <h2>Display Board of Information</h2>
      <DisplayBoard 
        tableStructure = {tableStructure}
        sourceData = {sourceData} />
      <h2>Ganttt Chart</h2>
      <table style={renderTableStyle(tableStructure)}>
        <GanttTHead tableStructure = {tableStructure} />
        <GanttTBody 
          tableStructure = {tableStructure}
          sourceData = {sourceData} />
      </table>
    </React.Fragment>
  )
}

export default GanttChart