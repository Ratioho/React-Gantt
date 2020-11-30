export const renderTableStyle = (tableStructure) => {
  const style = {
    borderCollapse: 'collapse',
    border: '1px solid rgb(190,190,190)',
    maxWidth: tableStructure.tableWidth + 'px',
  }
  return style
}

export const renderTHeadTitle = (tableStructure) => {
  const style = {
    border: '1px solid rgb(190,190,190)',
    padding: '10px 5px',
    width: tableStructure.titleWidth + 'px',
    minWidth: tableStructure.titleWidth + 'px'
  }
  return style
}

export const renderTHeadYear = (tableStructure) => {
  const style = {
    border: '1px solid rgb(190,190,190)',
    padding: '10px 5px',
    width: tableStructure.monthWidth * 12 + 'px',
    minWidth: tableStructure.monthWidth * 12 + 'px',
    boxSizing: 'border-box'
  }
  return style
}

export const renderTHeadSeason = (tableStructure) => {
  const style = {
    border: '1px solid rgb(190,190,190)',
    padding: '10px 5px',
    width: tableStructure.monthWidth * 3 + 'px',
    minWidth: tableStructure.monthWidth * 3 + 'px',
    boxSizing: 'border-box'
  }
  return style
}

export const renderTBodyTitle = (item) => {
  const style = {
    border: '1px solid rgb(190,190,190)',
    padding: '10px 5px',
  }
  return style
}

export const renderTBodyLine = (item, tableStructure) => {

  const monthMarginLeft  = (Number(item.span[0].substr(0, 4)) - tableStructure.tableHead[0]) * 12 + (Number(item.span[0].substr(5, 2)) - 1)
  const monthMarginRight = (Number(item.span[1].substr(0, 4)) - tableStructure.tableHead[0]) * 12 + (Number(item.span[1].substr(5, 2)) - 1)

  const marginLeft = monthMarginLeft * tableStructure.monthWidth
  const spanWidth  = (monthMarginRight - monthMarginLeft) * tableStructure.monthWidth

  const backgroundColor = 'brown'

  const style = {
    marginLeft: marginLeft + 'px',
    width: spanWidth + 'px',
    backgroundColor: backgroundColor,
  }
  return style
}