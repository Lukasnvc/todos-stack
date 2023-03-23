import React, { useEffect, useState } from "react";
import { Todo, fetchTodos } from "./api";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    fetchTodos().then((response) => {
      setTodos(response);
    });
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};

export default App;
