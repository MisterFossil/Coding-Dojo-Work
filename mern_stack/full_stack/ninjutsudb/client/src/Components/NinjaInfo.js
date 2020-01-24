import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const NinjaInfo = props => {
    const { _id } = props;
    const [ nin, setNin ] = useState({ninjutsu: []});
    const [ technique, setTechnique ] = useState("");
    const [ isDup, setIsDup ] = useState(false);
    const [ dupMsg, setDupMsg ] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/ninjas/" + _id)
            .then(res => {
                setNin(res.data);
            })
            .catch(err => console.log(err));
    }, [_id])

    const addTechnique = e => {
        e.preventDefault();
        if(!nin.ninjutsu.includes(technique)) {
            axios.post(`http://localhost:8000/api/ninjas/${_id}/add`, {technique})
                .then(res => {
                    setTechnique("");
                    axios.get("http://localhost:8000/api/ninjas/" + _id)
                    .then(res => {
                        setNin(res.data);
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
        } else {
            setIsDup(true);
            setDupMsg("Duplicate Technique");
        }
    }

    const remTechnique = i => {
        axios.put(`http://localhost:8000/api/technique/${_id}/`, {technique: nin.ninjutsu[i]})
            .then(res => {
                axios.get("http://localhost:8000/api/ninjas/" + _id)
                    .then(res => {
                        setNin(res.data);
                    })
                    .catch(err => console.log(err));})
            .catch(err => console.log(err));
    }

    return (
        <div className="row">
            <div className="col border border-dark mt-2 mr-1 p-2">
                <img src={nin.imageURL} alt={nin.name} className="w-25"/>
                <h2 className="d-inline-block ml-3">{nin.name}</h2>
                <Link to={`/ninja/${_id}/edit`}><p className="bigger float-right mt-5 mr-2">Edit</p></Link>
                <fieldset className="border border-dark p-2">
                    <legend className="w-auto">Description</legend>
                    <p>{nin.description}</p>
                </fieldset>
            </div>
            <div className="col border border-dark mt-2 p-2">
                <h2>Known Ninjutsu</h2>
                <ul>
                    {
                        nin.ninjutsu.map((tech,i) =>
                            <li key={i}>{tech} 
                                <span className="text-danger float-right mr-5" onClick={() => remTechnique(i)} >&#10008;</span>
                            </li>
                                                    
                        )
                    }
                </ul>
                <hr/>
                <form onSubmit={ addTechnique }>
                    <div className="form-entry">
                        <label htmlFor="ninjutsu">Add Ninjutsu</label>
                        <span className="text-danger">{isDup ? "" : dupMsg}</span>                        
                        <input 
                            type="text" 
                            name="ninjutsu" 
                            id="ninjutsu" 
                            className="form-control" 
                            onChange={e => setTechnique(e.target.value)}
                            value={technique}
                        />
                        <input type="submit" value="Add Ninjutsu" className="float-right btn btn-success mt-2"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NinjaInfo;