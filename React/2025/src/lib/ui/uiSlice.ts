import { State, UIState } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialUIState: UIState = {
  hideRecurring: false,
  hideDaily: false,
  theme: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    initializeData(state, action: PayloadAction<State>) {
      const { ui } = action.payload;

      for (const key in ui) {
        const item = ui[key];
        state[key] = item;
      }
    },
    toggleShowRecurring(state) {
      state.hideRecurring = !state.hideRecurring;
    },
    toggleHideDaily(state) {
      state.hideDaily = !state.hideDaily;
    },
    setTheme(state, action: PayloadAction<"light" | "dark">) {
      state.theme = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

const uiReducer = uiSlice.reducer;
export default uiReducer;
