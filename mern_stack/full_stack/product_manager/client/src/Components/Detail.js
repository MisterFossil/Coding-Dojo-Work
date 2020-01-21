import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Detail = props => {
    const [ product, setProduct ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/details/" + props.id)
        .then(res => setProduct({
            ...res.data
        }))
    }, [props.id])

    return (
        <div className="row">
            <div className="col">
                <p>Product Id: {product._id}</p>
                <p>Product Title: {product.title}</p>
                <p>Product Price: {product.price}</p>
                <p>Product Description: {product.description}</p>
            </div>
        </div>
    );
}

export default Detail;