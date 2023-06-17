import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="dashboard">
      <div className="game-choise">
        <div className="game-option">1</div>
        <div className="game-option">2</div>
        <div className="game-option">3</div>
      </div>
      <div className="rating"></div>
    </div>
  );
};

export default HomePage;
