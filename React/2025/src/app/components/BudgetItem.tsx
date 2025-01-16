"use client";

import { formatNumberWithCommas } from "../utils/numberUtils";
import styles from "./BudgetItem.module.css";

type Props = {
  item: Income | Expense;
  onDelete: (id: string) => void;
};

export const BudgetItem = ({ item, onDelete }: Props) => {
  if ("cost" in item) {
    // Expense
    return (
      <div className={styles.container}>
        <span>{item.title}</span>
        <span>${formatNumberWithCommas(item.cost)}</span>

        <button
          onClick={() => onDelete(item.id)}
          className={styles.deleteButton}
        >
          &#x2716;
        </button>
      </div>
    );
  } else if ("value" in item) {
    // Income
    return (
      <div className={styles.container}>
        <span>{item.title}</span>
        <span>
          ${formatNumberWithCommas(item.value)}{" "}
          {/* {item.frequency && `(${item.frequency})`} */}
        </span>

        <button
          onClick={() => onDelete(item.id)}
          className={styles.deleteButton}
        >
          &#x2716;
        </button>
      </div>
    );
  }
};
