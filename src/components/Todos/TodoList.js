import Todo from "./Todo";
import { useState } from "react";

// todo => todo
// todo => todo.isCompleted
// todo => !todo.isCompleted

const FILTER_OPTIONS = {
  all: (todo) => todo,
  Completed: (todo) => todo.isCompleted,
  incomplete: (todo) => !todo.isCompleted,
};

// const filters = Object.keys(FILTER_OPTIONS)

function TodoList({ todos, ...props }) {
  const [filter, setFilter] = useState("all");
  const todoItems = todos
    .filter(FILTER_OPTIONS[filter])
    .map((todo) => (
      <Todo
        key={todo.id}
        {...todo}
        toggleCompletion={props.toggleCompletion}
        removeTodo={props.removeTodo}
        updateTodo={props.updateTodo}
      />
    ));

  return (
    <>
      <button type="button" onClick={() => setFilter("all")}>
        All
      </button>
      <button type="button" onClick={() => setFilter("completed")}>
        Completed
      </button>
      <button type="button" onClick={() => setFilter("incompleted")}>
        Incompleted
      </button>
      <ul>{todoItems}</ul>
    </>
  );
}

export default TodoList;
