import React from 'react';

const person = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p onClick={props.propClick}>I'm {props.name} and I am {props.age} years old.</p>
                    <p>{props.children}</p>
                    <input type="text" className="form-control" onChange={props.changed} value={props.name}/>
                </div>
            </div>
        </div>
    );
}

export default person;