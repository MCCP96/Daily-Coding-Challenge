import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: State = {
  budget: {
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
  },
};

export const emptyState: State = {
  budget: {
    expenses: {},
    recurringExpenses: {},
    incomes: {},
    recurringIncomes: {},
  },
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      console.log(state.budget); // ??
      state.budget.expenses[action.payload.id] = action.payload;
    },
    deleteExpense: (state, action: PayloadAction<number>) => {
      delete state.budget.expenses[action.payload];
    },
    addRecurringExpense: (state, action: PayloadAction<Expense>) => {
      state.budget.recurringExpenses[action.payload.id] = action.payload;
    },
    deleteRecurringExpense: (state, action: PayloadAction<number>) => {
      delete state.budget.recurringExpenses[action.payload];
    },
    addIncome: (state, action: PayloadAction<Income>) => {
      state.budget.incomes[action.payload.id] = action.payload;
    },
    deleteIncome: (state, action: PayloadAction<number>) => {
      delete state.budget.incomes[action.payload];
    },
    addRecurringIncome: (state, action: PayloadAction<Income>) => {
      state.budget.recurringIncomes[action.payload.id] = action.payload;
    },
    deleteRecurringIncome: (state, action: PayloadAction<number>) => {
      delete state.budget.recurringIncomes[action.payload];
    },
    loadData: (state, action: PayloadAction<State>) => {
      state = action.payload;
      console.log(state);
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
  loadData,
} = budgetSlice.actions;

export default budgetSlice.reducer;
