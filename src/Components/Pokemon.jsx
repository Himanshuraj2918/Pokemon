import React, {  useContext } from "react";
import Card from './Card';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PokemonContext } from "./context/contex";

const Pokemon = () => {
  const {
    isLoading,
    pokemonData,
    handlePrev,
    offset,
    page,
    handleNext,
    totalPages,
    limit
  } = useContext(PokemonContext)
  return (
    <>
      {isLoading ? (
        <p className="text-center mt-20">Loading Pokémon...</p>
      ) : (
        <>
          <Card pokemonData={pokemonData} />

          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={handlePrev}
              disabled={offset === 0}
              className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 shadow-sm hover:shadow-md"
            >
              <ChevronLeft size={18} />
              <span className="font-medium hidden sm:inline">Previous</span>
            </button>

            <span className="text-gray-700 font-semibold text-sm bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              Page {page + 1} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={offset + limit >= 1302}
              className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-300 shadow-sm hover:shadow-md"
            >
              <span className="font-medium hidden sm:inline">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Pokemon;
