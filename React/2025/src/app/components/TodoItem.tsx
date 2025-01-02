"use client";
import { useState } from "react";
import styles from "./TodoItem.module.css";

type Props = {
  todo: { id: number; title: string; isComplete: boolean };
  onDelete: (id: number) => void;
};

export const TodoItem = ({ todo, onDelete }: Props) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleToggle = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div className={styles.container}>
      <input type="checkbox" checked={isComplete} onChange={handleToggle} />

      <span
        style={{
          textDecoration: isComplete ? "line-through" : "none",
          marginLeft: "8px",
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "auto" }}>
        Delete
      </button>
    </div>
  );
};
