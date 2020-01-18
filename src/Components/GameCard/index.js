import React from 'react';
import './game-card.css';

const GameCard = props => {
  return (
    <div className='card'>
      <img className='guess-card-img' {...props} />
    </div>
  );
};

export default GameCard;