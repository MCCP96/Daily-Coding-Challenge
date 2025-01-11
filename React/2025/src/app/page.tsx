"use client";

import { useDispatch, useSelector } from "react-redux";
import { BudgetList } from "./components/BudgetList";
import styles from "./page.module.css";
import { calculateTotalBudget } from "./utils/incomeUtils";
import { formatNumberWithCommas } from "./utils/numberUtils";
import { RootState, AppDispatch } from "./store";
import {
  deleteExpense,
  deleteRecurringExpense,
  deleteIncome,
} from "./budgetSlice";

export default function Home() {
  // Budget App - React Redux          01/11/2025

  // implemented react-redux, will ensure data changes persist across the app tomorrow using localstorage

  const dispatch = useDispatch<AppDispatch>();
  const expenses = useSelector((state: RootState) => state.budget.expenses);
  const recurringExpenses = useSelector(
    (state: RootState) => state.budget.recurringExpenses
  );
  const incomes = useSelector((state: RootState) => state.budget.incomes);

  const handleDeleteExpense = (id: number) => {
    dispatch(deleteExpense(id));
  };

  const handleDeleteRecurringExpense = (id: number) => {
    dispatch(deleteRecurringExpense(id));
  };

  const handleDeleteIncome = (id: number) => {
    dispatch(deleteIncome(id));
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
