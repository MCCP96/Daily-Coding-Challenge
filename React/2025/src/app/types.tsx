type Expense = {
  id: string;
  title: string;
  cost: number;
};

type RecurringExpense = {
  id: string;
  title: string;
  cost: number;
  frequency: string;
};

type Income = {
  id: string;
  title: string;
  value: number;
};

type RecurringIncome = {
  id: string;
  title: string;
  value: number;
  frequency: string;
};

type State = {
  budget: Budget;
};

type Budget = {
  expenses: { [key: string]: Expense };
  recurringExpenses: { [key: string]: RecurringExpense };
  incomes: { [key: string]: Income };
  recurringIncomes: { [key: string]: RecurringIncome };
};
