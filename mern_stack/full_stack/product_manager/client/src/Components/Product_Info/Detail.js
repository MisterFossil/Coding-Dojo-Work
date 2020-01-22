import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Detail = props => {
    const [ product, setProduct ] = useState({});

    const deleteItem = _id => {
        axios.delete("http://localhost:8000/api/products/" + _id)
            .then(res => {
                navigate("/");
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props._id)
        .then(res => setProduct({
            ...res.data
        }))
    }, [props._id])

    return (
        <div className="row">
            <div className="col mt-5">
                <h3>Product Info</h3>
                <p><span className="bigger"> Product Id: </span>{product._id}</p>
                <p><span className="bigger"> Product Title: </span> {product.title}</p>
                <p><span className="bigger"> Product Price: </span> {product.price}</p>
                <p><span className="bigger"> Product Description: </span> {product.description}</p>
                <Link to={`/edit/${product._id}`} className="bigger"><button className="btn btn-primary">Edit</button></Link>
            </div>
            <div className="col align-self-center">
                <button className="btn btn-outline-danger d-block mt-4 " onClick={e => {deleteItem(product._id)}}><span className="bigger">DELETE ITEM</span></button>
            </div>
        </div>
    );
}

export default Detail;