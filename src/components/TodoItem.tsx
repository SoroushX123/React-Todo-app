import React from "react";
interface Props {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ id, text, completed, onToggle, onDelete }: Props) => {
  return (
    <li style={{ textDecoration: completed ? "line-through" : "none" }}>
      {text}
      <button onClick={() => onToggle(id)}>✓</button>
      <button onClick={() => onDelete(id)}>🗑️</button>
    </li>
  );
};

export default TodoItem;
