import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PortfolioCard from '../../components/Portfolio-card/PortfolioCard';

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <h1>Portfolio</h1>
            <PortfolioCard />
            <Footer />
        </div>
    );
}

export default Portfolio;
