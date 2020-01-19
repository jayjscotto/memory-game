import React from 'react';
import './game-status.css';

const GameStatus = props => {
  return (
    <div className='game-status'>
      <div className='status-card'>
        <h3>
        Click on an image to earn points, but don't click on any more than once!
        </h3>
        <div className='score'>
          <h1 id='game-score' className={props.scoreChange}>Score: {props.score}</h1>
          <h1 className='score-text-divider'>||</h1>
          <h1 id='high-score' className={props.scoreChange}>High Score: {props.highScore}</h1>
        </div>
      </div>
    </div>
  );
};

export default GameStatus;
