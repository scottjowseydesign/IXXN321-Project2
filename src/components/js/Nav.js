import React from 'react';
import "../css/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className = "nav-wrap">
            <div className = "logo">
                <Link to = "/home">Image Here
                </Link>
                <div className = "logotype">
                 <h3>SCOTT JOWSEY</h3>
                 <h4>UX / UI DESIGNER</h4>
                </div>
            </div>
            <div className = "menu-link">
                <Link to = "/nav">Menu Bar
                </Link>
            </div>
            
        </div>
    )
}
