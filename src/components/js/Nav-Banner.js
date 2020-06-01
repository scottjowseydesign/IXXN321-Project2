import React from 'react';
import "../css/Nav.css";
import { Link } from "react-router-dom";
import ScottLogo from "../../assets/black-logo.png";


const navBanner = props => {
    let navClasses = 'nav-page';
    if (props.show) {
        navClasses = 'nav-page open';
    }

    
    return (
        <div className = {navClasses}>
            <div className = "nav-wrap">
                <div className = "nav-logo">
                    <Link to = "/" onClick={() => props.closeHandler()} ><img src= { ScottLogo } alt="Scott Jowsey Logo"/>
                    </Link>
                </div>

            </div>

            <div className = "nav-box">
                <div className="wrap-nav">
                    <div className="nav-items">
                        <Link to = "/projects " className = "navbar-links" onClick={() => props.closeHandler()}>PROJECTS</Link>
                        <Link to= "/about" className = "navbar-links" onClick={() => props.closeHandler()}>ABOUT</Link>
                        <Link to= "/contact" className = "navbar-links" onClick={() => props.closeHandler()}>CONTACT</Link>
                    </div>
                </div>
                
            </div>
            <div className = "nav-overlay">
            </div>

        </div>
    );
};

export default navBanner;