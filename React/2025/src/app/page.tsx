"use client";

import styles from "./page.module.css";

export default function Home() {
  // Budget List/Item          01/08/2025

  // Refactored code to use the BudgetList and BudgetItem components

  return (
    <div className={styles.page}>
      <h1>Budget Tracker</h1>
      <p>Select a section to get started</p>
    </div>
  );
}
