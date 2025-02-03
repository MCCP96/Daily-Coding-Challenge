import { Budget, BudgetItem } from "../types";
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

export const calculateTotal = (items: {
  [key: string]: BudgetItem;
}): number => {
  const totalItems = Object.values(items).reduce(
    (total, item) =>
      total + (item.recurring ? calcDailyValue(item) : item.amount),
    0
  );

  return totalItems;
};

export const calculateHistoryTotals = (history: { [key: string]: Budget }) => {
  let totalIncomes = 0;
  let totalExpenses = 0;
  let totalGoals = 0;

  Object.values(history).forEach((value) => {
    const { incomes, recurringIncomes, expenses, recurringExpenses, goals } =
      value;

    totalIncomes += calculateTotal(incomes);
    totalIncomes += calculateTotal(recurringIncomes);
    totalExpenses += calculateTotal(expenses);
    totalExpenses += calculateTotal(recurringExpenses);
    totalGoals += calculateTotal(goals);
  });

  return { totalIncomes, totalExpenses, totalGoals };
};
