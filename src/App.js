import React, { Component } from "react";
import Card from "./Components/Card";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import images from "./images.json";
// import Jumbotron from "react-bootstrap/Jumbotron";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    images,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.images.forEach(image => {
      image.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.images.find((image, i) => {
      if (image.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.images.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Memory Game</Header>
        <div className="container">
        {this.state.images.map(image => (
          <Card
            clickCount={this.clickCount}
            id={image.id}
            key={image.id}
            image={image.image}
          />
        ))}
        </div>
        
      </Wrapper>
    );
  }
}

export default App;
