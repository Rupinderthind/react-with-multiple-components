import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Emojisearch from './emojiSearchedList';
import searchEmoji from './filterEmoji';
import ApiGetData from './axiosData';
import ChangeColor from './changeColor';
import AnimationComponent from './animationComponent';
import FormPost from './formPost';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MaterialCon from './materialCon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEmoji: searchEmoji('',20),
    };
    this.setStateHandler = this.setStateHandler.bind(this);

  }

  setStateHandler(event){
    this.setState({allEmoji: searchEmoji(event.target.value,20)});
  }

  render() {
    return (
      <div className="App">
        
        <div className="mainCon">
          <Header heading= "Search for Emoji"/>
          <div className="inputCon">
            <input type="text" placeholder="Search for Emoji..." onChange={this.setStateHandler}/>
          </div>
          <Emojisearch emojiData={this.state.allEmoji}/>
        </div>
        <div className="apiRender">
          <Header heading= "Data from API"/>
          <ApiGetData />
        </div>
        <div className="changeColor">
          <Header heading= "Change Color"/>
          <ChangeColor />
        </div>
        <div className="handleAnimation">
          <Header heading= "Animation"/>
          <AnimationComponent />
        </div>
        <div className="formHandle">
          <Header heading= "Post Form"/>
          <FormPost />
        </div>

        <div className="materialCon">
          <MuiThemeProvider>
            <MaterialCon />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
