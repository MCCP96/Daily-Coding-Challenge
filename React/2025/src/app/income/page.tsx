"use client";

import { useState } from "react";
import { IncomeForm } from "../components/IncomeForm";
import styles from "./page.module.css";

export default function Income() {
  const [incomes, setIncomes] = useState<Income[]>([]);

  const handleAddIncome = (name: string, value: number, frequency: string) => {
    const id = Date.now();
    setIncomes((prev) => [...prev, { id, name, value, frequency }]);
  };

  return (
    <div className={styles.page}>
      <h1>Income</h1>
      <IncomeForm onAddIncome={handleAddIncome} />
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            {income.name} - ${income.value} ({income.frequency})
          </li>
        ))}
      </ul>
    </div>
  );
}
