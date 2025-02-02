"use client";

import { Total } from "../components/Total";
import { BudgetList } from "../components/BudgetList";
import styles from "./page.module.css";
import { useAppSelector } from "@/lib/hooks";
import { formatDate } from "../utils/dateUtils";
import { calculateTotals } from "../utils/budgetUtils";
import { useEffect, useState } from "react";

const Page = () => {
  const history = useAppSelector((state) => state.history);
  const hideRecurring = useAppSelector((state) => state.ui.hideRecurring);

  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const { totalIncomes, totalExpenses } = calculateTotals(history);
    setTotalIncomes(totalIncomes);
    setTotalExpenses(totalExpenses);
  }, []);

  return (
    <div>
      <div className={styles.totals}>
        <Total title="Incomes" amount={totalIncomes} />
        <Total title="Expenses" amount={totalExpenses} />
      </div>

      {Object.entries(history).map(([key, value]) => (
        <div key={key}>
          <h2>{formatDate(new Date(value.date))}</h2>
          {/* add checkmark icon if madeProfit */}
          <BudgetList items={value.budget.expenses} />

          {!hideRecurring && (
            <BudgetList items={value.budget.recurringExpenses} />
          )}

          <BudgetList items={value.budget.incomes} />

          {!hideRecurring && (
            <BudgetList items={value.budget.recurringIncomes} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Page;
