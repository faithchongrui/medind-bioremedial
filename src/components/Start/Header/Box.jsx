import React from 'react'
import { Button } from '@mui/material';
import './Box.css'

const Box = () => {
  return (
    <header>
      <div className="box">
      <Button variant="text" sx={{ position: "fixed", top: 0, right: 0, zIndex: 2000 }}> Login </Button>
        <h1 className="title">Welcome to Bioremedial!</h1>
        <h2>Your one-stop destination for biotech revision.</h2>
      </div>  
    </header>
  );
}

export default Box