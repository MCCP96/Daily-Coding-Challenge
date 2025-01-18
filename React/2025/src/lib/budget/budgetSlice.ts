import { Budget, BudgetItem, BudgetItemType } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

export const initialBudgetState: Budget = {
  expenses: {
    1: {
      id: "1",
      title: "Groceries",
      amount: 106,
      type: BudgetItemType.Expense,
      recurring: false,
    },
  },
  recurringExpenses: {
    4: {
      id: "4",
      title: "Rent",
      amount: 1200,
      type: BudgetItemType.RecurringExpense,
      recurring: true,
      frequency: "bi-weekly",
    },
  },
  incomes: {
    7: {
      id: "7",
      title: "Freelance",
      amount: 500,
      type: BudgetItemType.Income,
      recurring: false,
    },
  },
  recurringIncomes: {
    6: {
      id: "6",
      title: "Salary",
      amount: 3000,
      type: BudgetItemType.RecurringIncome,
      recurring: true,
      frequency: "monthly",
    },
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
    addExpense(state, action: { payload: BudgetItem }) {
      state.expenses[action.payload.id] = action.payload;
    },
    addRecurringExpense(state, action: { payload: BudgetItem }) {
      state.recurringExpenses[action.payload.id] = action.payload;
    },
    addIncome(state, action: { payload: BudgetItem }) {
      state.incomes[action.payload.id] = action.payload;
    },
    addRecurringIncome(state, action: { payload: BudgetItem }) {
      state.recurringIncomes[action.payload.id] = action.payload;
    },
  },
});

export const budgetActions = budgetSlice.actions;

const budgetReducer = budgetSlice.reducer;
export default budgetReducer;
