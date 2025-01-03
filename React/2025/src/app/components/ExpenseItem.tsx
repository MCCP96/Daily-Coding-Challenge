"use client";
import { useState } from "react";
import styles from "./ExpenseItem.module.css";

type Props = {
  expense: { id: number; title: string; cost: number };
  onDelete: (id: number) => void;
};

export const ExpenseItem = ({ expense, onDelete }: Props) => {
  return (
    <div className={styles.container}>
      <span
        style={{
          marginLeft: "8px",
        }}
      >
        {expense.title}
      </span>
      <span>${expense.cost}</span>

      <button
        onClick={() => onDelete(expense.id)}
        className={styles.deleteButton}
      >
        &#x2716;
      </button>
    </div>
  );
};
