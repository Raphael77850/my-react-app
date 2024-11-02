import { useState } from "react";
import PokemonCard from './components/PokemonCard';


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
      imgSrc: "#",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNextPokemon = () => {
    setPokemonIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousPokemon = () => {
    setPokemonIndex((prevIndex) => prevIndex - 1);
  };
      
return(
  <>      
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <section>
      <h1>Pokemon Index : {pokemonIndex}</h1>

      {pokemonIndex > 0 && (
        <button type="button" onClick={handlePreviousPokemon}>Précédent</button>
      )}

      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleNextPokemon}>Suivant</button>
      )}
    </section>       
  </>
  );
}
export default App;