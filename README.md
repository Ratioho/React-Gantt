# React-Gantt
A really simple gantt chart implemented in react with 300 lines of code.

### File-Structure
Main Component is GanttChart, which includes:
- DisplayBoard: A dashboard to display incoming data and processed table structures
- GanttTHead: Table head
- GanttTBody: Table body
Two functions are provided to parse the data:
- parseSourceData: Resolve the stucture of source data and decide the table display
- parseRenderSpec: CSS spcifications for each part of the table. Placed here in js because calculation is needed for specific bars in chart

### Usage
Just feed in data to it, like shown in src/index.js. Supporting up to 2 levels of secondary titles.
