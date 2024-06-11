// PortraitPortfolio.jsx

import React, { useState } from 'react';
import './PortraitPortfolio.css';
import portraitData from './portraitData'; // Import your portrait data

const PortraitPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCarousel = (image) => {
    setSelectedImage(image);
  };

  const closeCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <div className="portrait-portfolio">
      {portraitData.map((item) => (
        <div
          key={item.id}
          className="portrait-item"
          onClick={() => openCarousel(item)}
        >
          <img src={item.imageUrl} alt={item.title} />
          <div className="overlay">
            
          </div>
        </div>
      ))}

      {/* Portrait Image Carousel */}
      {selectedImage && (
        <div className="portrait-carousel">
          <img src={selectedImage.imageUrl} alt={selectedImage.title} />
          <button className="full-screen-button" onClick={closeCarousel}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default PortraitPortfolio;
