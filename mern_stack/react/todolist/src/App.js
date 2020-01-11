import React from 'react';
import './App.css';
import ToDoForm from './Components/ToDoForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <ToDoForm />
    </div>
  );
}

export default App;
