const parseMaxTimescale = (sourceData) => {
  const head = [], tail = []
  for (let i of sourceData) {
    head.push(i.span[0])
    tail.push(i.span[1])
    // Secondary Items
    if (i.subordinateItems.length > 0) {
      for (let j of i.subordinateItems) {
        head.push(j.span[0])
        tail.push(j.span[1])
      }
    }
  }
  head.sort()
  tail.sort()
  return [head[0], tail[tail.length-1]]
}

const generateTHead = ([head, tail]) => {
  const x = Number(head.substr(0,4))
  const y = Number(tail.substr(0,4))
  const tableHead = []
  for (let i = x; i <= y; i++) {
    tableHead.push(i)
  }
  return tableHead
}

const calculateMonthWidth = (totalSpan) => {
  // if too few, return for the maximum

  // if too many return for a minimum needed
  // minimum may be 15 or 20

  // temporary fixed
  return 15
}

const calculateTableWidth = (titleWidth, monthWidth, totalSpan) => {
  const tableWidth = titleWidth + monthWidth * 3 * totalSpan
  return (tableWidth > 1500 ? 1500 : tableWidth)
}

const parseTableStructure = (sourceData) => {
    // tableHead
    const tableHead = generateTHead(parseMaxTimescale(sourceData))
    // totalSpan
    const totalSpan = 4 * tableHead.length
    // titleWidth
    const titleWidth = 120
    // monthWidth
    const monthWidth = calculateMonthWidth(totalSpan)
    // tableWidth
    const tableWidth = calculateTableWidth(titleWidth, monthWidth, totalSpan)

    const tableStructure = {
      tableHead: tableHead,
      totalSpan: totalSpan,
      titleWidth: titleWidth,
      monthWidth: monthWidth,
      tableWidth: tableWidth
    }
    return tableStructure
}

export default parseTableStructure