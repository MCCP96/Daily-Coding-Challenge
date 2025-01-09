"use client";

import { useState } from "react";
import { IncomeForm } from "../components/IncomeForm";
import { BudgetList } from "../components/BudgetList";
import styles from "./page.module.css";
import { calculateWeeklyIncome } from "../utils/incomeUtils";
import { formatNumberWithCommas } from "../utils/numberUtils";

export default function Income() {
  const [incomes, setIncomes] = useState<{ [key: string]: Income }>({});

  const handleAddIncome = (title: string, value: number, frequency: string) => {
    const id = Date.now();
    setIncomes((prev) => ({
      ...prev,
      [id]: { id, title, value, frequency },
    }));
  };

  const handleIncomeDelete = (id: number) => {
    setIncomes((prev) => {
      const state = { ...prev };
      delete state[id];
      return state;
    });
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
