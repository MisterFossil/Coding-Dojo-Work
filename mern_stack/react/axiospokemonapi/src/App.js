import React from 'react';
import GetPokemon from './Components/GetPokemon';

function App() {
  // URL to grab info from

  return (
    <div className="container">
      <GetPokemon url="https://pokeapi.co/api/v2/pokemon?limit=964"/>
    </div>
  );
}

export default App;
