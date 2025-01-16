"use client";

import { IncomeForm } from "../components/IncomeForm";
import { BudgetList } from "../components/BudgetList";
import styles from "./page.module.css";
import { calculateWeeklyIncome } from "../utils/incomeUtils";
import { formatNumberWithCommas } from "../utils/numberUtils";
import { addIncome, deleteIncome } from "../budgetSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";

export default function Income() {
  const dispatch = useAppDispatch();
  const incomes = useAppSelector((state) => state.budget.incomes);

  const handleAddIncome = (title: string, value: number) => {
    const id = `title@${Date.now()}`;
    dispatch(budgetActions.addIncome({ id, title, value }));
  };

  const handleIncomeDelete = (id: string) => {
    dispatch(budgetActions.deleteIncome(id));
  };

  const weeklyIncome = calculateWeeklyIncome(Object.values(incomes));

  return (
    <div className={styles.page}>
      <h1>Incomes</h1>

      <div className={styles.totalCost}>
        <h2>Weekly Income: ${formatNumberWithCommas(weeklyIncome)}</h2>
      </div>

      <IncomeForm onAddIncome={handleAddIncome} />
      <BudgetList items={incomes} onDelete={handleIncomeDelete} />
    </div>
  );
}
