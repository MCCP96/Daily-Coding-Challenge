type Expense = {
  id: number;
  title: string;
  cost: number;
};

type Income = {
  id: number;
  title: string;
  value: number;
  frequency: string;
};

type State = {
  budget: Budget;
};

type Budget = {
  expenses: { [key: number]: Expense };
  recurringExpenses: { [key: number]: Expense };
  incomes: { [key: number]: Income };
  recurringIncomes: { [key: number]: Income };
};
