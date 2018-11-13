import React, { Component } from 'react';
import ClickImage from "./components/ClickImage";
import images from "./images.json";
import './App.css';

class App extends Component {
  // set this.state.images to the images json
  state = {
    images
  }

  // 
  displayRandom = () => {

  }

  clickImage = id => {
    // filter the clicked image id into new array
  }

  render() {
    return (
      <div>
        <div className="image-container container-fluid">
          {this.state.images.map(image => (
            <ClickImage
              key={image.id}
              id={image.id}
              name={image.name}
              image={image.image}
            />
          ))}

        </div>
      </div>
    );
  }
}

export default App;
