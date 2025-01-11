"use client";

import { useDispatch, useSelector } from "react-redux";
import { BudgetList } from "../components/BudgetList";
import { NewExpenseForm } from "../components/NewExpenseForm";
import styles from "./page.module.css";
import { formatNumberWithCommas } from "../utils/numberUtils";
import { RootState, AppDispatch } from "../store";
import { addExpense, deleteExpense } from "../budgetSlice";

export default function Expenses() {
  const dispatch = useDispatch<AppDispatch>();
  const expenses = useSelector((state: RootState) => state.budget.expenses);

  const handleAddExpense = (title: string, cost: number) => {
    const id = Date.now();
    dispatch(addExpense({ id, title, cost }));
  };

  const handleExpenseDelete = (id: number) => {
    dispatch(deleteExpense(id));
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
