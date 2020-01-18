import React from 'react';
import './game-card.css';

const GameCard = props => {
  return (
    <div className='card'>
      <img className='guess-card-img' src={props.src} />
    </div>
  );
};

export default GameCard;