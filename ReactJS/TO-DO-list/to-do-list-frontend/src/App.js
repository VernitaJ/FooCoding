import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./styles.css";

const BACKEND_ROOT = "https://8n3q2.sse.codesandbox.io";

const App = () => {
  // "useState" returns a "super variable", it's an array
  // of two items. The first contains the current value and
  // the second is the function to update that value.
  // When use call "useState()" you can provide the initial
  // value of this "super variable".
  const [todos, setTodos] = useState([]);

  // EFFECTS are special functions that we provide and that
  // React will execute at specific point in time.
  // The following effect will run only once, the first time
  // the component is rendered.
  // Do your best to learn as much as you can about React's hooks!
  // It's the upcoming technology for data management in React.
  useEffect(() => {
    // "fetch()" is a BROWSER API, it means that it's a function
    // pre-built in javascript. You can simply use it to perform
    // HTTP requests usign any of the HTTP supported verbs.
    // Here we are using it to perform a GET request toward our
    // todo-list backend.
    //
    // HTTP requests are asynchronous and they may fail. Here
    // we are using the "PROMISE STYLE" to handle with that.
    // Try to pratice as much as possible with both
    // async/await and the Promise style as you will deal
    // with both of those (plus the old callback style!)
    //
    // The important part is that once we receive the actual
    // list of todos (2nd "then"), we will simply pass it to the
    // setter function of the "SUPER VARIABLE" that we did create
    // with the "useState()".
    fetch(BACKEND_ROOT)
      .then(response => response.json())
      .then(todos => setTodos(todos))
      .catch(err => console.error(err));
  }, []);

  // This part is the same old story of mapping a data array
  // to a list of React components.
  const todosList = todos.map(todo => (
    <li key={todo.id}>
      <Todo {...todo} />
    </li>
  ));

  return (
    <div className="App">
      <h1>My Todos</h1>
      <ul>{todosList}</ul>
    </div>
  );
};

export default App;
