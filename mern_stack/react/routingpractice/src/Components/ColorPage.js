import React from 'react';

const ColorPage = (props) => {
    const divStyle = {
        color: props.tcolor,
        backgroundColor: props.bcolor,
    }

    return (
        <div className="row">
            <div className="col" style={divStyle}>  
                { isNaN(+props.input) 
                    ?
                    <h1 className="text-center mt-5">The word is: {props.input}</h1>
                    :
                    <h1 className="text-center mt-5">The number is: {props.input}</h1>

                }              
            </div>
        </div>
    );
}

export default ColorPage;