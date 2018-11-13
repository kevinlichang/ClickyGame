import React, { Component } from 'react';
import ClickImage from "./components/ClickImage";
import images from "./images.json";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // set this.state.images to the images json
  state = {
    images
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
