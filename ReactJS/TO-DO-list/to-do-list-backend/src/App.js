import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./styles.css";

const BACKEND_ROOT = "https://codesandbox.io/s/server-exercise01-8n3q2/";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(BACKEND_ROOT)
      .then(response => response.json())
      .then(setTodos)
      .catch(err => console.error(err));
  }, []);

  const todosList = todos.map(todo => (
    <li key={todo.id}>
      <Todo {...todo} />
    </li>
  ));

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>{todosList}</ul>
    </div>
  );
};

export default App;
