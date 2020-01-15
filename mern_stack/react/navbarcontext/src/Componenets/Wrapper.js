import React, { createContext } from "react";

const Wrapper = props => {
    const MyContext = createContext("***TEST NAME HERE***");

    return (
            props.children
    );  
}

export default Wrapper;