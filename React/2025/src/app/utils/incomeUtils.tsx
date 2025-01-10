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
  incomes: Income[]
): number => {
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.cost,
    0
  );
  const totalRecurringExpenses = recurringExpenses.reduce(
    (total, expense) => total + expense.cost,
    0
  );
  const totalIncomes = incomes.reduce(
    (total, income) => total + income.value,
    0
  );

  return totalIncomes - (totalExpenses + totalRecurringExpenses);
};
