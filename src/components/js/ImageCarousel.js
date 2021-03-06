import React from 'react';
import Carousel from 'nuka-carousel';
import CarouselItem from '../js/CarouselItem';
import Cordyceps from "../../assets/cordyceps.JPG";
import Anatomical from "../../assets/ring-feature.JPG";
import Supply from "../../assets/supply.jpg";
import Cuba from "../../assets/151cuba.png";
import "../css/Carousel-Item.css";

export default function ImageCarousel() {
    
    return (
        <>
        <Carousel autoplay={ true } width="70vw" height="75vh" defaultControlsConfig={{ nextButtonText: 'Next', prevButtonText: 'Previous' }}>

            <CarouselItem image={Cordyceps} />
            <CarouselItem image={Anatomical} />
            <CarouselItem image={Supply} />
            <CarouselItem image={Cuba} />
              
        </Carousel>  
        </>
    )
}
