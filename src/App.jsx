import './App.css'
import { useEffect, useState } from 'react';

import  PokemonCard  from './components/PokemonCard'
import NavBar from './components/NavBar'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type: "grass"
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        type: "fire"
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      type: "water"
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        type: "electric"
        
    },
    {
      name: "mew",
      type: "fairy"
    },
  ];
function App() {
  useEffect(() => {
    alert('hello pokemon trainer :)')
  },[0])
  const [ pokemonIndex, setPokemonIndex ] = useState(0)

  
  return (
    <div>
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
  )
}

export default App
