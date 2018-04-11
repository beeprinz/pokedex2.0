import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
const axios = require("axios");

class App extends Component {

  state = {
    pokemon: []
    }

  componentWillMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(res =>  res.data.results)
      .then(pokemon => this.setState({pokemon}));
}

renderPokemon() {
  return this.state.pokemon.map((poke, index)=>{
    return  ( 
         
    <div className="card mb-4" key={index}>
      <div className="card-header">Pokemon</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{poke.name}</p>
        </blockquote>
      </div>
    </div>
    )
  })
}

  render() {
    return <main>
        <div className="jumbotron">
          <h1>Pokedex</h1>
        </div>

<div className = 'container'>
{this.renderPokemon()}
        {/* <div className="card">
          <div className="card-header">Pokemon</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>
           Pokemon Names and info
              </p>
        
            </blockquote>
          </div>
        </div> */}
  </div>
      </main>;
  }
}

export default App;
