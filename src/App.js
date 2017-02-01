import React, { Component } from 'react';
import Buttons from './Buttons'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      displayer: 0,
      updateDisplayer: false,
      method: ''
    };
    this.displayDigits = this.displayDigits.bind(this);
    this.addDigits = this.addDigits.bind(this);
    this.subtractDigits = this.subtractDigits.bind(this);
    this.multiplyDigits = this.multiplyDigits.bind(this);
    this.divideDigits = this.divideDigits.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  displayDigits(digit) {
    var prevDigit = this.state.displayer;
    if (this.state.updateDisplayer) {
      console.log('zero')
      this.setState({
        displayer: prevDigit + digit
      })
    } else {
        this.setState({
          displayer: digit,
          updateDisplayer: true
        })
    }
  }

  addDigits() {
    var prevResult = this.state.result
    this.setState({
      result: parseInt(this.state.displayer) + prevResult,
      method: 'add',
      updateDisplayer: false
    })
  }

  subtractDigits() {
    var prevResult = this.state.result
    this.setState({
      result: parseInt(this.state.displayer) - prevResult,
      method: 'subtract',
      updateDisplayer: false
    })
  }

  multiplyDigits() {
    this.setState({
      result: parseInt(this.state.displayer),
      method: 'multiply',
      updateDisplayer: false
    })
  }

  divideDigits() {
    this.setState({
      result: parseInt(this.state.displayer),
      method: 'divide',
      updateDisplayer: false
    })
  }

  showResult() {
    var displayedResult = this.state.result
    var newResult = parseInt(this.state.displayer)
    if(this.state.method === 'add') {
      this.setState({
        displayer: displayedResult + newResult,
        result: 0,
        updateDisplayer: false
      })
    } else if(this.state.method === 'subtract') {
      this.setState({
        displayer: displayedResult - newResult,
        result: 0,
        updateDisplayer: false
      })
    } else if(this.state.method === 'multiply') {
      this.setState({
        displayer: displayedResult * newResult,
        result: 0,
        updateDisplayer: false
      })
    } else {
      this.setState({
        displayer: displayedResult / newResult,
        result: 0,
        updateDisplayer: false
      })
    }

  }

  render() {
    return (
      <div id="calculator-container">
        <div id="display-results">
          {this.state.displayer}
        </div>
        <Buttons addToDisplayer={this.displayDigits}/>
        <div onClick={this.addDigits}>
        +
        </div>
        <div onClick={this.subtractDigits}>
        -
        </div>
        <div onClick={this.multiplyDigits}>
        *
        </div>
        <div onClick={this.divideDigits}>
        /
        </div>
        <div onClick={this.showResult}>
        =
        </div>
      </div>
    );
  }
}

export default App;
