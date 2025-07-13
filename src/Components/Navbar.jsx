import React, { useContext } from 'react';
import { Search, Menu } from 'lucide-react';
import { PokemonContext } from "./context/contex";

const Navbar = () => {
  const {searchCharacter} = useContext(PokemonContext);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">
              Pokémon
            </h1>
          </div>
          
          <div className="flex items-center flex-2 max-w-md md:mx-8 sm:mx-5">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Catch Pokémon..."
                onChange={searchCharacter}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg outline-none"
              />
            </div>
          </div>
          
          <div className='hidden md:block'>
            <Menu className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;