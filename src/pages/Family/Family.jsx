import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FamilyPortfolio from '../../components/FamilyPortfolio/FamilyPortfolio';

const Family = () => {
    return (
        <div>
            <Navbar />
            <h1>Family</h1>
            <FamilyPortfolio />
            <Footer />
        </div>
    );
};

export default Family;