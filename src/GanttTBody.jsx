import {renderTBodyLine, renderTBodyTitle} from './parseRenderSpec'


const renderItem = (item, tableStructure) => (
  <tr>
    <th style={renderTBodyTitle(item)}>{item.name}</th>
    <td colSpan={tableStructure.totalSpan} style={{padding: 0}}>
      <div style={renderTBodyLine(item, tableStructure)}>
        {item.code}
      </div>
    </td>
  </tr>
)


const GanttTBody = (props) => {

  const tabInfo = props.tableStructure
  const rawData = props.sourceData

  return (<tbody>
    {rawData.map((primaryItem)=>{
      if (primaryItem.subordinateItems.length > 0) {
        return (
          <>
            {renderItem(primaryItem, tabInfo)}
            {primaryItem.subordinateItems.map((secondaryItem)=>(
              renderItem(secondaryItem, tabInfo)
            ))}
          </>
        )
      }
      else {
        return (renderItem(primaryItem, tabInfo))
      }
    })}
  </tbody>)

}

export default GanttTBody