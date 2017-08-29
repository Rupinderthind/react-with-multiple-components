import React, { Component } from 'react';
import './App.css';

class Emojisearch extends React.Component {
   render() {
      return (
        <div className="listCon">
           	{this.props.emojiData.map((dynamicComponent, i) => <Content 
                  key = {dynamicComponent.symbol} symbol={dynamicComponent.symbol} componentData = {dynamicComponent.title}/>)}
        </div>
      );
   }
}
export default Emojisearch;

class Content extends React.Component {
   render() {
   	const codePointHex = this.props.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
      return (
        <div className="list">
        	<div className="imgCon"><img src={src} alt={this.props.symbol} /></div>
           	<div className="titleCon">{this.props.componentData}</div>
        </div>
      );
   }
}
