import React, { Component } from 'react';
import Buttons from './Buttons'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
  }

  render() {
    return (
      <div id="calculator-container">
        <div id="display-results">
          {this.state.result}
        </div>
        <Buttons />
      </div>
    );
  }
}

export default App;
