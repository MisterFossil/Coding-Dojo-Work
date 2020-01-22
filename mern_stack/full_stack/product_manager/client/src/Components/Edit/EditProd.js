import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const EditProd = props => {
    const { _id } = props;
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ description, setDescription ] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + _id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [_id])

    const updateProduct = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + _id, {title, price, description})
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return(
        <div className="row">
            <div className="col-6">
                <h1>Product Manager</h1>
                <form onSubmit={updateProduct}>
                    <div className="form-entry">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" className="form-control" value={title} onChange={ e => setTitle(e.target.value)} />
                    </div>
                    <div className="form-entry">
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" className="form-control" value={price} onChange={ e => setPrice(e.target.value)}/>
                    </div>
                    <div className="form-entry">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" className="form-control" value={description} onChange={ e => setDescription(e.target.value)}/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-dark mt-3"/>
                </form>
            </div>
        </div>
    );
}

export default EditProd;
