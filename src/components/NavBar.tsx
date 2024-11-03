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
    const newIndex = pokemonIndex + 1;
    setPokemonIndex(newIndex);
    
    if (pokemonList[newIndex]?.name.toLowerCase() === 'pikachu') {
      alert("pika pikachu !!!");
    }
  };

  const handlePreviousPokemon = () => {
    const newIndex = pokemonIndex - 1;
    setPokemonIndex(newIndex);
        
    if (pokemonList[newIndex]?.name.toLowerCase() === 'pikachu') {
      alert("pika pikachu !!!");
    }
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
    </nav>       
  </>
  );
}

export default NavBar;