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

  //array of images for the cards
  images = [
    { image: card1, key: 1 },
    { image: card2, key: 2 },
    { image: card3, key: 3 },
    { image: card4, key: 4 },
    { image: card5, key: 5 },
    { image: card6, key: 6 },
    { image: card7, key: 7 },
    { image: card8, key: 8 },
    { image: card9, key: 9 },
    { image: card10, key: 10 },
    { image: card11, key: 11 },
    { image: card12, key: 12 }
  ];

  cardClick(e) {
    console.log(e.target.key);
  };

  render() {
    return (
      <div className='game-container'>
        {this.images.map((image) => {
          return (
            <GameCard
              key={image.key}
              onClick={this.cardClick}
              src={image.image}
              alt='Got Image'
            />
          );
        })}
      </div>
    );
  }
}

export default GameContainer;
