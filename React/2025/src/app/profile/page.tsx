"use client";

import { useDispatch, useSelector } from "react-redux";
import styles from "./profile.module.css";
import { BudgetList } from "../components/BudgetList";
import { BudgetItem, BudgetItemType, Frequency, State } from "../types";
import { AddButton } from "../components/AddButton";
import { uiActions } from "@/lib/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const dummyGoals: { [key: string]: BudgetItem } = {
  goal1: {
    id: "1",
    title: "Emergency Fund",
    amount: 1000,
    type: BudgetItemType.Goal,
    recurring: false,
    frequency: Frequency.Monthly,
  },
  goal2: {
    id: "2",
    title: "Vacation Fund",
    amount: 200,
    type: BudgetItemType.Goal,
    recurring: false,
    frequency: Frequency.BiWeekly,
  },
  goal3: {
    id: "3",
    title: "Retirement Fund",
    amount: 5000,
    type: BudgetItemType.Goal,
    recurring: false,
    frequency: Frequency.Yearly,
  },
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const hideRecurring = useAppSelector(
    (state: State) => state.ui.hideRecurring
  );
  const hideDailyBudget = useAppSelector((state: State) => state.ui.hideDaily);

  const handleToggleRecurring = () => {
    dispatch(uiActions.toggleShowRecurring());
  };

  const handleToggleDailyBudget = () => {
    dispatch(uiActions.toggleHideDaily());
  };

  return (
    <div className={styles.page}>
      <div>
        <h2 className={styles.header}>Goals</h2>
        <AddButton />
        <BudgetList items={dummyGoals} />
      </div>

      <div>
        <h2>Settings</h2>

        <div className={styles.formGroup}>
          <div className={styles.formEntry}>
            <label htmlFor="hideRecurring">Hide Recurring Items:</label>
            <input
              type="checkbox"
              id="hideRecurring"
              checked={hideRecurring}
              onChange={handleToggleRecurring}
              className={styles.checkbox}
            />
          </div>

          <div className={styles.formEntry}>
            <label htmlFor="hideDailyBudget">Hide Daily Budget:</label>
            <input
              type="checkbox"
              id="hideDailyBudget"
              checked={hideDailyBudget}
              onChange={handleToggleDailyBudget}
              className={styles.checkbox}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
