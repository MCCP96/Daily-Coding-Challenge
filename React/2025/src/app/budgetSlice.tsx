import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  expenses: { [key: string]: Expense };
  recurringExpenses: { [key: string]: Expense };
  incomes: { [key: string]: Income };
  recurringIncomes: { [key: string]: Income };
};

const initialState: State = {
  expenses: {
    1: { id: 1, title: "Groceries", cost: 106 },
    2: { id: 2, title: "Gym", cost: 87 },
    3: { id: 3, title: "Gas", cost: 75 },
  },
  recurringExpenses: {
    4: { id: 4, title: "Rent", cost: 1200 },
    5: { id: 5, title: "Internet", cost: 60 },
  },
  incomes: {
    6: { id: 6, title: "Salary", value: 3000, frequency: "monthly" },
    7: { id: 7, title: "Freelance", value: 500, frequency: "bi-weekly" },
  },
  recurringIncomes: {},
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses[action.payload.id] = action.payload;
    },
    deleteExpense: (state, action: PayloadAction<number>) => {
      delete state.expenses[action.payload];
    },
    addRecurringExpense: (state, action: PayloadAction<Expense>) => {
      state.recurringExpenses[action.payload.id] = action.payload;
    },
    deleteRecurringExpense: (state, action: PayloadAction<number>) => {
      delete state.recurringExpenses[action.payload];
    },
    addIncome: (state, action: PayloadAction<Income>) => {
      state.incomes[action.payload.id] = action.payload;
    },
    deleteIncome: (state, action: PayloadAction<number>) => {
      delete state.incomes[action.payload];
    },
    addRecurringIncome: (state, action: PayloadAction<Income>) => {
      state.recurringIncomes[action.payload.id] = action.payload;
    },
    deleteRecurringIncome: (state, action: PayloadAction<number>) => {
      delete state.recurringIncomes[action.payload];
    },
  },
});

export const {
  addExpense,
  deleteExpense,
  addRecurringExpense,
  deleteRecurringExpense,
  addIncome,
  deleteIncome,
  addRecurringIncome,
  deleteRecurringIncome,
} = budgetSlice.actions;

export default budgetSlice.reducer;
