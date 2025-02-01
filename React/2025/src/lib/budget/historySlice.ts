import { Budget, State } from "@/app/types";
import { calculateTotalBudget } from "@/app/utils/budgetUtils";
import { createSlice } from "@reduxjs/toolkit";

export type History = {
  [key: string]: {
    date: string;
    budget: Budget;
    madeProfit: boolean;
  };
};

export const emptyHistoryState: History = {};

const historySlice = createSlice({
  name: "history",
  initialState: emptyHistoryState,
  reducers: {
    initializeData(state, action: { payload: State }) {
      const { budget, history, ui } = action.payload;

      for (const key in history) {
        const item = history[key];
        state[key] = item;
      }
    },
    saveHistoryItem(state, action: { payload: Budget }) {
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
