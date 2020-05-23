import React from 'react';
import "../css/Footer.css";
import WhiteLogo from "../../assets/whiteStroke-logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className = "Footer-box" >
            <div className="footer-wrap">
                <div className="footer-left">
                    <div className="logo-links">
                        <img src= { WhiteLogo } alt="Scott Jowsey Logo"/>
                    </div>
                    <div className="footer-social">
                        <Link to = " " className = "social-footer">INSTAGRAM</Link>
                        <Link to= " " className = "social-footer" >LINKEDIN</Link>
                        <Link to= " " className = "social-footer">BEHANCE</Link>
                        <Link to= " " className = "social-footer">GITHUB</Link>
                    </div>
                </div>
                <div className="footer-mid">
                    <Link to = "/rings " className = "footer-links"  >PROJECTS</Link>
                    <Link to= "/about" className = "footer-links" >ABOUT</Link>
                    <Link to= "/contact" className = "footer-links">CONTACT</Link>
                </div>
                <div className="footer-right">
                    <p>SCOTT JOWSEY DESIGN     2020</p>
                </div>
            </div>
            
        </div>
    )
}
