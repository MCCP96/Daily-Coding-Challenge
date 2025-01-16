import { configureStore } from "@reduxjs/toolkit";
import budgetReducer, { initialBudgetState } from "./budget/budgetSlice";

export const defaultState = { budget: initialBudgetState };

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      budget: budgetReducer,
    },
  });
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
