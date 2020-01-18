import React, { Component } from 'react';
import './container.css';
import GameCard from '../GameCard';
// import all images here
import card1 from '../../images/arya.jpg';
import card2 from '../../images/baelish.jpg';
import card3 from '../../images/bran.jpg';
import card4 from '../../images/cersei.png';
import card5 from '../../images/danaerys.jpg';
import card6 from '../../images/jon-snow.jpg';
import card7 from '../../images/margaery.png';
import card8 from '../../images/mountain.jpg';
import card9 from '../../images/ned.jpg';
import card10 from '../../images/sansa.png';
import card11 from '../../images/tyrion.jpg';
import card12 from '../../images/varys.jpg';
// put them in an array
// generate an image card for each
// click handler that will be passed through to image card
// takes the id of that image and adds it to an array
// inside the game container's state object



class GameContainer extends Component {
  state = {
    // array to contain all of the images that have been clicked
    clicked: []
  };

  images = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];

  render() {
    return (
      <div className='game-container'>
        {this.images.map(image => {
          return <GameCard src={image}/>;
        })}
      </div>
    );
  }
}

export default GameContainer;
