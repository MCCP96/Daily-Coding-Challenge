"use  client";

import { budgetActions } from "@/lib/budget/budgetSlice";
import { AppStore, defaultState, makeStore, RootState } from "@/lib/store";
import { uiActions } from "@/lib/ui/uiSlice";
import { useRef } from "react";
import { Provider } from "react-redux";

const loadState = (): RootState => {
  // Local storage
  let state: RootState = defaultState;

  const data = localStorage.getItem("BUDGET_APP_STATE");

  if (data) {
    state = JSON.parse(data);
  } else {
    console.log("no data found, saving default");
    saveState(state);
  }

  return state;
};

const saveState = (state: RootState) => {
  try {
    localStorage.setItem("BUDGET_APP_STATE", JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};

// prettier-ignore
export default function StoreProvider({children}: {children: React.ReactNode}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    const state = loadState();
    // storeRef.current.dispatch(historyActions.initializeData(state))
    storeRef.current.dispatch(budgetActions.initializeData(state))
    storeRef.current.dispatch(uiActions.initializeData(state))
    // need to dispatch new day related queries here
    
    saveState(storeRef.current!.getState()); // save
    
    storeRef.current.subscribe(() => {
      saveState(storeRef.current!.getState());
    });
    
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
