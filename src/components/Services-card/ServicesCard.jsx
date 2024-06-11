import React from 'react';
import "./servicesCard.css";
import servicesData from './servicesData';

const ServicesCard = () => {
    return (
      <>
      <h1>Services</h1>
      <div className="services-container">
        {servicesData.map((service) => (
          <div className="service" key={service.id}>
            <div className="service-image">
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <div className="service-content">
              <span className="service-title">{service.title}</span>
              <hr></hr>
              <h2 className="service-subtitle">
                <span>{service.hours}</span>
                <span>{service.price}</span>
              </h2>
              <a href={service.link} className="service-button">
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  };

export default ServicesCard;