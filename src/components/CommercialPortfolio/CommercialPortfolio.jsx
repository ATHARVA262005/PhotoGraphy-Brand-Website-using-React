// PortraitPortfolio.jsx

import React, { useState } from 'react';
import './CommercialPortfolio.css';
import commercialData from './commercialData'; // Import your portrait data

const CommercialPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCarousel = (image) => {
    setSelectedImage(image);
  };

  const closeCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <div className="commercial-portfolio">
      {commercialData.map((item) => (
        <div
          key={item.id}
          className="commercial-item"
          onClick={() => openCarousel(item)}
        >
          <img src={item.imageUrl} alt={item.title} />
          <div className="overlay">
            
          </div>
        </div>
      ))}

      {/* Portrait Image Carousel */}
      {selectedImage && (
        <div className="commercial-carousel">
          <img src={selectedImage.imageUrl} alt={selectedImage.title} />
          <button className="full-screen-button" onClick={closeCarousel}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default CommercialPortfolio;
