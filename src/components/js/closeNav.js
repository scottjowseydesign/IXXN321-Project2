import React from 'react';

import closeButton from "../../assets/close.png";
import "../css/Burger.css";


const closeNav = props => (
  
        <div className = "closeNav" onClick = {props.click}>
            <img src = {closeButton} alt = "Close Navigation" />            
        </div>
);


export default closeNav;
