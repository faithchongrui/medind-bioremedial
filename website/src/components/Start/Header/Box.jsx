import React from "react";
import { Button } from "@mui/material";
import "./Box.css";
import logo from "../../../images/2.png";
import About from "../About/About.jsx";
import { Link } from 'react-router-dom';

const Box = () => {
  const logoStyle = {
    width: "300px", // Adjust the size as needed
    height: "auto",
    marginBottom: "20px", // Add spacing between the logo and title
  };

  return (
    <header>
      <div>
        <Link to='/home'>
          <Button
            variant="text"
            sx={{
              position: "fixed",
              top: 0,
              right: 0,
              zIndex: 2000,
              color: "white",
            }}
          >
            {" "}
            Login{" "}
          </Button>
        </Link>
        <img src={logo} alt="Logo" style={logoStyle}></img>
        <h1>Welcome to Bioremedial!</h1>
        <h2>Your one-stop destination for biotech revision.</h2>
      </div>
      <About />
    </header>
  );
};

export default Box;
