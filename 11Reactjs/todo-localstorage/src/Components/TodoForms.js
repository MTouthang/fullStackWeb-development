import React, { useState } from "react";
import { FormGroup, InputGroup, Input, Button, Form } from "reactstrap";
import { v4 } from "uuid";

const TodoForms = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("please fill some value!");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    // props and method ---
    addTodos(todo);

    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <button> Add</button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForms;
