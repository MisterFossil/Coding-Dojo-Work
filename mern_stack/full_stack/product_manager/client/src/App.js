import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './Components/ProductList';
import ProductTable from './Components/ProductTable';


function App() {

  return (
    <>
      <div className="container">
        <ProductTable />
        <ProductList />
      </div>
    </>
  );
}

export default App;
