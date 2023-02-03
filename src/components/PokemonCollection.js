import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokeData }) {
  console.log(pokeData);
  const pokeArray = pokeData.map(pokemon => {
    return <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} sprites={pokemon.sprites}/>
  }) //dont forget to have key so react know swhat to do

  return (
    <Card.Group itemsPerRow={6}>
      {pokeArray}
    </Card.Group>
  );

}

export default PokemonCollection;
