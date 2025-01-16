"use client";

import { BudgetList } from "./components/BudgetList";
import { TimeFrameSelector } from "./components/TimeFrameSelector";
import styles from "./page.module.css";
import { calculateTotalBudget } from "./utils/incomeUtils";
import { formatNumberWithCommas } from "./utils/numberUtils";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";

export default function Home() {
  // Budget App - Persisting Redux state         01/16/2025

  // fixed state management bugs
  // still an issue with server-side trying to access localStorage, but choosing to ignore that for now

  const dispatch = useAppDispatch();
  const budget = useAppSelector((state: State) => state.budget);

  const [selectedTimeFrame, setSelectedTimeFrame] = useState("Monthly");

  const handleDeleteExpense = (id: string) => {
    dispatch(budgetActions.deleteExpense(id));
  };
  const handleDeleteRecurringExpense = (id: string) => {
    dispatch(budgetActions.deleteRecurringExpense(id));
  };
  const handleDeleteIncome = (id: string) => {
    dispatch(budgetActions.deleteIncome(id));
  };

  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    setTotalBudget(
      calculateTotalBudget(
        Object.values(budget.expenses),
        Object.values(budget.recurringExpenses),
        Object.values(budget.incomes),
        selectedTimeFrame
      )
    );
  }, [budget, selectedTimeFrame]);

  const handleTimeFrameChange = (timeFrame: string) => {
    setSelectedTimeFrame(timeFrame);
  };

  return (
    <div className={styles.page}>
      <h1>Budget Tracker</h1>

      <TimeFrameSelector
        selectedTimeFrame={selectedTimeFrame}
        onChange={handleTimeFrameChange}
      />

      <div className={styles.totalBudget}>
        <h2>Total Budget: ${formatNumberWithCommas(totalBudget)}</h2>
      </div>

      <section className={styles.section}>
        <h2>Expenses</h2>
        <BudgetList items={budget.expenses} onDelete={handleDeleteExpense} />
      </section>

      <section className={styles.section}>
        <h2>Recurring Expenses</h2>
        <BudgetList
          items={budget.recurringExpenses}
          onDelete={handleDeleteRecurringExpense}
        />
      </section>

      <section className={styles.section}>
        <h2>Income</h2>
        <BudgetList items={budget.incomes} onDelete={handleDeleteIncome} />
      </section>
    </div>
  );
}
