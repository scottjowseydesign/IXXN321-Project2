import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/js/Home";
import About from "./pages/js/About";
import Rings from "./pages/js/Rings";
import CloseNav from "./components/js/closeNav";
import Nav from "./components/js/Nav";
import NavBanner from "./components/js/Nav-Banner";
{/* <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,700;1,300&display=swap" rel="stylesheet" /> */}


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

    return (
      <div className="App" >
        
        <Router>

          { this.state.navBannerOpen && <CloseNav click={this.closeNavClickHandler} /> }
          <Nav burgerClickHandler={this.burgerClickHandler} />
          <NavBanner show={this.state.navBannerOpen} closeHandler={this.closeNavClickHandler} />          
          <Route path="/" component={Home} exact />
          <Route path="/nav" component={Nav} />
          <Route path="/about" component={About} />
          <Route path="/rings" component={Rings} />
          
        </Router>
        

      </div>
    );
  }
}

export default App;
