import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import Pokemon from './Components/Pokemon';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-8 pb-8 pt-32">
        <Pokemon />
      </main>
    </div>
  );
};

export default App;