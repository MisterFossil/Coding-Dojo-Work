import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTable = props => {

    const [ title, setTitle ] = useState([]);
    const [ price, setPrice ] = useState([]);
    const [ description, setDescription ] = useState([]);  

    const onSubmitHandler = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h1>Product Manager</h1>
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-entry">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control" onChange={ e => setTitle(e.target.value)} />
                        </div>
                        <div className="form-entry">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" className="form-control" onChange={ e => setPrice(e.target.value)}/>
                        </div>
                        <div className="form-entry">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" className="form-control" onChange={ e => setDescription(e.target.value)}/>
                        </div>
                        <input type="submit" value="Create" className="btn btn-dark mt-3"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProductTable;