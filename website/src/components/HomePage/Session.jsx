import React from 'react'

const Session = () => {
    const Diagrams = props => {
        <div className='diagramcontainer'>
            <div className='completed'>
            - {props.terms}
            </div>
            <div className='yettocomplete'>

            </div>
        </div>
        
    }
  return (
    <div className='sessioncontainer'>
        <div className='sessionindex' style={{padding: "10px", align:"left"}}>Session 3: Class Test</div>
        <div>
            <Diagrams terms="Cell membrane
Rough endoplasmic reticulum" />
        </div>
    </div>
  )
}

export default Session