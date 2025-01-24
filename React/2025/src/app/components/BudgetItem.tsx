"use client";

import {
  BudgetItem as BudgetItemType,
  BudgetItemType as ItemType,
} from "../types";
import { formatNumberWithCommas } from "../utils/numberUtils";
import { calcDailyValue } from "../utils/recurringUtils";
import styles from "./BudgetItem.module.css";

type Props = {
  item: BudgetItemType;
  onDelete: (id: string) => void;
};

export const BudgetItem = ({ item, onDelete }: Props) => {
  const isExpense =
    item.type === ItemType.Expense || item.type === ItemType.RecurringExpense;
  const isRecurring =
    item.type === ItemType.RecurringExpense ||
    item.type === ItemType.RecurringIncome;

  return (
    <div
      className={`${styles.container} ${
        isExpense ? styles.expense : styles.income
      }`}
    >
      <span>{item.title}</span>
      <div className={styles.amount}>
        {isRecurring ? (
          <>
            <span className={styles.recurring}>
              ${formatNumberWithCommas(item.amount)} {item.frequency} ={" "}
            </span>
            <span>${formatNumberWithCommas(calcDailyValue(item))}</span>
          </>
        ) : (
          <span>${formatNumberWithCommas(item.amount)}</span>
        )}
      </div>
      <button onClick={() => onDelete(item.id)} className={styles.deleteButton}>
        &#x2716;
      </button>
    </div>
  );
};
