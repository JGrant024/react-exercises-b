import "./App.css";
import Todolist from "./../Todos/TodoList";
import Form from "./Form/Form";
import { useState } from "react";

const INITIAL_TODOS = [
  {
    firstname: "Jonathan",
    lastName: "Grant",
    phoneNumber: 8005554433,
    address: "411 University Ridge",
  },
];

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form addTodo={addTodo} />
      <h1>{newTodo}</h1>
    </div>
  );
}

export default App;
