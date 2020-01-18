import React from 'react';
import './game-card.css';

const GameCard = props => {
  return (
      <img
        className='card'
        {...props}
      />
  );
};

export default GameCard;
