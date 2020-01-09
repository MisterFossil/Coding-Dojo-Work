import React from 'react';
import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith III" age={8} hairColor={"Brown"} />
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor={"Black"} />
      <PersonCard firstName="John" lastName="Smith Sr." age={88} hairColor={"Brown"} />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor={"Blonde"} />
      <PersonCard firstName="Maris" lastName="Smith" age={62} hairColor={"Black"} />
    </div>
  );
}

export default App;
