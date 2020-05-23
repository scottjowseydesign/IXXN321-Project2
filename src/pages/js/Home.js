import React from 'react';

import Footer from "../../components/js/Footer";
import CircleLink from "../../assets/circle-link.png";
import "../css/Home.css";

export default function Home() {
    return (
        <div className = "home-wrap">
            <div className = "home-start">
                <div className = "home-background">
                    <div className="portfolio-title">
                        <h1>PORTFOLIO<br></br> OF <br></br> SCOTT <br></br>JOWSEY.</h1>
                    </div>
                    <div className = "image-slide">
                        
                    </div>
                </div>
                <div className="about-me">
                    <h1>I AM A UX / UI <br></br>DESIGNER BASED IN WELLINGTON,<br></br>NEW ZEALAND.</h1>
                </div>
                <div className="about-blurb2">
                    <h2>BLURB ABOUT HOW I <br></br> APPROACH DESIGN AND <br></br>WHAT I CREATE</h2>
                </div>
                <div className="about-blurb-link">
                    <div className="blurb-text">
                        <h3>GET TO KNOW ME A LITTLE <br></br> BETTER. </h3>
                    </div>
                    <div className="blurb-link">
                        <img src= {CircleLink} alt="About Page Link"/>
                        <h4>VISIT THE ABOUT PAGE</h4>
                    </div>
                </div>
            </div>
            <div className = "home-projects">
                <div className="project-header">
                    <div className="title-wrap">
                        <h1>PROJECTS</h1>
                    </div>
                </div>
                <div className="project-div">
                    <div className="project-box">
                        <div className="project-info">

                        </div>
                        <div className="project-link-image">

                        </div>
                    </div>
                    <div className="project-box">
                        <div className="project-info">

                        </div>
                        <div className="project-link-image">

                        </div>
                    </div>
                    <div className="project-box">
                        <div className="project-info">

                        </div>
                        <div className="project-link-image">

                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-wrap">
                <div className="contact-box">
                    <h1>GET IN TOUCH.</h1>
                    <h2>LET'S WORK TOGETHER TO CREATE SOMETHING SPECIAL.</h2>
                    <div className="email-link">
                        <p>Flick me an email at:</p>
                        <h3>SCOTTJOWSEYDESIGN@GMAIL.COM</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
