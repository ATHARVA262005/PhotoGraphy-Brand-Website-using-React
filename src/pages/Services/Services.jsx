import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './services.css';
import ServicesCard from '../../components/Services-card/ServicesCard';

const Services = () => {
    return (
        <div>
            <Navbar />
            <ServicesCard />
            <Footer />
        </div>
    );
}

export default Services;
