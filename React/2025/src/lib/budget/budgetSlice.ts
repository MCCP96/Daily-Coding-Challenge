import { Budget, BudgetItem, BudgetItemType } from "@/app/types";
import { formatDate } from "@/app/utils/dateUtils";
import { createSlice } from "@reduxjs/toolkit";
import { historyActions } from "./historySlice";

export const initialBudgetState: Budget = {
  date: formatDate(new Date()),
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

export const emptyBudgetState: Budget = {
  date: formatDate(new Date()),
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
      const { budget, history } = action.payload;

      const currentDate = formatDate(new Date());

      if (budget.date !== currentDate) {
        // Save the old budget to history
        historyActions.saveHistoryItem(budget);

        // Initialize a new empty budget
        state.date = currentDate;
        state.expenses = {};
        state.recurringExpenses = {};
        state.incomes = {};
        state.recurringIncomes = {};
      } else {
        // Restore today's budget
        state.date = budget.date;
        state.expenses = budget.expenses;
        state.recurringExpenses = budget.recurringExpenses;
        state.incomes = budget.incomes;
        state.recurringIncomes = budget.recurringIncomes;
      }
    },
    deleteBudgetItem(state, action: { payload: BudgetItem }) {
      switch (action.payload.type) {
        case BudgetItemType.Expense:
          delete state.expenses[action.payload.id];
          break;
        case BudgetItemType.RecurringExpense:
          delete state.recurringExpenses[action.payload.id];
          break;
        case BudgetItemType.Income:
          delete state.incomes[action.payload.id];
          break;
        case BudgetItemType.RecurringIncome:
          delete state.recurringIncomes[action.payload.id];
          break;
      }
    },
    saveBudgetItem(state, action: { payload: BudgetItem }) {
      if (action.payload.recurring) {
        if (action.payload.type === BudgetItemType.Expense) {
          state.recurringExpenses[action.payload.id] = action.payload;
        } else {
          state.recurringIncomes[action.payload.id] = action.payload;
        }
      } else {
        if (action.payload.type === BudgetItemType.Expense) {
          state.expenses[action.payload.id] = action.payload;
        } else {
          state.incomes[action.payload.id] = action.payload;
        }
      }
    },
  },
});

export const budgetActions = budgetSlice.actions;

const budgetReducer = budgetSlice.reducer;
export default budgetReducer;
