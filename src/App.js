import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/js/Home";
import About from "./pages/js/About";
import Rings from "./pages/js/Rings";
// import Contact from "./pages/js/Contact";
// import HomeBox from "./components/js/Home";
// import Footer from "./components/js/Footer";
import CloseNav from "./components/js/closeNav";
import Nav from "./components/js/Nav";
import NavBanner from "./components/js/Nav-Banner";
// import render from '@testing-library/react';


class App extends Component {
  state = {
    navBannerOpen: false
  };

  burgerClickHandler = () => {
    this.setState((prevState) => {
      return {navBannerOpen: !prevState.navBannerOpen};
    });
  };

  closeNavClickHandler = () => {
    this.setState({navBannerOpen: false});
  };

  render() {
    let closeNav;
    
    if (this.state.navBannerOpen) {
      closeNav = <CloseNav click={this.closeNavClickHandler} />
    }

    return (
      <div className="App" >
        
        <Router>
          {closeNav }
          <Nav burgerClickHandler={this.burgerClickHandler} />
          <NavBanner show={this.state.navBannerOpen} />          
          
          
          
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,700;1,300&display=swap" rel="stylesheet" />
          <Route path="/home" component={Home} />
          <Route path="/nav" component={Nav} />
          <Route path="/about" component={About} />
          <Route path="/rings" component={Rings} />
          {/* <Route path="/contact" component={Contact} /> */}
          
        </Router>
        

      </div>
    );
  }
}

export default App;
