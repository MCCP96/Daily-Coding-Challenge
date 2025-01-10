"use client";

import { useState } from "react";
import { BudgetList } from "./components/BudgetList";
import styles from "./page.module.css";
import { calculateTotalBudget } from "./utils/incomeUtils";
import { formatNumberWithCommas } from "./utils/numberUtils";

export default function Home() {
  // Overview page          01/10/2025

  // filled out the overview page with the expenses, recurring expenses, and income

  const [expenses, setExpenses] = useState<{ [key: string]: Expense }>({
    1: { id: 1, title: "Groceries", cost: 106 },
    2: { id: 2, title: "Gym", cost: 87 },
    3: { id: 3, title: "Gas", cost: 75 },
  });

  const [recurringExpenses, setRecurringExpenses] = useState<{
    [key: string]: Expense;
  }>({
    4: { id: 4, title: "Rent", cost: 1200 },
    5: { id: 5, title: "Internet", cost: 60 },
  });

  const [incomes, setIncomes] = useState<{ [key: string]: Income }>({
    6: { id: 6, title: "Salary", value: 3000, frequency: "monthly" },
    7: { id: 7, title: "Freelance", value: 500, frequency: "bi-weekly" },
  });

  const handleDeleteExpense = (id: number) => {
    setExpenses((prev) => {
      const state = { ...prev };
      delete state[id];
      return state;
    });
  };

  const handleDeleteRecurringExpense = (id: number) => {
    setRecurringExpenses((prev) => {
      const state = { ...prev };
      delete state[id];
      return state;
    });
  };

  const handleDeleteIncome = (id: number) => {
    setIncomes((prev) => {
      const state = { ...prev };
      delete state[id];
      return state;
    });
  };

  const totalBudget = calculateTotalBudget(
    Object.values(expenses),
    Object.values(recurringExpenses),
    Object.values(incomes)
  );

  return (
    <div className={styles.page}>
      <h1>Budget Tracker</h1>

      <div className={styles.totalBudget}>
        <h2>Total Budget: ${formatNumberWithCommas(totalBudget)}</h2>
      </div>

      <section className={styles.section}>
        <h2>Expenses</h2>
        <BudgetList items={expenses} onDelete={handleDeleteExpense} />
      </section>

      <section className={styles.section}>
        <h2>Recurring Expenses</h2>
        <BudgetList
          items={recurringExpenses}
          onDelete={handleDeleteRecurringExpense}
        />
      </section>

      <section className={styles.section}>
        <h2>Income</h2>
        <BudgetList items={incomes} onDelete={handleDeleteIncome} />
      </section>
    </div>
  );
}
