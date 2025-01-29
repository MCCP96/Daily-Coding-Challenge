"use client";

import { useState } from "react";
import styles from "./profile.module.css";
import { BudgetList } from "../components/BudgetList";
import { BudgetItem, BudgetItemType, Frequency } from "../types";

const dummyBudgetItems: { [key: string]: BudgetItem } = {
  item1: {
    id: "1",
    title: "Budget Item 1",
    amount: 100,
    type: BudgetItemType.Goal,
    recurring: true,
    frequency: Frequency.Monthly,
  },
  item2: {
    id: "2",
    title: "Budget Item 2",
    amount: 200,
    type: BudgetItemType.Goal,
    recurring: true,
    frequency: Frequency.Weekly,
  },
  item3: {
    id: "3",
    title: "Budget Item 3",
    amount: 300,
    type: BudgetItemType.Goal,
    recurring: true,
    frequency: Frequency.Yearly,
  },
};

const ProfilePage = () => {
  const [showRecurring, setShowRecurring] = useState(false);
  const [goals, setGoals] = useState("");

  const handleToggle = () => {
    setShowRecurring(!showRecurring);
  };

  return (
    <div className={styles.profilePage}>
      <h2>Goals</h2>
      <BudgetList items={dummyBudgetItems} />

      <h2>Settings</h2>
      <div className={styles.formGroup}>
        <label htmlFor="showRecurring">Show Recurring Budget Items:</label>
        <input
          type="checkbox"
          id="showRecurring"
          checked={showRecurring}
          onChange={handleToggle}
          className={styles.checkbox}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
