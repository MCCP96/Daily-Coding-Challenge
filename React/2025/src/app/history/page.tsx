"use client";

import { Total } from "../components/Total";
import styles from "./page.module.css";
import { useAppSelector } from "@/lib/hooks";
import { displayLongDate } from "../utils/dateUtils";
import {
  calculateHistoryTotals,
  calculateTotal,
  calculateTotalBudget,
} from "../utils/budgetUtils";
import { useEffect, useState } from "react";
import { ItemList } from "../components/ItemList";

const Page = () => {
  const history = useAppSelector((state) => state.budget.history);
  const hideRecurring = useAppSelector((state) => state.ui.hideRecurring);
  const hideGoals = useAppSelector((state) => state.ui.hideGoals);

  const [totals, setTotals] = useState({ incomes: 0, expenses: 0, goals: 0 });

  useEffect(() => {
    const { totalIncomes, totalExpenses, totalGoals } =
      calculateHistoryTotals(history);
    setTotals({
      incomes: totalIncomes,
      expenses: totalExpenses,
      goals: totalGoals,
    });
  }, [history]);

  const sortedHistory = Object.entries(history).sort(
    ([_, a], [__, b]) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      <div className={styles.totals}>
        <Total title="Goals" amount={totals.goals} />
        <Total title="Incomes" amount={totals.incomes} />
        <Total title="Expenses" amount={-totals.expenses} />
      </div>

      {sortedHistory.map(([key, value]) => {
        return (
          <div key={key} style={{ marginBottom: "1rem" }}>
            <h2>{displayLongDate(new Date(value.date))}</h2>

            {/* add checkmark icon if madeProfit */}
            {!hideRecurring && <ItemList items={value.recurringIncomes} />}
            <ItemList items={value.incomes} />
            {!hideGoals && <ItemList items={value.goals} />}
            {!hideRecurring && <ItemList items={value.recurringExpenses} />}
            <ItemList items={value.expenses} />

            <div>
              <Total amount={calculateTotalBudget(value)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
