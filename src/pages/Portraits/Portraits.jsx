import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'; 
import PortraitPortfolio from '../../components/PortraitPortfolio/PortraitPortfolio';


function Portraits() {
    return (
        <div>
            <Navbar />
            <h1>Portraits</h1>
            <PortraitPortfolio />
            <Footer />
        </div>
    );
}

export default Portraits;