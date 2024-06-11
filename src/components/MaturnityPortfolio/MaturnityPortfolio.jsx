// PortraitPortfolio.jsx

import React, { useState } from 'react';
import './MaturnityPortfolio.css';
import maternityData from './maternityData'; // Import your portrait data

const MaturnityPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCarousel = (image) => {
    setSelectedImage(image);
  };

  const closeCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <div className="maturnity-portfolio">
      {maternityData.map((item) => (
        <div
          key={item.id}
          className="maturnity-item"
          onClick={() => openCarousel(item)}
        >
          <img src={item.imageUrl} alt={item.title} />
          <div className="overlay">
            
          </div>
        </div>
      ))}

      {/* Portrait Image Carousel */}
      {selectedImage && (
        <div className="maturnity-carousel">
          <img src={selectedImage.imageUrl} alt={selectedImage.title} />
          <button className="full-screen-button" onClick={closeCarousel}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default MaturnityPortfolio;
