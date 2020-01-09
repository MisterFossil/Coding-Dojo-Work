import React from 'react';
const PersonCard = props => {
    return(
        <div>
            <fieldset>
                <legend>{props.lastName}, {props.firstName}</legend>
                <p>Age: {props.age}</p>
                <p>Hair Color: {props.hairColor}</p>
            </fieldset>
        </div>
    );
}
export default PersonCard;