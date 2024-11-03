import { useState } from "react";
import NavBar from "./components/NavBar";
import PokemonCard from "./components/PokemonCard";
import "./App.css"


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    alt: "bulbasaur",
    color:"#90EE90",
    },
    {
      name: "charmander",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      alt: "charmander",
      color: "#FFABAB",
    },
    {
      name: "squirtle",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      alt:"squirtle",
      color:"#ADD8E6"
    },
    {
      name: "pikachu",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      alt:"pikachu",
      color:"#FFFFED"
    },
    {
      name: "mew",
      imgSrc: "#",
      alt:"mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

      
return(
  <>      
    <nav>
      <NavBar
        pokemonIndex={pokemonIndex}
        setPokemonIndex={setPokemonIndex}
        pokemonList={pokemonList}
        />
    </nav>
    <main>
      
    </main>
  </>
  );
}

export default App;