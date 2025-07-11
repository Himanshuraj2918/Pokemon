import React, { useState, useEffect } from "react";
import Card from './Card';

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FetchPokemon = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await res.json();

      const detailData = data.results.map(async (currPokemon) => {
        const response = await fetch(currPokemon.url);
        return await response.json();
      });

      const detailResponse = await Promise.all(detailData);
      setPokemonData(detailResponse);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    FetchPokemon();
  }, []);

  return (
    <>
      {isLoading ? (
        <p className="text-center">Loading Pokémon...</p>
      ) : (
        <Card pokemonData={pokemonData} />
      )}
    </>
  );
};

export default Pokemon;
