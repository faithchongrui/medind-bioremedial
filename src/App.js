import './App.css';
import * as React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div>
      <title>Bioremedial</title>

      <header className="header">
        <h1>Welcome to Bioremedial!</h1>
      </header>

      {/* <nav className="navbar"> */}
        <a href="/test" id="btn">slay</a>
        <a href="Home" id="btn">some</a>
        <a href="About" id="btn">bacteria</a>
      {/* </nav> */}

      <div className="row">
        <div className="side">lactobaccillus image</div>
        <div className="main">e. coli</div>
      </div>
      {/* <Button variant="contained">Contained</Button> */}
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Router>
      <Link to={"./About"}>
        Dashboard
      </Link>
    </div>
  );
}

export default App;
