import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CommercialPortfolio from '../../components/CommercialPortfolio/CommercialPortfolio';

function Commercial() {
    return (
        <div>
            <Navbar />
            <h1>Commercial</h1>
            <CommercialPortfolio />
            <Footer />
        </div>
    );
}

export default Commercial;