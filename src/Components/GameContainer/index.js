import React, { Component } from 'react';

// import all images here
// put them in an array
// generate an image card for each
// click handler that will be passed through to image card
// takes the id of that image and adds it to an array 
// inside the game container's state object



class GameContainer extends Component {
    state = {
        // array to contain all of the images that have been clicked
        clicked: []
    }

    render() {
        return (
            <div className="game-container">
                {this.images.map(image => {
                    return (
                        <GameCard />
                    )
                })}
            </div>
        )
    }
}

export default GameContainer;