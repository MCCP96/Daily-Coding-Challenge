import { BudgetItem } from "../types";

export const calculateWeeklyIncome = (incomes: BudgetItem[]): number => {
  const totalWeeklyIncome = incomes.reduce((total, income) => {
    let weeklyValue = 0;

    if (income.recurring) {
      switch (income.frequency) {
        case "monthly":
          weeklyValue = income.amount / 4.345; // Average weeks in a month
          break;
        case "bi-weekly":
          weeklyValue = income.amount / 2;
          break;
        case "weekly":
          weeklyValue = income.amount;
          break;
        default:
          break;
      }
    } else {
      weeklyValue = income.amount / 7; // Convert one-time income to daily value
    }

    return total + weeklyValue;
  }, 0);

  return parseFloat(totalWeeklyIncome.toFixed(2));
};

export const calculateTotalBudget = (
  expenses: BudgetItem[],
  recurringExpenses: BudgetItem[],
  incomes: BudgetItem[],
  recurringIncomes: BudgetItem[]
): number => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const totalRecurringExpenses = recurringExpenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  const totalIncomes = incomes.reduce(
    (total, income) => total + income.amount,
    0
  );

  const totalRecurringIncomes = recurringIncomes.reduce((total, income) => {
    return total + income.amount;
  }, 0);

  return parseFloat(
    (
      totalIncomes +
      totalRecurringIncomes -
      (totalExpenses + totalRecurringExpenses)
    ).toFixed(2)
  );
};
