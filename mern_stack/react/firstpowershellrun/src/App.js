import React from 'react';
import './App.css';

import MyNewComponent from './components/MyNewComponent';
import SomeClassComponent from './components/SomeClassComponent';
import ClickCounter from './components/ClickCounter';

// adding event listeners and testing buttons
const Button = (props) => {
  return (
    <button onClick={props.click}>{props.text}</button>
  );
}

const App = () => {
  const clickHandler = () => console.log("Clicked");
  const buttonOneText = "I am the first button being clicked.";
  const buttonTwoText = "And I am the second button being clicked.";

  return (
    <div className="App">
      <MyNewComponent someText={"Hello World"}>
        <p>This is a child</p>
      </MyNewComponent>

      <MyNewComponent someText={"Hello World 2"}>
        <p>This is a child</p>
      </MyNewComponent>

      <MyNewComponent someText={"Hello World 3"}>
        <p>This is a child</p>
        <p>This is another child</p>
      </MyNewComponent>
      <SomeClassComponent />
      <Button text={buttonOneText} click={clickHandler}/>
      <Button text={buttonTwoText} click={clickHandler}/>
      <ClickCounter />
    </div>
  );
}

export default App;
