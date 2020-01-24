import React from 'react';
import { Link } from '@reach/router';

const InfoBlock = props => {
    return (
        <div className="row border border-dark rounded p-2 mt-2">
            <div className="col-2">
                <img src={props.ninja.imageURL} alt={`${props.ninja.name}`} className="w-100"/>
            </div>
            <div className="col">
                <p className="float-right">Known Ninjutsu: {props.ninja.ninjutsu.length}</p>
                <Link to={`/ninja/${props.ninja._id}`}><p className="bigger">{props.ninja.name}</p></Link>
                <p>{props.ninja.description}</p>
            </div>
        </div>
    );
}

export default InfoBlock;