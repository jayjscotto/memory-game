import React from 'react';
import './game-status.css';

const GameStatus = props => {
  return (
    <div className='game-status'>
      <h1 className='score'>Score: { props.score } || High Score: { props.highScore }</h1> 
    </div>
  );
};

export default GameStatus;
