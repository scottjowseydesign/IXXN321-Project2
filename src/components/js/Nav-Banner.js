import React from 'react';
import "../css/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className = "nav-wrap">
            <div className = "logo">
                <Link to = "/home">Image Here
                </Link>
            </div>
            <div className = "exit-button">
                <Link to = "/home">Close Nav Button
                </Link>
            </div>
            
        </div>
    )
}