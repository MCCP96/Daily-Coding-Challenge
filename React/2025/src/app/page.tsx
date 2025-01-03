"use client";

import { useState } from "react";
import { ExpenseItem } from "./components/ExpenseItem";
import { NewExpenseForm } from "./components/NewExpenseForm";
import styles from "./page.module.css";

type ExpenseItem = {
  id: number;
  title: string;
  cost: number;
};

// Expense Tracker App          01/03/2025

// changed from todo to expense tracker
// implemented adding expenses

export default function Home() {
  const [expenses, setExpenses] = useState<{ [key: string]: ExpenseItem }>({
    1: { id: 1, title: "Groceries", cost: 106 },
    2: { id: 2, title: "Gym", cost: 87 },
    3: { id: 3, title: "Gas", cost: 75 },
  });

  const handleExpenseDelete = (id: number) => {
    setExpenses((prev) => {
      const state = { ...prev };
      delete state[id];
      return state;
    });
  };

  const handleAddExpense = (title: string, cost: number) => {
    const id = Date.now();
    setExpenses((prev) => ({
      ...prev,
      [id]: { id, title, cost },
    }));
  };

  return (
    <div className={styles.page}>
      <h1>Expenses</h1>

      {Object.entries(expenses).map(([k, expense]) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={handleExpenseDelete}
        />
      ))}

      <div className={styles.newExpenseForm}>
        <NewExpenseForm onAddExpense={handleAddExpense} />
      </div>
    </div>
  );
}
