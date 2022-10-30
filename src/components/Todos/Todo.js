import { useState } from "react";

function Todo({ name, id, isCompleted, ...props }) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleSave = (e) => {
    props.updateTodo(id, newName);
    setEditing(false);
  };

  const editHTML = (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={isCompleted}
        onChange={() => props.toggleCompletion(id)}
      />
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <button type="button" onClick={() => props.removeTodo(id)}>
        Delete
      </button>
    </li>
  );

  const previewHTML = (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={isCompleted}
        onChange={() => props.toggleCompletion(id)}
      />
      <label htmlFor={id}>{name}</label>
      <button type="button" onClick={() => setEditing(true)}>
        Edit
      </button>
      <button type="button" onClick={() => props.removeTodo(id)}>
        Delete
      </button>
    </li>
  );

  return <>{isEditing ? editHTML : previewHTML}</>;
}

export default Todo;
