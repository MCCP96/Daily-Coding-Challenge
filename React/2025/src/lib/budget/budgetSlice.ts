import {
  BudgetState,
  BudgetItem,
  BudgetItemType,
  Frequency,
  State,
} from "@/app/types";
import {
  formatDate,
  getDatesInRange,
  updateRecurringItemsDate,
} from "@/app/utils/dateUtils";
import { createSlice } from "@reduxjs/toolkit";

export const initialBudgetState: BudgetState = {
  history: {
    "2025-01-01": {
      date: "2025-01-01",
      expenses: {
        "1": {
          date: "2025-01-01",
          id: "1",
          title: "Groceries",
          amount: 52.55,
          type: BudgetItemType.Expense,
          recurring: false,
        },
      },
      recurringExpenses: {
        "2": {
          date: "2025-01-01",
          id: "2",
          title: "Rent",
          amount: 1000,
          type: BudgetItemType.RecurringExpense,
          recurring: true,
          frequency: Frequency.Monthly,
        },
      },
      incomes: {
        "3": {
          date: "2025-01-01",
          id: "3",
          title: "Dog Sitting",
          amount: 100,
          type: BudgetItemType.Income,
          recurring: false,
        },
      },
      recurringIncomes: {
        "4": {
          date: "2025-01-01",
          id: "4",
          title: "Salary",
          amount: 1000,
          type: BudgetItemType.RecurringIncome,
          recurring: true,
          frequency: Frequency.BiWeekly,
        },
      },
      goals: {
        "5": {
          date: "2025-01-01",
          id: "5",
          title: "Vacation Fund",
          amount: 5000,
          type: BudgetItemType.Goal,
          recurring: true,
          frequency: Frequency.Yearly,
        },
      },
    },
  },
  recurrings: {
    recurringExpenses: {
      "6": {
        date: "2025-01-01",
        id: "6",
        title: "Rent",
        amount: 1000,
        type: BudgetItemType.RecurringExpense,
        recurring: true,
        frequency: Frequency.Monthly,
      },
    },
    recurringIncomes: {
      "7": {
        date: "2025-01-01",
        id: "7",
        title: "Salary",
        amount: 2000,
        type: BudgetItemType.RecurringIncome,
        recurring: true,
        frequency: Frequency.BiWeekly,
      },
    },
    goals: {
      "8": {
        date: "2025-01-01",
        id: "8",
        title: "Vacation Fund",
        amount: 5000,
        type: BudgetItemType.Goal,
        recurring: true,
        frequency: Frequency.Yearly,
      },
    },
  },
};

export const emptyBudgetState: BudgetState = {
  history: {},
  recurrings: {
    recurringExpenses: {
      "6": {
        date: "2025-01-01",
        id: "6",
        title: "Rent",
        amount: 1000,
        type: BudgetItemType.RecurringExpense,
        recurring: true,
        frequency: Frequency.Monthly,
      },
    },
    recurringIncomes: {
      "7": {
        date: "2025-01-01",
        id: "7",
        title: "Salary",
        amount: 2000,
        type: BudgetItemType.RecurringIncome,
        recurring: true,
        frequency: Frequency.BiWeekly,
      },
    },
    goals: {
      "8": {
        date: "2025-01-01",
        id: "8",
        title: "Vacation Fund",
        amount: 5000,
        type: BudgetItemType.Goal,
        recurring: true,
        frequency: Frequency.Yearly,
      },
    },
  },
};

const budgetSlice = createSlice({
  name: "budget",
  initialState: emptyBudgetState,
  reducers: {
    initializeData(state, action: { payload: State }) {
      const { budget } = action.payload;

      const currentDate = formatDate(new Date());
      let lastDate = Object.keys(budget.history).sort().pop() || currentDate;
      const interval = getDatesInRange(lastDate, currentDate);

      state.history = budget.history;
      state.recurrings = budget.recurrings;

      interval.forEach((date) => {
        if (!budget.history[date]) {
          state.history[date] = {
            date: date,
            expenses: {},
            recurringExpenses: updateRecurringItemsDate(
              budget.recurrings.recurringExpenses,
              date
            ),
            incomes: {},
            recurringIncomes: updateRecurringItemsDate(
              budget.recurrings.recurringIncomes,
              date
            ),
            goals: updateRecurringItemsDate(budget.recurrings.goals, date),
          };
        }
      });
    },
    saveBudgetItem(state, action: { payload: BudgetItem }) {
      const { date } = action.payload;
      const item = action.payload;

      if (item.recurring) {
        switch (item.type) {
          case BudgetItemType.Expense:
            item.type = BudgetItemType.RecurringExpense;
            state.history[date].recurringExpenses[item.id] = item;
            state.recurrings.recurringExpenses[item.id] = item;
            break;
          case BudgetItemType.Income:
            item.type = BudgetItemType.RecurringIncome;
            state.history[date].recurringIncomes[item.id] = item;
            state.recurrings.recurringIncomes[item.id] = item;
            break;
          case BudgetItemType.Goal:
            state.history[date].goals[item.id] = item;
            state.recurrings.goals[item.id] = item;
            break;
        }
      } else {
        switch (item.type) {
          case BudgetItemType.Expense:
            state.history[date].expenses[item.id] = item;
            break;
          case BudgetItemType.Income:
            state.history[date].incomes[item.id] = item;
            break;
        }
      }
    },
    deleteBudgetItem(state, action: { payload: BudgetItem }) {
      const { date } = action.payload;
      const budget = state.history[date];

      if (!budget) return;
      const item = action.payload;

      switch (item.type) {
        case BudgetItemType.Expense:
          delete budget.expenses[item.id];
          break;
        case BudgetItemType.RecurringExpense:
          delete budget.recurringExpenses[item.id];
          break;
        case BudgetItemType.Income:
          delete budget.incomes[item.id];
          break;
        case BudgetItemType.RecurringIncome:
          delete budget.recurringIncomes[item.id];
          break;
        case BudgetItemType.Goal:
          delete budget.goals[item.id];
          break;
      }
    },
    deleteRecurringItem(state, action: { payload: BudgetItem }) {
      const item = action.payload;
      const currentDate = formatDate(new Date());

      switch (item.type) {
        case BudgetItemType.RecurringExpense:
          delete state.recurrings.recurringExpenses[item.id];
          delete state.history[currentDate]?.recurringExpenses[item.id];
          break;
        case BudgetItemType.RecurringIncome:
          delete state.recurrings.recurringIncomes[item.id];
          delete state.history[currentDate]?.recurringIncomes[item.id];
          break;
        case BudgetItemType.Goal:
          delete state.recurrings.goals[item.id];
          delete state.history[currentDate]?.goals[item.id];
          break;
      }
    },
  },
});

export const budgetActions = budgetSlice.actions;

const budgetReducer = budgetSlice.reducer;
export default budgetReducer;
