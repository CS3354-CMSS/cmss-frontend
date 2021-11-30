import React from "react";
import HomePage from './Pages/HomePage'
import "./App.css";


const Hero = ({handleLogout}) => {
    return (
        <section className="hero">
            <nav>
                <h2>Camera Motion Sensing System Dashboard</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <HomePage/>
        </section>
        
    );
};

export default Hero;
