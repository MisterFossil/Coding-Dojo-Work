import React from 'react';
import HomePage from './Components/HomePage';
import { Router } from '@reach/router';
import SingleParamPage from './Components/SingleParamPage';
import ColorPage from './Components/ColorPage';

function App() {
  return (
    <div className="container">
      <Router>
        <HomePage path="/home" />
        <SingleParamPage path="/:input"/>
        <ColorPage path="/:input/:tcolor/:bcolor"/>
      </Router>
    </div>
  );
}

export default App;
