import React from 'react';
import './App.css';
import HelloWorld from "./Component/Hello World";
import Fam from "./Component/Fam";
import ComponentFamily from "./Component/Component Family/Component Family";
import Counter from "./Component/Counter/Counter";
import ToDoList from "./Component/ToDoList/ToDoList";


const ComponentH1=()=>
{
  return(
      <h1>
        Hello World
      </h1>
  )
}
function App() {
  return (

    <div className="App">
        {/*<Counter></Counter>*/}
        <ToDoList/>
    </div>
  );
}

export default App;
