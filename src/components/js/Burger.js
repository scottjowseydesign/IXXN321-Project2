import React from 'react';
import "../css/Burger.css";

const Burger = props => (
    <div className="toggle-button" onClick = {props.click}>
        <div className="burger-line" />
        <div className="burger-line2" />
    </div>
);

export default Burger;
