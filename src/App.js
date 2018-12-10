import React, { Component } from 'react';
import { Board } from './components/board/Board.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Board</h1>
        <Board />
      </div>
    );
  }
}

export default App;
