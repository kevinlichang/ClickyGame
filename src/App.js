import React, { Component } from 'react';
import ClickImage from "./components/ClickImage";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import images from "./images.json";
import './App.css';

class App extends Component {
  // set this.state.images to the images json
  state = {
    images,
    score: 0,
    message: "Click an image to begin!",
    clickedImgIdArr: [],
    topScore: 0

  }

  // shuffle this.state.images array
  randomArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;  
    
  }

  clickedImg = id => {
    // filter the clicked image id into new array and add to clicked on Array
    const imageIds = this.state.images.map(pic => {
      return pic.id
    });

    if (this.state.clickedImgIdArr.includes(id) === false) {
      const pickedImgId = imageIds.filter(picId => picId === id);
      console.log(pickedImgId);

      let newArray = this.state.clickedImgIdArr.concat(pickedImgId);
      console.log(`New Array is ${newArray}`);

      // Set state to new array and increase score by 1
      this.setState({ 
        score: this.state.score + 1,
        message: "You guessed correctly!",
        clickedImgIdArr: newArray,
      }); 
      
      this.handleTopScore();
      

    } else if (this.state.clickedImgIdArr.includes(id) === true) {
      this.setState({ 
        score: 0,
        message: "You guessed incorrectly! Start over",
        clickedImgIdArr: []
      });
      console.log(this.state.clickedImgIdArr)
    }
    const shuffledArr = this.randomArray(this.state.images);
    this.setState({
      images: shuffledArr
    })

    
  }

  // update top score if top score is beaten
  handleTopScore = () => {
    if (this.state.score >= this.state.topScore) {
      this.setState({
        topScore: this.state.topScore + 1
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Jumbotron />
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
