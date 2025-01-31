"use client";

import { useState } from "react";
import styles from "./profile.module.css";
import { BudgetList } from "../components/BudgetList";
import { BudgetItem, BudgetItemType, Frequency } from "../types";
import { Add } from "../Icons";
import { AddButton } from "../components/AddButton";

const financialGoals: { [key: string]: BudgetItem } = {
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
  const [showRecurring, setShowRecurring] = useState(false);
  const [hideDailyBudget, setHideDailyBudget] = useState(false);

  const handleToggleRecurring = () => {
    setShowRecurring(!showRecurring);
  };

  const handleToggleDailyBudget = () => {
    setHideDailyBudget(!hideDailyBudget);
  };

  return (
    <div className={styles.page}>
      <div>
        <h2 className={styles.header}>Goals</h2>
        <AddButton />
        <BudgetList items={financialGoals} />
      </div>

      <div>
        <h2>Settings</h2>

        <div className={styles.formGroup}>
          <div className={styles.formEntry}>
            <label htmlFor="showRecurring">Show Recurring Budget Items:</label>
            <input
              type="checkbox"
              id="showRecurring"
              checked={showRecurring}
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
