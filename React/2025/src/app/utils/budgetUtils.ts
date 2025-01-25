import { Budget } from "../types";
import { calcDailyValue } from "./recurringUtils";

export const calculateTotalBudget = (budget: Budget): number => {
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
