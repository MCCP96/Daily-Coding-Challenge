import { configureStore } from "@reduxjs/toolkit";
import budgetReducer, {
  emptyBudgetState,
  initialBudgetState,
} from "./budget/budgetSlice";
// import historyReducer, { emptyHistoryState } from "./budget/historySlice";
import uiReducer, { initialUIState } from "./ui/uiSlice";

export const defaultState = {
  budget: emptyBudgetState,
  // history: emptyHistoryState,
  ui: initialUIState,
};

export const makeStore = () => {
  const store = configureStore({
    reducer: {
      budget: budgetReducer,
      // history: historyReducer,
      ui: uiReducer,
    },
  });
  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
