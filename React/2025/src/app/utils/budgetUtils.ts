import { BudgetState, HistoryState } from "../types";
import { calcDailyValue } from "./recurringUtils";

export const calculateTotalBudget = (budget: BudgetState): number => {
  const totalIncomes = Object.values(budget.incomes).reduce(
    (total, item) => total + item.amount,
    0
  );

  const totalRecurringIncomes = Object.values(budget.recurringIncomes).reduce(
    (total, item) => total + calcDailyValue(item),
    0
  );

  const totalExpenses = Object.values(budget.expenses).reduce(
    (total, item) => total + item.amount,
    0
  );

  const totalRecurringExpenses = Object.values(budget.recurringExpenses).reduce(
    (total, item) => total + calcDailyValue(item),
    0
  );

  return parseFloat(
    (
      totalIncomes +
      totalRecurringIncomes -
      (totalExpenses + totalRecurringExpenses)
    ).toFixed(2)
  );
};

export const calculateTotals = (history: HistoryState) => {
  let totalIncomes = 0;
  let totalExpenses = 0;

  Object.values(history).forEach((value) => {
    const { incomes, recurringIncomes, expenses, recurringExpenses } =
      value.budget;

    totalIncomes += Object.values(incomes).reduce(
      (a, { amount }) => a + amount,
      0
    );
    totalIncomes += Object.values(recurringIncomes).reduce(
      (a, item) => a + calcDailyValue(item),
      0
    );
    totalExpenses += Object.values(expenses).reduce(
      (a, { amount }) => a + amount,
      0
    );
    totalExpenses += Object.values(recurringExpenses).reduce(
      (a, item) => a + calcDailyValue(item),
      0
    );
  });

  return { totalIncomes, totalExpenses };
};
