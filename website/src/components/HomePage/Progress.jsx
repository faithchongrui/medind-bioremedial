import React from 'react'
import Sets from './Sets'
import Session from './Session'

const Progress = () => {
  return (
    <div className="progess">
        <h1 className="progress"> Your progress </h1>
        <body className="progresscontainer">
            <Session></Session>
            <Sets></Sets>
        </body>
        
    </div>
  )
}

export default Progress