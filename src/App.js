import React, { Component } from 'react';
import ClickImage from "./components/ClickImage";
import Navbar from "./components/Navbar/Navbar";
import images from "./images.json";
import './App.css';

class App extends Component {
  // set this.state.images to the images json
  state = {
    images,
    score: 0,
    message: "Click an image to begin!",
    clickedImgArray: []

  }

  // 
  displayRandom = () => {

  }

  clickedImg = id => {
    // filter the clicked image id into new array and add to clicked on Array
    const imageIds = this.state.images.map(pic => {
      return pic.id
    });

    if (this.state.clickedImgArray.includes(id) === false) {
      const pickedImgId = imageIds.filter(picId => picId === id);
      console.log(pickedImgId);

      let newArray = this.state.clickedImgArray.concat(pickedImgId);

      // Set state to new array and increase score by 1
      this.setState({ 
        score: this.state.score + 1,
        message: "You guessed correctly!",
        clickedImgArray: newArray
      });
      console.log(newArray);


    } else if (this.state.clickedImgArray.includes(id) === true) {
      this.setState({ 
        score: 0,
        message: "You guessed incorrectly!",
        clickedImgArray: []
      });
      console.log(this.state.clickedImgArray)
    }
  }

  render() {
    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} />
        <div className="image-container container">
          {this.state.images.map(image => (
            <ClickImage
              key={image.id}
              id={image.id}
              name={image.name}
              image={image.image}
              clickedImg={this.clickedImg}
            />
          ))}

        </div>
      </div>
    );
  }
}

export default App;
