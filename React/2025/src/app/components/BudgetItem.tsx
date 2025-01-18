"use client";

import { BudgetItem as BudgetItemType } from "../types";
import { formatNumberWithCommas } from "../utils/numberUtils";
import styles from "./BudgetItem.module.css";

type Props = {
  item: BudgetItemType;
  onDelete: (id: string) => void;
};

export const BudgetItem = ({ item, onDelete }: Props) => {
  return (
    <div className={styles.container}>
      <span>{item.title}</span>
      <span>${formatNumberWithCommas(item.amount)}</span>
      <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>
        &#x2716;
      </button>
    </div>
  );
};
