import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/js/Home";
import About from "./pages/js/About";
import Rings from "./pages/js/Rings";
import Contact from "./pages/js/Contact";
import HomeBox from "./components/js/Home";
import Footer from "./components/js/Footer";
import Nav from "./pages/js/Nav";
import NavBar from "./components/js/Nav";
// import NavBanner from "./components/js/Nav-Banner";


function App() {
  return (
    <div className="App">
      
      <Router>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,700;1,300&display=swap" rel="stylesheet" />
        <Route path="/home" component={Home} />
        <Route path="/nav" component={Nav} />
        <Route path="/about" component={About} />
        <Route path="/rings" component={Rings} />
        <Route path="/contact" component={Contact} />
        <NavBar />
        {/* <HomeBox />
        <Footer /> */}
      </Router>
      

    </div>
  );
}

export default App;
