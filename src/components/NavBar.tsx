import { useState } from "react";
import PokemonCard from './PokemonCard';

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
};

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList}: NavBarProps) {
  const handleNextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handlePreviousPokemon = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handlePokemonClick = (index: number) => {
    setPokemonIndex(index);
  };
        
return(
  <>      
    <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    <nav>
      <h1>Pokemon Index : {pokemonIndex}</h1>

        {pokemonIndex > 0 && (
        <button type="button" onClick={handlePreviousPokemon}>Précédent</button>
      )} 

        {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleNextPokemon}>Suivant</button>
      )}  
        
        {pokemonList.map((pokemon, index) => (
          <button type="button"
          key={pokemon.name}
          onClick={() => setPokemonIndex(index)}
          className={index === pokemonIndex ? "active" : ""}
          >
            {pokemon.name}
          </button>
        ))}
    </nav>
  </>        
);  
}

export default NavBar;