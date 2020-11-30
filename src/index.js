import ReactDOM from 'react-dom'
import React from 'react'
import Gantt from './Gantt'
import GanttChart from './GanttChart'


const demonstrationData = [
	{
    name: 'Non-Hodgkin Lymphoma',
    code: 'CYHL20100100',
    desc: 'to be added',
    span: ['2010-03-01', '2012-12-01'],
    kids: [],
	},
	{
		name: 'Lung Cancer',
		code: 'CTRS201200086',
		desc: 'null yet',
		span: ['2011-07-01', '2013-06-23'],
		kids: [],
	}
]

const sourceData = [
  {
    name: 'Non-Hodgkin Lymphoma',
    code: 'CYHL20100100',
    span: ['2010-03-01', '2012-12-01'],
    desc: '',
    // Supporting Upto 1 Layer
    subordinateItems: [
      {
        name: 'Symptom01',
        code: 'SUB001',
        span: ['2013-03-23', '2013-11-30'],
        desc: '',
      }
    ]
  },
  {
    name: 'Lung Cancer',
    code: 'CTRS201200086',
    span: ['2011-07-01', '2013-06-23'],
		desc: '',
		subordinateItems: []
  }
]

const root = document.getElementById('root')

ReactDOM.render(<GanttChart sourceData = {sourceData} />, root)

// ReactDOM.render(<Gantt data={demonstrationData}/>, root)
