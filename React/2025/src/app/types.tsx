export type BudgetItem = {
  id: string;
  title: string;
  amount: number;
  type: BudgetItemType;
  recurring: boolean;
  frequency?: string;
};

export enum BudgetItemType {
  Expense = "expense",
  RecurringExpense = "recurringExpense",
  Income = "income",
  RecurringIncome = "recurringIncome",
}

export type State = {
  budget: Budget;
};

export type Budget = {
  expenses: { [key: string]: BudgetItem };
  recurringExpenses: { [key: string]: BudgetItem };
  incomes: { [key: string]: BudgetItem };
  recurringIncomes: { [key: string]: BudgetItem };
};
