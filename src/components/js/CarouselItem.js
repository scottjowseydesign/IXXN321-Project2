import React from 'react';
import "../css/Carousel-Item.css";
import { Link } from "react-router-dom";

export default function CarouselItem(props) {
    return (
        <div className="carousel-item">
            <Link to = "/rings">
                <img src={props.image} className="carousel-item-image" />
            </Link>
        </div>
    )
}
