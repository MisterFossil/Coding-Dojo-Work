import React, { useState } from 'react';
const SomeComponent = props => {
    const [state, setState] = useState({
        clickCount:0
    });

    const handleClick = e => {
        e.preventDefault();
        setState({
            clickCount: state.clickCount + 1
        })
    }

    return(
        <div>
            {state.clickCount}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}



export default SomeComponent;