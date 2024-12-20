

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
};


const PokemonCard = ({ pokemon } : PokemonCardProps) => {
  return (
    <figure className="card" style={{backgroundColor: pokemon.color }}>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )} 
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
};

export default PokemonCard;