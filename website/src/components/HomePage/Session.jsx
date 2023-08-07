import React from 'react'

const Session = () => {
  
    const Diagrams = props => {
      return (
        <div className='diagramcontainer'>
            <div className='completed'>
            - {props.terms}
            </div>
            <div className='yettocomplete'>
              wdwwdw
            </div>
        </div>
      )
    }
  
  return (
    <div className='sessioncontainer'>
        <div className='sessionindex' style={{padding: "10px", align:"left"}}>Session 3: Class Test</div>
        <body className='hasas'>
            <Diagrams terms="Cell membrane
Rough endoplasmic reticulum"/>
        </body>
    </div>
  )
}

export default Session