import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import "./App.css"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    color:"#90EE90",
    },
    {
      name: "charmander",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      color: "#FFABAB",
    },
    {
      name: "squirtle",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      color:"#ADD8E6",
    },
    {
      name: "pikachu",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color:"#FFFFED",
    },
    {
      name: "mew",
      imgSrc: "#",
    },
  ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
    
    useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

    return (
      <>      
      <NavBar 
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
      />
      </>
    );
  }
  
export default App;