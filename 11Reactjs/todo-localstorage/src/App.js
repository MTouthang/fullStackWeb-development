import React, { useState, useEffect } from "react";

import "./App.css";
import { Container } from "reactstrap";
import Todos from "./Components/Todos";
import TodoForms from "./Components/TodoForms";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localStorage });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container fluid>
      <h2> Todo with local storage </h2>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForms addTodos={addTodos} />
    </Container>
  );
};
export default App;
