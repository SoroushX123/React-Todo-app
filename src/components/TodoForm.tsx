import { useState, FormEvent } from "react";

interface Props {
  onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: Props) => {
  const [text, setText] = useState<string>("");

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddTodo(text);
    setText("");
  };
  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Please write ..."
        value={text}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
