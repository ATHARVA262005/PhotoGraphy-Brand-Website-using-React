// PortraitPortfolio.jsx

import React, { useState } from 'react';
import './FamilyPortfolio.css';
import familyData from './familyData'; // Import your portrait data

const FamilyPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openCarousel = (image) => {
    setSelectedImage(image);
  };

  const closeCarousel = () => {
    setSelectedImage(null);
  };

  return (
    <div className="family-portfolio">
      {familyData.map((item) => (
        <div
          key={item.id}
          className="family-item"
          onClick={() => openCarousel(item)}
        >
          <img src={item.imageUrl} alt={item.title} />
          <div className="overlay">
            
          </div>
        </div>
      ))}

      {/* Portrait Image Carousel */}
      {selectedImage && (
        <div className="family-carousel">
          <img src={selectedImage.imageUrl} alt={selectedImage.title} />
          <button className="full-screen-button" onClick={closeCarousel}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default FamilyPortfolio;
