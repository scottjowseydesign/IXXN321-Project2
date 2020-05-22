import React from 'react';
// import { Link } from "react-router-dom";

import HomeBox from "../../components/js/Home";
import Footer from "../../components/js/Footer";
// import NavBanner from "../../components/js/Nav-Banner";

import "../css/Nav.css";

export default function Home() {
    return (
        <div className = "App">
            <HomeBox />
            <Footer />
        </div>
    )
}
