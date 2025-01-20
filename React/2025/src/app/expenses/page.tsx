"use client";

import { BudgetList } from "../components/BudgetList";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";
import { Total } from "../components/Total";

export default function Expenses() {
  const dispatch = useAppDispatch();
  const expenses = useAppSelector((state) => state.budget.expenses);

  const handleExpenseDelete = (id: string) => {
    dispatch(budgetActions.deleteExpense(id));
  };

  return (
    <div className={styles.page}>
      <h1>Expenses</h1>
      <Total
        date={new Date()}
        amount={Object.values(expenses).reduce((acc, e) => acc - e.amount, 0)}
      />

      <BudgetList items={expenses} onDelete={handleExpenseDelete} />
    </div>
  );
}
