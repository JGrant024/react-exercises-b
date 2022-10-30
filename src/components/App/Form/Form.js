import { useState } from "react";
import { nanoid } from "nanoid";

function Form({ addTodo }) {
  const [name, setName] = useState("");

  const handleInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      firstname: "Jonathan",
      lastName: "Grant",
      phoneNumber: 8005554433,
      address: "411 University Ridge",
    };

    addTodo(newTodo);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="todo-text">Add a todo</label>
      </h2>
      <input
        name="name"
        type="text"
        id="todo-text"
        autoComplete="off"
        value={name}
        onChange={handleInput}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
