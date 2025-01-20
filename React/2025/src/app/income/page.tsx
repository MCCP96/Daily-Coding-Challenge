"use client";

import { BudgetList } from "../components/BudgetList";
import { Total } from "../components/Total";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";

export default function Income() {
  const dispatch = useAppDispatch();
  const incomes = useAppSelector((state) => state.budget.incomes);

  const handleIncomeDelete = (id: string) => {
    dispatch(budgetActions.deleteIncome(id));
  };

  return (
    <div className={styles.page}>
      <h1>Incomes</h1>

      <Total
        date={new Date()}
        amount={Object.values(incomes).reduce((a, { amount }) => a + amount, 0)}
      />

      <BudgetList items={incomes} onDelete={handleIncomeDelete} />
    </div>
  );
}
