// required for the state hook
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  // State Hook: required to have if you want to use State in your components that are functions, otherwise you must use a class
  // The way of declaring here is destructuring, useState returns an array, so I am setting the first element to personState,
  // and the second to setPersonState
  const [ personState, setPersonState ] = 
  useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 26},
    ],
    // breaking up useState into multiple "states" so that the variables that they keep track of are easier to be tracked
    // otherState: 'some other value',
  })

  const [ otherState, setOtherState ] = useState({otherState: 'some other value'});

  console.log(personState, otherState);

  const switchNameHandler = () => {
    // console.log('Was Clicked');
    setPersonState({
      ...personState,
      persons: [
        {name: "Jonathan", age: 34},
        {name: "Erik", age: 35},
        {name: "Patrick", age: 34},
      ],
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>
        My hobbies: Racing
      </Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
}

export default App;
