import React, { useState } from 'react';
import axios from 'axios';

const Results = (props) => {
    const [keys, setKeys ] = useState([]);
    const [error, setError ] = useState(false);

    const url = `https://swapi.co/api/${props.formParams.category}/${props.formParams.id}`;

    const onButton = event => {
        event.preventDefault();
        console.log (url);

        axios.get(url).then(res => {
            console.log(res.data);
            setKeys(res.data);
            setError(false);
        }).catch(e => {
            setError(true);
        })
    }

    const items = [];

    for(let key in keys) {
        items.push(<p><span className="font-weight-bold">{key}:</span> {keys[key]}</p>);
    }

    return(
        <>
            {!error ? (
                <div>
                    <div className="row mt-4">
                        <div className="col">
                            <button className="btn btn-outline-warning" onClick={onButton}>Find Droids</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <ul>
                                {items.map((attr,i) =>
                                <div key={i}>{attr}</div>
                                )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
             ) :(
                 <div className="row mt-4">
                        <h1>These aren't the droids you're looking for</h1>
                        <div className="col">
                            <button className="btn btn-outline-warning" onClick={onButton}>Find Droids</button>
                        </div>
                    </div>
             )}
        </>

    );
}
export default Results;