import { useState } from "react";
import { Todo } from "./types/Todo";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const NewTodo: Todo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, NewTodo]);
  };
  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
