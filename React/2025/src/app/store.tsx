import { configureStore } from "@reduxjs/toolkit";
import budgetReducer, { emptyState, initialState } from "./budgetSlice";

const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("budget-data", serializedState);
  } catch (err) {
    // Ignore errors
  }
};

export const loadState = (): State => {
  try {
    const serializedState = localStorage.getItem("budget-data");
    if (serializedState === null) return initialState;
    return JSON.parse(serializedState);
  } catch (err) {
    return emptyState;
  }
};

const store = configureStore({
  reducer: {
    budget: budgetReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;

export default store;
