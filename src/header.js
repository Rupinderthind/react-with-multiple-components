import React, { Component } from 'react';
import './App.css';

class Header extends React.Component {
   render() {
      return (
        <div>
           <h1 className="mainHeading">{this.props.heading}</h1>
           <hr />
        </div>
      );
   }
}
export default Header;