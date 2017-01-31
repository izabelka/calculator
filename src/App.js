import React, { Component } from 'react';
import Buttons from './Buttons'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      displayer: 0,
      wasClickedBefore: false
    };
    this.displayDigits = this.displayDigits.bind(this);
  }

  displayDigits(digit) {
    var prevDigit = this.state.displayer;
    if (this.state.wasClickedBefore) {
      this.setState({
        displayer: prevDigit + digit
      })
    } else {
      if (digit !== '0') {
        this.setState({
          displayer: digit,
          wasClickedBefore: true
        })
      }
    }
  }

  render() {
    return (
      <div id="calculator-container">
        <div id="display-results">
          {this.state.displayer}
        </div>
        <Buttons addToDisplayer={this.displayDigits} />
      </div>
    );
  }
}

export default App;
