import React from 'react';
import "../css/Nav.css";
import { Link } from "react-router-dom";

const navBanner = props => {
    let navClasses = 'nav-page';
    if (props.show) {
        navClasses = 'nav-page open';
    }
    return (
        <div className = {navClasses}>
            <div className = "nav-wrap">
                <div className = "logo">
                    <Link to = "/home">Image Here
                    </Link>
                </div>
                
                
            </div>

            <div className = "nav-box">
                <div className="nav-items">
                    <Link to = "/rings ">PROJECTS</Link>
                    <Link to= "/about">ABOUT</Link>
                    <Link to= "/contact">CONTACT</Link>
                </div>
                <div className = "nav-social">
                    <div className = "nav-social-links">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default navBanner;