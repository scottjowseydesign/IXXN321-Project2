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
                    <Link to = "/home"><img src= { ScottLogo } alt="Scott Jowsey Logo"/>
                    </Link>
                </div>

            </div>

            <div className = "nav-box">
                <div className="wrap-nav">
                    <div className="nav-items">

                        <Link to = "/rings " className = "navbar-links">PROJECTS</Link>
                        <Link to= "/about" className = "navbar-links">ABOUT</Link>
                        <Link to= "/contact" className = "navbar-links">CONTACT</Link>
                    </div>
                    <div className = "nav-social">
                        <div className = "nav-social-links">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default navBanner;