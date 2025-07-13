import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Pokemon from './Components/Pokemon';
import PokemonProvider from './Components/context/contex';

const App = () => {
  return (
    <PokemonProvider>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 pb-8 pt-32 md:pt-8">
        <Pokemon />
      </main>
    </div>
    </PokemonProvider>
  );
};

export default App;