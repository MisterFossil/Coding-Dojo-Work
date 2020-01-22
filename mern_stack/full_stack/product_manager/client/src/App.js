import React from 'react';
import { Router, Link } from '@reach/router';
import Detail from './Components/Product_Info/Detail';
import ProductForm from './Components/Home/ProductForm';
import EditProd from './Components/Edit/EditProd';


function App() {

  return (
    <>
      <div className="container">
        {/* adding routes here may help with the "table doesn't update" problem */}
        <Link to="/" className="bigger">Home</Link>
        <Router>
          <ProductForm path="/" />
          <Detail path="/:_id"/>
          <EditProd path="/edit/:_id"/>
        </Router>
      </div>
    </>
  );
}

export default App;
