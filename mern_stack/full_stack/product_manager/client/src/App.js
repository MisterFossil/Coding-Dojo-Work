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
      <div className="row">
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

function App() {
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
      <div className="container">
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
        <ProductList />
      </div>
    </>
  );
}

export default App;
