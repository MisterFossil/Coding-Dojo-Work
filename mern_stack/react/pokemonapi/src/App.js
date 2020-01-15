import React, {useState} from 'react';

const App = (props) => {
  const [pokemon, setPokemon] = useState([]);

  async function getPoke() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=964";
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data.results);
    console.log(pokemon);
  } 
  
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col">
            <button className=" btn btn-outline-danger" onClick={getPoke}>Fetch Them Pokemans!</button>
          </div>
        </div>
        <div className="row">
          <div className="col">

            <h2>Who's that pokemon?</h2>
            <ul>
              {
                pokemon.map((poke,i) =>
                <li key={i}>#{i+1} - {poke.name}</li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
}


export default App;
