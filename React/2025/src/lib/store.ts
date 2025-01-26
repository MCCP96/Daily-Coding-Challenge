import { configureStore } from "@reduxjs/toolkit";
import budgetReducer, { initialBudgetState } from "./budget/budgetSlice";
import historyReducer, { emptyHistoryState } from "./budget/historySlice";

export const defaultState = {
  budget: initialBudgetState,
  history: emptyHistoryState,
};

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      budget: budgetReducer,
      history: historyReducer,
    },
  });
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
