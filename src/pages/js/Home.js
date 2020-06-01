import React from 'react';
import { Link } from "react-router-dom";

import Footer from "../../components/js/Footer";
import CircleLink from "../../assets/circle-link.png";
import BlackCircleLink from "../../assets/circle-link-black.png";
import "../css/Home.css";
import "../css/Home-Mobile.css";
import Cordyceps from "../../assets/cordyceps.JPG";
import Anatomical from "../../assets/ring-feature.JPG";
import Supply from "../../assets/supply.jpg";
import Cuba from "../../assets/151cuba.png";

import ImageCarousel from "../../components/js/ImageCarousel";

import Fade from 'react-reveal/Fade';


export default function Home() {
    return (
        <div className = "home-wrap">
            <div className = "home-start">
                <div className = "home-background">
                    <div className="portfolio-title">
                        <Fade left>
                            <h1>PORTFOLIO <br></br>
                            OF <br></br>
                            SCOTT <br></br>
                            JOWSEY.                            
                            </h1>
                        </Fade>
                    </div>
                    <ImageCarousel />
                    {/* <div className = "image-slide">
                        <Fade clear>
                                <div className="slidediv">
                                <img src= {Cordyceps} alt="Portfolio Piece"/>
                                </div>
                                <div className="slidediv">
                                <img src= {Supply} alt="Portfolio Piece"/>
                                </div>
                                <div className="slidediv">
                                <img src= {Anatomical} alt="Portfolio Piece"/>
                                </div>
                                <div className="slidediv">
                                <img src= {Cuba} alt="Portfolio Piece"/>
                                </div>
                        </Fade>
                            
                    </div> */}
                </div>
                <div className="about-me">
                    <Fade bottom>
                        <h1>I AM A UX / UI <br></br>DESIGNER BASED IN 
                        <br></br>WELLINGTON,NEW ZEALAND.</h1>
                    </Fade>
                        
                </div>
                <div className="about-blurb2">
                    <Fade bottom>
                    <h2>I DESIGN AND DEVELOP <br></br> EXPERIENCES THAT <br></br>MAKE PEOPLE'S <br></br>LIVES SIMPLE</h2>
                    </Fade>
                </div>
                <div className="about-blurb-link">
                    <Fade left>
                        <div className="blurb-text">
                            <h3>GET TO KNOW ME A LITTLE <br></br> BETTER. </h3>
                        </div>
                        <div className="blurb-link">
                            <img src= {CircleLink} alt="About Page Link"/>
                            <h4>VISIT THE ABOUT PAGE</h4>
                        </div>
                    </Fade>
                </div>
            </div>
            <div className = "home-projects">
                <div className="project-header">
                    <div className="title-wrap">
                        <Fade left>
                            <h1>PROJECTS</h1>
                        </Fade>
                    </div>
                </div>
                <div className="project-div">
                    <div className="project-box">

                        <Fade right>
                            <div className="project-info">
                                <div className="project-infobox">
                                    <div className="project-date">
                                        <div className="project-year">
                                        <p>2019</p>  
                                        </div>
                                        <div className="date-hyphen">
                                        </div>
                                        <div className="project-month">
                                            <p>05</p>
                                        </div>
                                    </div>
                                    <div className="project-desc">
                                    <h3>Printed Products</h3> 
                                    </div>
                                    <div className="project-name">
                                        <h2>Anatomical Tolerance</h2>
                                    </div>
                                </div>
                                <div className="project-link">
                                    <Link to = "/rings" className = " ">
                                        <img src= {BlackCircleLink} alt="Project Link"/>
                                    </Link>  
                                </div>
                            </div>
                            <div className="project-link-image">
                                <img src= {Anatomical} alt="Portfolio Piece"/>
                            </div>
                        </Fade>
                    </div>
                    
                    <div className="project-box">
                        <Fade right>
                            <div className="project-info">
                                <div className="project-infobox">
                                    <div className="project-date">
                                        <div className="project-year">
                                        <p>2019</p>  
                                        </div>
                                        <div className="date-hyphen">
                                        </div>
                                        <div className="project-month">
                                            <p>04</p>
                                        </div>
                                    </div>
                                    <div className="project-desc">
                                    <h3>Printed Products</h3> 
                                    </div>
                                    <div className="project-name">
                                        <h2>Cordyceps</h2>
                                    </div>
                                </div>
                                <div className="project-link">
                                    <img src= {BlackCircleLink} alt="Project Link"/>  
                                </div>
                            </div>
                            <div className="project-link-image">
                                <img src= {Cordyceps} alt="Portfolio Piece"/>
                            </div>
                        </Fade>
                    </div>
                    <div className="project-box">
                        <Fade right>
                            <div className="project-info">
                                <div className="project-infobox">
                                    <div className="project-date">
                                        <div className="project-year">
                                        <p>2019</p>  
                                        </div>
                                        <div className="date-hyphen">
                                        </div>
                                        <div className="project-month">
                                            <p>03</p>
                                        </div>
                                    </div>
                                    <div className="project-desc">
                                    <h3>Shopping Application</h3> 
                                    </div>
                                    <div className="project-name">
                                        <h2>Supply.</h2>
                                    </div>
                                </div>
                                <div className="project-link">
                                    <img src= {BlackCircleLink} alt="Project Link"/>  
                                </div>
                            </div>
                            <div className="project-link-image">
                                <img src= {Supply} alt="Portfolio Piece"/>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="contact-wrap">
                <div className="contact-box">
                        <Fade left>
                            <h1>GET IN TOUCH.</h1>
                        </Fade>
                        <Fade bottom>
                            <h2>LET'S WORK TOGETHER TO CREATE SOMETHING SPECIAL.</h2>
                        </Fade>
                    <div className="email-link">
                        <Fade left>
                            <p>Flick me an email at:</p>
                            <h3>SCOTTJOWSEYDESIGN@GMAIL.COM</h3>
                        </Fade>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
