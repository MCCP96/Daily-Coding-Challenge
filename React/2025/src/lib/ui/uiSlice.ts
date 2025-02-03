import { State, UIState } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialUIState: UIState = {
  hideRecurring: false,
  hideGoals: false,
  hideDailyTotal: false,
  hideAllTimeTotal: false,
  theme: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    initializeData(state, action) {
      const { ui } = action.payload;

      for (const key in ui) {
        const item = ui[key];
        state[key] = item;
      }
    },
    toggleShowRecurring(state) {
      state.hideRecurring = !state.hideRecurring;
    },
    toggleHideGoals(state) {
      state.hideGoals = !state.hideGoals;
    },
    toggleHideDaily(state) {
      state.hideDailyTotal = !state.hideDailyTotal;
    },
    toggleHideAllTime(state) {
      state.hideAllTimeTotal = !state.hideAllTimeTotal;
    },
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

const uiReducer = uiSlice.reducer;
export default uiReducer;
