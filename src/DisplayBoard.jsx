//
// Implemented by Yuhsuan He
// November 27th, 2020
//

import React from 'react'
import { renderTBodyLine } from './parseRenderSpec'

const DisplayBoard = (props) => (
  <React.Fragment>
    <h3>Table Structure</h3>
    {Object.entries(props.tableStructure).map((item)=>(
      <p>
        <span>{item[0]}</span>
        <span>{'\t: \t' + item[1]}</span>
      </p>
    ))}
    <h3>Source Data</h3>
    {props.sourceData.map((item)=>(
      <React.Fragment>
        <p><strong>name: </strong><span>{item.name}</span></p>
        <p>{'span: ' + item.span}</p>
        <p>{'secondary: ' + JSON.stringify(item.subordinateItems)}</p>
        <p>{'style: ' + JSON.stringify(renderTBodyLine(item, props.tableStructure))}</p>
      </React.Fragment>
    ))}
  </React.Fragment>
)

export default DisplayBoard