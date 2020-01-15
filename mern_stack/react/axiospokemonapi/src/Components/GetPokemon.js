import React, { useState } from 'react';
import axios from 'axios';

const GetPokemon = (props) => {
    // state to store response from my fetch
    const [ resData, setResData ] = useState([]);
    // const [ pokeList, setPokeList ] = useState([]);

    // useEffect( () => {
    //     axios.get(props.url).then(response => {
    //         setResData(response.data);
    //     })
    // }, []);

    const grabPokemon = e => {
        e.preventDefault();
        axios.get(props.url).then(response => {
            setResData(response.data.results);
        })
        // setPokeList(resData.results);

    }

    return(
        <div className="row">
            <div className="col">
                <h1>Get the damn pokemon using axios</h1>
                <button className="btn btn-outline-dark" onClick={grabPokemon}>Get Pokemon</button>
                <ul>
                    {
                        resData.map((mon, i) =>
                        <li key={i}>#{i+1} - {mon.name}</li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default GetPokemon;