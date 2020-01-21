import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';

import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';
import Detail from './Components/Detail';


function App() {
  const [ products, setProducts ] = useState([]);  

  useEffect( () => {
    axios.get("http://localhost:8000/api/products/all")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        {/* adding routes here may help with the "table doesn't update" problem */}
        <ProductForm />
        <hr/>
        <ProductList products={products} />
        <Router>
          <Detail path="/:id"/>
        </Router>
      </div>
    </>
  );
}

export default App;
