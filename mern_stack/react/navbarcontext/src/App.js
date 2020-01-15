import React from 'react';
import './App.css';
import Form from './Componenets/Form';
import FormWrapper from './Componenets/FormWrapper';
import NavBar from './Componenets/NavBar';
import Wrapper from './Componenets/Wrapper';

function App() {

  return (
    <div className="container p-3">
      <Wrapper.Provider value="hello from context">
        <NavBar />
        <FormWrapper>
          <Form />
        </FormWrapper>
      </Wrapper.Provider>
    </div>
  );
}

export default App;
