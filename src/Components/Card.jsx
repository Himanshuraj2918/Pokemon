import React, { useRef,useContext } from 'react';
import { Download } from 'lucide-react';
import { PokemonContext } from "./context/contex";
const Card = () => {
  const cardRefs = useRef({});
  const {pokemonData} = useContext(PokemonContext);
  const downloadCardAsImage = async (pokemonId, pokemonName) => {
    const cardElement = cardRefs.current[pokemonId];
    
    if (!cardElement) {
      console.error('Card element not found');
      return;
    }

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardElement, {
        backgroundColor: '#ffffff',
        useCORS: true,
        allowTaint: true,
        removeContainer: true,
        imageTimeout: 15000,
        logging: false,
        width: cardElement.offsetWidth,
        height: cardElement.offsetHeight,
      });
      const link = document.createElement('a');
      link.download = `${pokemonName.toLowerCase().replace(/\s+/g, '-')}-card.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading card:', error);
      alert('Failed to download card. Please try again.');
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:p-20 sm:p-15">
      {pokemonData.map((currentData) => (
        <div 
          key={currentData.id}
          ref={(el) => (cardRefs.current[currentData.id] = el)}
          className="w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out p-6 border-2 border-gray-100 hover:border-gray-200 transform hover:-translate-y-1 hover:scale-105 relative group"
        >
          <button
            onClick={() => downloadCardAsImage(currentData.id, currentData.name)}
            className="absolute top-4 right-4 p-2  text-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-gray-800 hover:scale-110 z-10 shadow-lg"
            title="Download as Image"
          >
            <Download size={16} />
          </button>
          <div className="text-center mb-4">
            <img
              src={currentData.sprites.other.dream_world.front_default}
              alt={currentData.name}
              className="w-32 h-32 mx-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3"
              crossOrigin="anonymous"
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