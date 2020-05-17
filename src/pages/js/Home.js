import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeBox from "../../components/js/Home";
import NavBar from "../../components/js/Nav";
import Footer from "../../components/js/Footer";

export default function Home() {
    return (
        <div className = "App">
            <NavBar />
            <HomeBox />
            <Footer />
        </div>
    )
}
