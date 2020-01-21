import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = props => {
    const [ products, setProducts ] = useState([]);  
  
    useEffect( () => {
      axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
    }, []);
  
    return (
      <>
        <div className="row mt-3">
          <div className="col">
            <h1>ProductDB</h1>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map(product => 
                    <tr key={product._id}>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                    </tr>                  
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  
  }

  export default ProductList;