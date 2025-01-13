export const calculateWeeklyIncome = (incomes: Income[]): number => {
  const totalWeeklyIncome = incomes.reduce((total, income) => {
    let weeklyValue = 0;

    switch (income.frequency) {
      case "monthly":
        weeklyValue = income.value / 4.345; // Average weeks in a month
        break;
      case "bi-weekly":
        weeklyValue = income.value / 2;
        break;
      case "weekly":
        weeklyValue = income.value;
        break;
      default:
        break;
    }

    return total + weeklyValue;
  }, 0);

  return parseFloat(totalWeeklyIncome.toFixed(2));
};

export const calculateTotalBudget = (
  expenses: Expense[],
  recurringExpenses: Expense[],
  incomes: Income[],
  timeFrame: string
): number => {
  // adjust to work based on windows of time

  const getTimeFrameMultiplier = (frequency: string) => {
    switch (frequency) {
      case "daily":
        return 1;
      case "weekly":
        return 7;
      case "bi-weekly":
        return 14;
      case "monthly":
        return 30;
      default:
        return 1;
    }
  };

  const timeFrameMultiplier = getTimeFrameMultiplier(timeFrame.toLowerCase());

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.cost,
    0
  );

  const totalRecurringExpenses = recurringExpenses.reduce((total, expense) => {
    const expenseMultiplier = getTimeFrameMultiplier(expense.frequency);
    return total + (expense.cost / expenseMultiplier) * timeFrameMultiplier;
  }, 0);

  const totalIncomes = incomes.reduce((total, income) => {
    const incomeMultiplier = getTimeFrameMultiplier(income.frequency);
    return total + (income.value / incomeMultiplier) * timeFrameMultiplier;
  }, 0);

  return parseFloat(
    (totalIncomes - (totalExpenses + totalRecurringExpenses)).toFixed(2)
  );
};
