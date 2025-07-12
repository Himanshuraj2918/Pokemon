import React from 'react';

const Card = ({ pokemonData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:p-20 sm:p-15">
      {pokemonData.map((currentData) => (
        <div 
          key={currentData.id} 
          className="w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-6 border-2 border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="text-center mb-4">
            <img
              src={currentData.sprites.other.dream_world.front_default}
              alt={currentData.name}
              className="w-32 h-32 mx-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
            />
          </div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-3 capitalize transition-colors duration-300 hover:text-blue-600">
            {currentData.name}
          </h2>
          <div className="bg-gray-50 rounded-lg p-4 mb-4 transition-colors duration-300 hover:bg-gray-100">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Height</span>
                <span className="font-bold text-gray-800">{currentData.height}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-200">
                <span className="text-gray-600 font-medium">Weight</span>
                <span className="font-bold text-gray-800">{currentData.weight}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-gray-600 font-medium">Base Experience</span>
                <span className="font-bold text-gray-800">{currentData.base_experience}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;