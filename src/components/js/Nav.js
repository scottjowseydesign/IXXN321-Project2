import React from 'react';
import "../css/Nav.css";
import { Link } from "react-router-dom";
import ScottLogo from "../../assets/black-logo.png";
import Burger from "../js/Burger";



    const Nav = props => (
            <div className = "navigation-box">
                <div className = "nav-wrap">
                    <div className = "logo">
                        <Link to = "/" className = "logoCircle" >
                            <img src = {ScottLogo} alt = "Scott Jowsey Logo" />
                        </Link>
                        <div className = "logotype">
                            <h3>SCOTT JOWSEY</h3>
                            <h4>UX / UI DESIGNER</h4>
                        </div>
                    </div>
                    <Burger click={props.burgerClickHandler} />                  
                </div>
            </div>
    )   

export default Nav;

