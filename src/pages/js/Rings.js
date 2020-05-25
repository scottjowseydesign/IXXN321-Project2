import React from 'react';
import "../css/Rings.css";
import MinimumRing from "../../assets/minimum-ring.JPG"; 
import Render1 from "../../assets/render-1.jpg";
import Render2 from "../../assets/render-2.jpg";
import ArrowR from "../../assets/arrow-r.png";
import ArrowL from "../../assets/arrow-l.png";
import Footer from "../../components/js/Footer";

import Cordyceps from "../../assets/cordyceps.JPG";
import Ring1 from "../../assets/ring1.jpg";
import Ring2 from "../../assets/ring2.jpg";
import Ring3 from "../../assets/ring3.jpg";
import Ring4 from "../../assets/ring4.jpg";
import Ring5 from "../../assets/ring5.jpg";
import Ring6 from "../../assets/ring6.jpg";
import Ring7 from "../../assets/ring7.jpg";
import Ring8 from "../../assets/ring8.jpg";
import Ring9 from "../../assets/ring9.jpg";
import Ring10 from "../../assets/ring10.jpg";
import Ring11 from "../../assets/ring11.jpg";

import Fade from 'react-reveal/Fade';

export default function Rings() {
    return (
        <div className = "project-wrap">
            <div className = "project-feature">
                <Fade top>
                    <p>3D PRODUCT DESIGN PROJECT</p>
                </Fade>
                <Fade top>
                    <h1>ANATOMICAL<br></br> TOLERANCE</h1>
                </Fade>
            </div>
            <div className = "project-blurb">
                <Fade right>
                    <div className="blurb-info">
                        <h2>SUMMARY</h2>
                        <p>Anatomical Tolerance was a project which involved producing three rings demonstrating the notion of being "minimum, maximum and ideal” sized. These rings were created using the CAD program Fusion 360 and were produced using the Stratasys J750 3D Printer. One of the rings was also sent to a US-based company called Shapeways who produced the ring using any material of our choice. The project specifically looked into creating designs which best utilised the printer's colour and material capabilities.
                        </p>
                    </div>
                </Fade>
            </div>

            <div className = "project-image-wrap">
                <div className = "project-image">
                        <img src= { MinimumRing }  alt="Ring Project Photography" />
                </div>
            </div>

            <div className = "project-summary">
                <div className = "image-box">
                    <Fade left>
                        <div className = "image1">
                            <img src= { Render1 }  alt="Ring Render" />
                        </div>
                        <div className = "image1">
                            <img src= { Render2 }  alt="Ring Render" />
                        </div>
                    </Fade> 
                </div>

                <Fade right>
                    <div className = "summary-box">
                        <h1>DESIGN SUMMARY</h1>
                        <p>For this project, I wanted to create rings that I could potentially wear on a regular basis. I focused on what I liked in a ring and also heavily considered the printer's capabilities / limitations throughout the entirety of my design process.</p>
                        <p>For the design of the rings themselves, I wanted to focus on using the geometric pattern and try to implement it in a variety of ways - whether that be through colour, variation of materials or inserts / ridges. </p>
                        <p>As a part of this project's hand-in, I decided to present my work through a visual booklet which briefly explains each design and elegantly showcases my work through photography and 3D renders. The booklet was created using the programs Keyshot (producing 3D renders), Photoshop (editing images) and InDesign (designed layout of Booklet).</p>
                    </div>
                </Fade>
            </div>
            
            <div className = "project-imagery">
                <Fade left>
                    <div className="imagery-text">
                        <h1>VISUAL PROJECT DOCUMENT</h1>
                        <p>Scroll across to view the document</p>
                    </div>
                        
                    <div className = "image-slideshow">
                        <div className="slidebox">
                            <img src= { Ring1 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring2 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring3 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring4 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring5 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring6 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring7 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring8 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring9 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring10 } alt="Document Page 1"/>
                        </div>
                        <div className="slidebox">
                            <img src= { Ring11 } alt="Document Page 1"/>
                        </div>

                    </div>
                </Fade>
            </div>
            

            <div className = "project-reflection">
                <Fade right>
                    <h1>WHAT I LEARNT FROM PROJECT</h1>
                    <h1>OR</h1>
                    <h1>REFLECTION OF PROJECT</h1>
                </Fade>
            </div>

            <div className = "project-links">
                <div className = "link-box">
                    <div className = "previous">
                        <Fade right>
                            <div className="line2">
                                <img src= { ArrowL }  alt="Page Link Arrow" />
                                <h2>PREVIOUS</h2>
                            </div>
                            <div className="line2">
                                <h3>SUPPLY SUPERMARKET APP</h3>
                            </div>
                        </Fade>
                    </div>

                    <div className = "next">
                        <Fade left>
                            <div className = "next-link">
                                <div className="line1">
                                    <h1>NEXT</h1>
                                    <img src= { ArrowR }  alt="Page Link Arrow" />
                                </div>
                                <div className="line1">
                                    <h1>CORDYCEPS</h1>
                                </div>
                            </div>
                            <div className = "next-image">
                                <img src= { Cordyceps }  alt="Cordyceps Project" />
                            </div>
                        </Fade>    
                    </div> 
                </div>
            </div>
            <Footer />
        </div>
    )
}


// import React from 'react';
// {/*images*/}
// import ReactLogo from './logo.svg';

// const App = () => {
//   return (
//     <div className="App">
//       <img src={ReactLogo} alt="React Logo" />
//     </div>
//   );
// }


// export default App;
// import React from 'react';
// import {ReactComponent as ReactLogo} from './logo.svg';

// const App = () => {
//   return (
//     <div className="App">
//       <ReactLogo />
//     </div>
//   );
// }
