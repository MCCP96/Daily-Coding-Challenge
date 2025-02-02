import { BudgetState, HistoryState, State } from "@/app/types";
import { calculateTotalBudget } from "@/app/utils/budgetUtils";
import { createSlice } from "@reduxjs/toolkit";
import { initialBudgetState } from "./budgetSlice";

const dummyHistory = {
  "2025-01-01": {
    date: "2025-01-01",
    budget: initialBudgetState,
    madeProfit: true,
  },
  "2025-01-02": {
    date: "2025-01-02",
    budget: initialBudgetState,
    madeProfit: true,
  },
  "2025-01-03": {
    date: "2025-01-03",
    budget: initialBudgetState,
    madeProfit: true,
  },
};

export const emptyHistoryState: HistoryState = {};

const historySlice = createSlice({
  name: "history",
  initialState: dummyHistory,
  reducers: {
    initializeData(state, action: { payload: State }) {
      const { budget, history, ui } = action.payload;

      for (const key in history) {
        const item = history[key];
        state[key] = item;
      }
    },
    saveHistoryItem(state, action: { payload: BudgetState }) {
      console.log("in save history");
      const date = action.payload.date;

      state[date] = {
        date,
        budget: action.payload,
        madeProfit: calculateTotalBudget(action.payload) > 0,
      };
    },
  },
});

export const historyActions = historySlice.actions;

const historyReducer = historySlice.reducer;
export default historyReducer;
