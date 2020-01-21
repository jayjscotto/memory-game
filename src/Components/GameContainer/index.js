import React, { Component } from 'react';
import './container.css';
import GameCard from '../GameCard';
import GameStatus from '../GameStatus';
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
    score: 0,
    highScore: 0,
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
    ],
    scoreChange: ''
  };


  cardClick = e => {
    // get the id from the card clicked
    const id = e.target.id;
    // create a new array with the old array of clicked cards, and add the new one
    const clicked = [...this.state.clicked, id];

    if (this.state.clicked.indexOf(id) === -1) {
      // update the score
      let score = this.state.score;
      score++;
      // add one to the score and update the clicked array to track which images have been clicked
      this.setState({ score });
      this.setState({ clicked });
      this.setState({scoreChange: 'green'});
    } else {
      //reset the clicked array and return the score to 0
      const clicked = [];
      this.setState({ clicked });
      this.setState({scoreChange: 'red'});
      this.setState({ score: 0 });
    }

    // return the shuffling card function
    return this.shuffleCards(this.state.images);
  };

  componentDidUpdate() {
    // if the score is higher than the high score, update the high score
    if (this.state.highScore < this.state.score) {
      this.setState({ highScore: this.state.score });
    }
    if (this.state.scoreChange !== '') {
      this.setState({scoreChange: ''});
    }
  }

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
          alt={image.image}
        />
      );
    });
  };

  render() {
    return (
      <div className='game-container'>

        <GameStatus scoreChange={this.state.scoreChange} score={this.state.score} highScore={this.state.highScore} />
        <div className='card-container'>{this.printCards()}</div>
      </div>
    );
  }
}

export default GameContainer;
