import React from 'react';
import { Link } from '@reach/router';

const ProductList = props => { 

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
                  props.products.map(product => 
                    <tr key={product._id}>
                      <td> <Link to={product._id}>{product.title}</Link></td>
                      <td>{product.price}</td>
                      <td>{product.description}</td>
                      <td>Edit | Delete</td>
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