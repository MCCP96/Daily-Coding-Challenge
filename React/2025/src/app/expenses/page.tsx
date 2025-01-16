"use client";

import { BudgetList } from "../components/BudgetList";
import { NewExpenseForm } from "../components/NewExpenseForm";
import styles from "./page.module.css";
import { formatNumberWithCommas } from "../utils/numberUtils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";

export default function Expenses() {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector((state) => state.budget.expenses);

  const handleAddExpense = (title: string, cost: number) => {
    const id = `title@${Date.now()}`;
    dispatch(budgetActions.addExpense({ id, title, cost }));
  };

  const handleExpenseDelete = (id: string) => {
    dispatch(budgetActions.deleteExpense(id));
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
