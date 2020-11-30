
// Implemented for DXY Corporation
// November 26, 2020

import React from 'react'


// Starting and Ending Date of Time Scales from Source Data
const parseTimescale = (sourceData) => {
  const head = [], tail = []
  for (let item of sourceData) {
    // Note: we are omitting possible children items
    head.push(item.span[0])
    tail.push(item.span[1])
  }
  head.sort()
  tail.sort()
  return {head: head[0], tail: tail[tail.length-1]}
}

// Generate T-Head needed for Parsed Timescale
const generateTHead = (timescale) => {
  const {head, tail} = timescale
  const x = Number(head.substr(0,4)), y = Number(tail.substr(0,4))
  let tablehead = []
  for (let i = x; i <= y; i++) {
    tablehead.push(i)
  }
  return tablehead
}

// Compute all Render-related Specifications
const computeRenderSpecs = (sourceData) => {

  // Starting and Ending Date
  const timescale = parseTimescale(sourceData)
  // List for T-Head
  const tablehead = generateTHead(timescale)

  // Decide on Width of Cells
  const monthWidth = 20 // 20px for one month
  const totalSpan = 4 * tablehead.length
  const totalMonths = 12 * tablehead.length

  // MarginLeft & Length of Each Item
  const head = tablehead[0], tail = tablehead[tablehead.length-1]

  const data = []

  for (let item of sourceData) {
    // MarginLeft = (Year - head) + (month - 1)
    const locationLeft  = (Number(item.span[0].substr(0, 4)) - head) * 12 + (Number(item.span[0].substr(5, 2)) - 1)
    const locationRight = (Number(item.span[1].substr(0, 4)) - head) * 12 + (Number(item.span[1].substr(5, 2)) - 1)

    const marginLeft = locationLeft * monthWidth
    // const spanWidth = (locationRight - locationLeft) * monthWidth
    const spanWidth = (locationRight) * monthWidth

    let i = {
      source: item,
      renderSpec: {
        marginLeft: marginLeft,
        spanWidth: spanWidth
      }
    }
    data.push(i)
  }
  return data
}

// Component for Displaying Data
const DisplayBoard = (props) => {

  return (<React.Fragment>
    {props.data.map((item)=>{
      return (<React.Fragment>
        <h4>{item.title}</h4>
        {/* {display.map((line)=>(line))} */}
        {JSON.stringify(item)}
      </React.Fragment>)
    })}
    <h3>Table Head</h3>
    <p>{JSON.stringify(generateTHead(parseTimescale(props.data)))}</p>
    <h3>Timescale</h3>
    <p>{JSON.stringify(parseTimescale(props.data))}</p>
  </React.Fragment>)
}

// Component for Table Head
const GanttTHead = (props) => {

  const theadStyle = {
  }

  const thStyle = {
    border: '1px solid rgb(190,190,190)',
    padding: '10px 5px',
  }

  const seasonStyle = {
    border: '1px solid rgb(190,190,190)',
    width: props.seasonWidth + 'px',
  }

  return (
    <thead style={theadStyle}>
      {/* Year Index */}
      <tr>
        <th rowSpan='2' style={thStyle}>Standard Indications</th>
        {props.tablehead.map((item)=>(
          <th colSpan='4'  style={thStyle}>{item}</th>
        ))}
      </tr>
      {/* Season Idx */}
      <tr>
        {props.tablehead.map(()=>(
          <React.Fragment>
            <th style={seasonStyle}>Q1</th><th style={seasonStyle}>Q2</th>
            <th style={seasonStyle}>Q3</th><th style={seasonStyle}>Q4</th>
          </React.Fragment>
        ))}
      </tr>
    </thead>
  )
}

const returnLineStyle = (dataItem) => {
  const divStyle = {
    backgroundColor: 'grey',
    height: '30px',
    width: dataItem.renderSpec.spanWidth + 'px',
    marginLeft: dataItem.renderSpec.marginLeft + 'px',
  }
  return divStyle
}

const GanttTBody = (props) => {

  const thStyle = {
    border: '1px solid rgb(190,190,190)',
    padding: '10px 5px',
  }

  return (
    <tbody>
      {props.data.map((item)=>{
          return (
            <tr>
              <th style={thStyle}>{item.source.name}</th>
              <td colSpan={props.span}>
                <div style={returnLineStyle(item)}>{item.source.code}</div>
              </td>
            </tr>
          )
        })}
    </tbody>
  )
}

// Component for Custom Gantt Chart
const Gantt = (props) => {

  // Information: THead Related
  const timescale = parseTimescale(props.data)
  const tablehead = generateTHead(timescale)
  // Information: TBody Related
  const renderData = computeRenderSpecs(props.data)

  const tableStyle = {
    borderCollapse: 'collapse',
    border: '1px solid rgb(190,190,190)',
    maxWidth: '1500px',
  }

  return (<React.Fragment>
    <h1>Custom Gantt in React</h1>
    <h3>Demo Data</h3>
    <DisplayBoard data = {props.data} />
    <h3>Demo Gantt</h3>
    <table style={tableStyle}>
      <GanttTHead tablehead={tablehead} seasonWidth = {80}/>
      <GanttTBody data={renderData} span = {4 * tablehead.length}/>
    </table>
  </React.Fragment>)
}


export default Gantt