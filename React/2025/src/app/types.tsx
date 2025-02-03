export type State = {
  budget: BudgetState;
  ui: UIState;
};

export type BudgetState = {
  history: { [key: string]: Budget };
  recurrings: {
    recurringExpenses: { [key: string]: BudgetItem };
    recurringIncomes: { [key: string]: BudgetItem };
    goals: { [key: string]: BudgetItem };
  };
};

export type UIState = {
  hideRecurring: boolean;
  hideGoals: boolean;
  hideDailyTotal: boolean;
  hideAllTimeTotal: boolean;
  theme: "light" | "dark";
};

export type Budget = {
  date: string;
  expenses: { [key: string]: BudgetItem };
  recurringExpenses: { [key: string]: BudgetItem };
  incomes: { [key: string]: BudgetItem };
  recurringIncomes: { [key: string]: BudgetItem };
  goals: { [key: string]: BudgetItem };
};

export type BudgetItem = {
  date: string;
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
  Goal = "goal",
}

export enum Frequency {
  Daily = "daily",
  Weekly = "weekly",
  BiWeekly = "bi-weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}
