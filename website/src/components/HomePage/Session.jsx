import React from 'react'
import { PieChart, Pie } from 'recharts';

const Session = () => {
  
    const keywords = [
      {
        word: "Cell membrane"
      },
      {
        word: "Rough endoplasmic reticulum"
      }
    ]

    const progress = [
     { name: "complete", value: 80 },
     { name: "incomplete", value: 20 }
    ]
    const Diagrams = props => {
      return (
        <div>
            <div className='completed'>
            - {props.terms}
            </div>
            <div className='yettocomplete'>
            - {props.notdone}
            </div>
        </div>
      )
    }
  
  return (
    <div className='sessioncontainer'>
        <div className='sessionindex' style={{padding: "10px", align:"left"}}>Session 3: Class Test</div>
        <body className='everythingcontainer'>
        <body className='diagramcontainer'>
            <Diagrams terms="asse" notdone="sdsd"/>
            <div className='diagramtitle'>Diagram</div>
        </body>
        <body className='flashcardcontainer'>
          <PieChart
          className="flashcards"
          width={300}
          height={300}
          >
            <Pie 
            data={progress}
            dataKey="number"
            outerRadius={150}
            innerRadius={110}
            fill="rgb(46,79,79)"
            stroke='rgb(46,79,79)'
             />
        </PieChart>
          <div className='flashcardtitle'>Flashcards</div>
        </body>
        </body>
    </div>
  )
}

export default Session