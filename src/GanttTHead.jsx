import {renderTHeadSeason, renderTHeadTitle, renderTHeadYear} from './parseRenderSpec'

const GanttTHead = (props) => {

  const styleTitle = renderTHeadTitle(props.tableStructure)
  const styleYear = renderTHeadYear(props.tableStructure)
  const styleSeason = renderTHeadSeason(props.tableStructure)

  return (<thead>
    {/* Index for All Years */}
    <tr>
      <th rowSpan='2' style={styleTitle}>
        Indications Standard
      </th>
      {props.tableStructure.tableHead.map((year)=>(
        <th colSpan='4' style={styleYear}>
          {year}
        </th>
      ))}
    </tr>
    {/* Index for Seasons */}
    <tr>
      {props.tableStructure.tableHead.map((year)=>(
        <>
          <th style={styleSeason}>Q1</th><th style={styleSeason}>Q2</th>
          <th style={styleSeason}>Q3</th><th style={styleSeason}>Q4</th>
        </>
      ))}
    </tr>
  </thead>)
}

export default GanttTHead