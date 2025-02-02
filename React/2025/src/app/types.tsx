export type State = {
  budget: BudgetState;
  history: HistoryState;
  ui: UIState;
};

export type BudgetState = {
  date: string;
  expenses: { [key: string]: BudgetItem };
  recurringExpenses: { [key: string]: BudgetItem };
  incomes: { [key: string]: BudgetItem };
  recurringIncomes: { [key: string]: BudgetItem };
  goals: { [key: string]: BudgetItem };
};

export type HistoryState = {
  [key: string]: {
    date: string;
    budget: BudgetState;
    madeProfit: boolean;
  };
};

export type UIState = {
  hideRecurring: boolean;
  hideDaily: boolean;
  theme: "light" | "dark";
};

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
  Goal = "goal",
}

export enum Frequency {
  Daily = "daily",
  Weekly = "weekly",
  BiWeekly = "bi-weekly",
  Monthly = "monthly",
  Yearly = "yearly",
}
