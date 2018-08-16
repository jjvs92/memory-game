import React, { Component } from 'react';
import Header from "./components/Header";
import Instructions from "./components/Instructions";


class App extends Component {
  state= {
    centerText: "Click an image to begin!",
    score: 0,
    highScore: 0
  }


  render() {
    return (
      <div>
      <Header
      centerText={this.state.centerText}
      score={this.state.score}
      highScore={this.state.highScore}/>
      <Instructions/>
      </div>
    )

    
  }
}

export default App;
