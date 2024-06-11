import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MaturnityPortfolio from '../../components/MaturnityPortfolio/MaturnityPortfolio';

const Maternity = () => {
    return (
        <div>
            <Navbar />
            <h1>Maternity</h1>
            <MaturnityPortfolio />
            <Footer />
        </div>
    );
};

export default Maternity;