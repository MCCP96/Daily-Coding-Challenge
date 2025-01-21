"use client";

import {
  BudgetItem as BudgetItemType,
  BudgetItemType as ItemType,
} from "../types";
import { formatNumberWithCommas } from "../utils/numberUtils";
import styles from "./BudgetItem.module.css";

type Props = {
  item: BudgetItemType;
  onDelete: (id: string) => void;
};

export const BudgetItem = ({ item, onDelete }: Props) => {
  const isExpense =
    item.type === ItemType.Expense || item.type === ItemType.RecurringExpense;

  return (
    <div
      className={`${styles.container} ${
        isExpense ? styles.expense : styles.income
      }`}
    >
      <span>{item.title}</span>
      <span className={styles.amount}>
        ${formatNumberWithCommas(item.amount)}
      </span>
      <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>
        &#x2716;
      </button>
    </div>
  );
};
