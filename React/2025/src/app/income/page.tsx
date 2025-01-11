"use client";

import { useDispatch, useSelector } from "react-redux";
import { IncomeForm } from "../components/IncomeForm";
import { BudgetList } from "../components/BudgetList";
import styles from "./page.module.css";
import { calculateWeeklyIncome } from "../utils/incomeUtils";
import { formatNumberWithCommas } from "../utils/numberUtils";
import { RootState, AppDispatch } from "../store";
import { addIncome, deleteIncome } from "../budgetSlice";

export default function Income() {
  const dispatch = useDispatch<AppDispatch>();
  const incomes = useSelector((state: RootState) => state.budget.incomes);

  const handleAddIncome = (title: string, value: number, frequency: string) => {
    const id = Date.now();
    dispatch(addIncome({ id, title, value, frequency }));
  };

  const handleIncomeDelete = (id: number) => {
    dispatch(deleteIncome(id));
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
