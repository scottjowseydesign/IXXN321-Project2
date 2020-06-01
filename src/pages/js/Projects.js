import React from 'react';
import { Link } from "react-router-dom";

import Footer from "../../components/js/Footer";
import BlackCircleLink from "../../assets/circle-link-black.png";
import Cordyceps from "../../assets/cordyceps.JPG";
import Anatomical from "../../assets/ring-feature.JPG";
import Supply from "../../assets/supply.jpg";
import Fade from 'react-reveal/Fade';

export default function Projects() {
    return (
        <div className="project-wrap">
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
                                        <Link to = "/rings">
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
            <Footer/>
        </div>
    )
}
