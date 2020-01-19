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
    score: this.clicked.length,
    // array to contain all of the images that have been clicked
    clicked: [],
    //array of images
    images: [
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
    ]
  };

  componentDidMount = () => {
    let images = this.state.images;
    this.setState({ images: images });
  };

  // click handler for each card
  // setState is asynchronous
  // check if the card's id is in the clicked array
  // if it is not, add the id to the state's array
  // if it is, reset the game because the user lost
  cardClick = e => {
    // get the id from the card clicked
    const id = e.target.id;

    // create a new array with the old array of clicked cards, and add the new one
    const clicked = [...this.state.clicked, id];

    // udpate the state
    this.setState({ clicked });

    // return the shuffling card function
    return this.shuffleCards(this.state.images);
  };

  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return this.setState({ images: array });
  };

  printCards = () => {
    return this.state.images.map(image => {
      return (
        <GameCard
          id={image.key}
          key={image.key}
          onClick={this.cardClick}
          src={image.image}
          alt='Got Image'
        />
      );
    });
  };

  render() {
    return <div className='game-container'>{this.printCards()}</div>;
  }
}

export default GameContainer;
