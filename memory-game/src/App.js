import React, { Component } from 'react';
import Header from "./components/Header";
import Instructions from "./components/instructions";


class App extends Component {
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
