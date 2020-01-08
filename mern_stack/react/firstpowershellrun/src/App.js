import React from 'react';
import './App.css';

import MyNewComponent from './components/MyNewComponent';
import SomeClassComponent from './components/SomeClassComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent someText={"Hello World"}/>
      <MyNewComponent someText={"Hello World 2"}/>
      <MyNewComponent someText={"Hello World 3"}/>
      <SomeClassComponent />
    </div>
  );
}

export default App;
