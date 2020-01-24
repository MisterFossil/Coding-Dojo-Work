import React from 'react';
import { Router } from '@reach/router';

import NavHeader from './Components/NavHeader/NavHeader';
import NewNinja from './Components/NewNinja/NewNinja';
import AllNinja from './Components/Home/AllNinja';
import EditNinja from './Components/EditNinja';
import NinjaInfo from './Components/NinjaInfo';

function App() {

  return (
    <div className="container">
      <NavHeader />
      <Router>
        <AllNinja path="/" />
        <NewNinja path="/new" />
        <EditNinja path="/ninja/:_id/edit" />
        <NinjaInfo path="/ninja/:_id" />
      </Router>
    </div>
  );
}

export default App;
