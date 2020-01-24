import React from 'react';
import { Link } from '@reach/router';

const NavHeader = props => {

    return (
        <div className="row justify-content-between border border-dark rounded mt-2">
            <div className="col">
                <h2>NinjutsuDB</h2>
            </div>
            <div className="col-3 align-center">
                <div className="text-center p-2">
                    <Link to="/" className="bigger">Home</Link>
                    <p className="d-inline-block ml-2 mr-2 bigger mb-0"> | </p>
                    <Link to="/new" className="bigger">New Ninja</Link>
                </div>
            </div>
        </div>
    );
}

export default NavHeader;