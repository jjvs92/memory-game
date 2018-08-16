import React, { Component } from 'react';
import Header from "./components/Header";
import Instructions from "./components/Instructions";


class App extends Component {
  state= {
    centerText: "Click an image to begin!"
  }


  render() {
    return (
      <div>
      <Header/>
      <Instructions/>
      </div>
    )

    
  }
}

export default App;
