import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HomeHero from '../../components/HomeHero/HomeHero';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <HomeHero />
            <Footer />
        </div>
    );
};

export default Home;