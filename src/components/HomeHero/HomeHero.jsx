import React from 'react';
import './HomeHero.css';

const HomeHero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <span className="hero-title">John Michael</span>
                <h2 className="hero-subtitle">
                    <span>PHOTOGRAPHY</span>
                    <span>STUDIO</span></h2>
                <a href="#contact" className="hero-button">Book Now</a>
            </div>
            <div className="hero-image">
                <img src="https://static.wixstatic.com/media/2e2a49_72930eb06056462eaac3bb8d42278615~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_72930eb06056462eaac3bb8d42278615~mv2.jpg" alt="Hero" />
            </div>
        </div>
    );
}

export default HomeHero;
