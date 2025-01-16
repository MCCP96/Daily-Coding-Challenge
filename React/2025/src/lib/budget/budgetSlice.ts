import { createSlice } from "@reduxjs/toolkit";

export const initialBudgetState: Budget = {
  expenses: {
    1: { id: "1", title: "Groceries", cost: 106 },
  },
  recurringExpenses: {
    4: { id: "4", title: "Rent", cost: 1200, frequency: "bi-weekly" },
  },
  incomes: {
    7: { id: "7", title: "Freelance", value: 500 },
  },
  recurringIncomes: {
    6: { id: "6", title: "Salary", value: 3000, frequency: "monthly" },
  },
};

export const emptyBudgetState = {
  expenses: {},
  recurringExpenses: {},
  incomes: {},
  recurringIncomes: {},
};

const budgetSlice = createSlice({
  name: "budget",
  initialState: initialBudgetState,
  reducers: {
    initializeData(state, action) {
      state.expenses = action.payload.budget.expenses;
      state.recurringExpenses = action.payload.budget.recurringExpenses;
      state.incomes = action.payload.budget.incomes;
      state.recurringIncomes = action.payload.budget.recurringIncomes;
    },
    deleteExpense(state, action: { payload: string }) {
      delete state.expenses[action.payload];
    },
    deleteRecurringExpense(state, action: { payload: string }) {
      delete state.recurringExpenses[action.payload];
    },
    deleteIncome(state, action: { payload: string }) {
      delete state.incomes[action.payload];
    },
    deleteRecurringIncome(state, action: { payload: string }) {
      delete state.recurringIncomes[action.payload];
    },
    addExpense(state, action: { payload: Expense }) {
      state.expenses[action.payload.id] = action.payload;
    },
    addRecurringExpense(state, action: { payload: RecurringExpense }) {
      state.recurringExpenses[action.payload.id] = action.payload;
    },
    addIncome(state, action: { payload: Income }) {
      state.incomes[action.payload.id] = action.payload;
    },
    addRecurringIncome(state, action: { payload: RecurringIncome }) {
      state.recurringIncomes[action.payload.id] = action.payload;
    },
  },
});

export const budgetActions = budgetSlice.actions;

const budgetReducer = budgetSlice.reducer;
export default budgetReducer;
