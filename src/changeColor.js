import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChangeColor extends React.Component {
	constructor(props) {
      super(props);
    
      this.state = {
      	temp: 0,
      }
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  	}

  	findDomNodeHandler() {
      //console.log(this.state.temp)
      var myDiv = document.getElementById('myDiv');
      if (this.state.temp === 0) {
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
        this.setState({temp: 1});
      }
      else{
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
        this.setState({temp: 0});
      }
   	}

   	render() {
      return (
        <div>
           <button onClick={this.findDomNodeHandler}>Change Color</button>
           <p id="myDiv">Click to change the color of this text</p>
        </div>
      );
   	}
}
export default ChangeColor;