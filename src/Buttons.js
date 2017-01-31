import React, { Component } from 'react';

const buttons = Array.apply(null, {length: 10}).map(Number.call, Number)


class Buttons extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onButtonClick(item, e) {
    this.props.addToDisplayer(item.toString());
  }

	render() {
		return (
    	<div className="calculator-buttons">
      	{buttons.map((button) =>
        	<span key={button.toString()}
          value={button} onClick={this.onButtonClick.bind(this, button)}> {button} </span>
      	)}
    	</div>
  	);
  }
}

export default Buttons;