"use client";

import { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import styles from "./page.module.css";

type Todo = {
  id: number;
  title: string;
  isComplete: boolean;
};

// TodoApp          01/02/2025

// beginnings of a simple todo app.
// create todo items, mark them as complete, and delete them.

export default function Home() {
  const [todos, setTodos] = useState<{ [key: string]: Todo }>({
    1: { id: 1, title: "Groceries", isComplete: false },
    2: { id: 2, title: "Walk the dog", isComplete: false },
    3: { id: 3, title: "Laundry", isComplete: false },
  });

  const handleTodoDelete = (id: number) => {
    setTodos((prev) => {
      const state = { ...prev };
      delete state[id];
      return state;
    });
  };

  return (
    <div className={styles.page}>
      <h1>ToDo</h1>

      {Object.entries(todos).map(([k, todo]) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleTodoDelete} />
      ))}
    </div>
  );
}
