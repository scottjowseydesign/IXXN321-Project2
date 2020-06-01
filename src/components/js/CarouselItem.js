import React from 'react';
import "../css/Carousel-Item.css";

export default function CarouselItem(props) {
    return (
        <div className="carousel-item">
            <img src={props.image} className="carousel-item-image" />
        </div>
    )
}
