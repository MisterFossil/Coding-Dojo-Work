import React, { useState } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const ProductForm = props => {

    const [ title, setTitle ] = useState([]);
    const [ price, setPrice ] = useState([]);
    const [ description, setDescription ] = useState([]);  
    const [ updateList, setUpdateList ] = useState(true);


    const onSubmitHandler = event => {
        event.preventDefault();
        setUpdateList(!updateList);
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
            <ProductList updated={updateList} />
        </>
    );
}

export default ProductForm;