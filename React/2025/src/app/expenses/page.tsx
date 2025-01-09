"use client";

import { useState } from "react";
import { BudgetList } from "../components/BudgetList";
import { NewExpenseForm } from "../components/NewExpenseForm";
import styles from "./page.module.css";
import { formatNumberWithCommas } from "../utils/numberUtils";

export default function Expenses() {
  const [expenses, setExpenses] = useState<{ [key: string]: Expense }>({
    1: { id: 1, title: "Groceries", cost: 106 },
    2: { id: 2, title: "Gym", cost: 87 },
    3: { id: 3, title: "Gas", cost: 75 },
  });

  const handleAddExpense = (title: string, cost: number) => {
    const id = Date.now();
    setExpenses((prev) => ({
      ...prev,
      [id]: { id, title, cost },
    }));
  };

  const handleExpenseDelete = (id: number) => {
    setExpenses((prev) => {
      const state = { ...prev };
      delete state[id];
      return state;
    });
  };

  return (
    <div className={styles.page}>
      <h1>Expenses</h1>

      <div className={styles.totalCost}>
        <h2>
          $
          {formatNumberWithCommas(
            Object.values(expenses).reduce((acc, e) => acc + e.cost, 0)
          )}
        </h2>
      </div>

      <BudgetList items={expenses} onDelete={handleExpenseDelete} />

      <div className={styles.newExpenseForm}>
        <NewExpenseForm onAddExpense={handleAddExpense} />
      </div>
    </div>
  );
}
