import React, { useEffect, useState } from 'react';
import axios from 'axios';
import InfoBlock from './InfoBlock';

const AllNinja = props => {
    const [ ninjaList, setNinjaList ] = useState([]);
    const [ ninFilter, setNinFilter ] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/ninjas")
          .then(res => {
              setNinjaList(res.data);
              setNinFilter(res.data);})
          .catch(err => console.log(err));
      }, []);

    return (
        <>
        <div className="row">
        <div className="col-3 mt-3">
            <input 
                type="search" 
                name="search" 
                id="search" 
                className="form-control"
                placeholder="&#128269;  search"
            />
        </div>
        <div className="col">
            <button className="btn btn-info float-right mt-3">Order By:</button>
        </div>
        </div>
        {
            ninFilter.map(ninja =>
                // <li key={ninja._id}>{ninja.name}</li>
                <InfoBlock key={ninja._id} ninja={ninja} />
            )

        }
        </>
    );
}

export default AllNinja;