import React from 'react'
import { Link } from "react-router-dom";
import "../css/Nav.css";
import NavBanner from "../../components/js/Nav-Banner";

export default function Nav() {
    return (
        <div className = "nav-page">
            <NavBanner />
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

    )
}
