import React from "react";
import styles from "./BudgetList.module.css";
import { BudgetItem } from "./BudgetItem";

interface Props {
  items: { [key: string]: any };
  onDelete: (id: number) => void;
}

export const BudgetList: React.FC<Props> = ({ items = {}, onDelete }) => {
  return (
    <ul className={styles.budgetList}>
      {Object.entries(items).map(([k, item]) => (
        <li key={item.id} className={styles.budgetItem}>
          <BudgetItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
