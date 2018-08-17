import React, { Component } from 'react';
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import HouseCards from "./components/HouseCards";
import Characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";


class App extends Component {
  state= {
    centerText: "Click an image to begin!",
    score: 0,
    highScore: 0,
    Characters
  }

  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  handleClick = id => {
    let data = this.state.Characters;
    let char = {};
    // console.log(data)
    // element data array that comes from characters jSOn file 
    data.forEach((element, index) => {

      if(element.id === id){
        char.specific = element

        char.index = index;
      }


    });


     if(char.specific.clicked) {
       this.setState({score: 0, centerText: "Incorrect Guess"})
       console.log("CLICKED")

       for(var i = 0; i<data.length; i++){
         data[i].clicked = false
       }
       console.log(data);
     } else{

      data[char.index].clicked = true;

      let newScore= this.state.score + 1;
       this.setState({score: newScore})
     }

      

    console.log(char);

    this.shuffle(data);
    // console.log(data);
    this.setState({Characters: data});
    

  }


  render() {
    return (
      <div>
      <Header
      centerText={this.state.centerText}
      score={this.state.score}
      highScore={this.state.highScore}></Header>

      <Instructions/>

      <HouseCards>

        {this.state.Characters.map(Character =>(
       
       <CharacterCard 
          id= {Character.id}
          key = {Character.id}
          name={Character.name}
          thumbnail={Character.thumbnail}
          handleClick = {this.handleClick}
          />
        ))}

      </HouseCards>

      <Footer/>

      </div>
    )

    
  }
}

export default App;
