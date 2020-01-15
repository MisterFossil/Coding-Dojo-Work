import React, { useContext } from "react";
import {MyContext} from './Wrapper';

const NavBar = (props) => {
    const context = useContext(MyContext);
    return(
        <div className="row bg-dark">
            <div className="col">
        <h3 className="text-light text-right">Hi {context}!</h3>
            </div>

        </div>
    );
}

export default NavBar;