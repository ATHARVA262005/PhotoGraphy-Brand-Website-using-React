// Portfolio.jsx

import React from 'react';
import './PortfolioCard.css';
import portfolioData from './portfolioData'; // Import your portfolio data

const PortfolioCard = () => {
  return (
    <div className="portfolio">
      {portfolioData.map((item) => (
        <a href={item.link} key={item.id} className="portfolio-item">
          <img src={item.imageUrl} alt={item.title} />
          <div className="overlay">
            <p>{item.title}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PortfolioCard;
