import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const ProductList = props => { 

  const [ updateList, setUpdateList ] = useState(false);
  const [ products, setProducts ] = useState([]);

  const deleteItem = _id => {
    axios.delete("http://localhost:8000/api/products/" + _id)
        .then(res => {
            setUpdateList(!updateList);
        })
}

  useEffect( () => {
    axios.get("http://localhost:8000/api/products")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err));
    }, [props.updated, updateList]);

    return (
      <>
        <div className="row mt-3">
          <div className="col">
            <h1>Product Manager Product List</h1>
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map(product => 
                    <tr key={product._id}>
                      <td> <Link to={product._id}>{product.title}</Link></td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>
                        <Link to={`/edit/${product._id}`} >Edit</Link>
                        <button className="btn btn-danger ml-3" onClick={e => {deleteItem(product._id)}}>Delete</button>
                      </td>
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