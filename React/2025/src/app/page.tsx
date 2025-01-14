"use client";

import { useDispatch, useSelector } from "react-redux";
import { BudgetList } from "./components/BudgetList";
import { TimeFrameSelector } from "./components/TimeFrameSelector";
import styles from "./page.module.css";
import { calculateTotalBudget } from "./utils/incomeUtils";
import { formatNumberWithCommas } from "./utils/numberUtils";
import { AppDispatch } from "./store";
import {
  deleteExpense,
  deleteRecurringExpense,
  deleteIncome,
} from "./budgetSlice";
import { useEffect, useState } from "react";

export default function Home() {
  // Budget App - NavBar styling         01/14/2025

  // minor styling fixes

  const dispatch = useDispatch<AppDispatch>();
  const budget = useSelector((state: State) => state.budget);

  const [selectedTimeFrame, setSelectedTimeFrame] = useState("Monthly");

  const handleDeleteExpense = (id: number) => {
    dispatch(deleteExpense(id));
  };
  const handleDeleteRecurringExpense = (id: number) => {
    dispatch(deleteRecurringExpense(id));
  };
  const handleDeleteIncome = (id: number) => {
    dispatch(deleteIncome(id));
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
