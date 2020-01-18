import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import GameContainer from './Components/GameContainer';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <GameContainer />
      <Footer />
    </div>
  );
}

export default App;
