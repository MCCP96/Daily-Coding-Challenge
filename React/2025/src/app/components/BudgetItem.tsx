"use client";

import { useAppDispatch } from "@/lib/hooks";
import {
  BudgetItem as BudgetItemType,
  BudgetItemType as ItemType,
} from "../types";
import { formatNumberWithCommas } from "../utils/numberUtils";
import { calcDailyValue } from "../utils/recurringUtils";
import styles from "./BudgetItem.module.css";
import { budgetActions } from "@/lib/budget/budgetSlice";

type Props = {
  item: BudgetItemType;
};

export const BudgetItem = ({ item }: Props) => {
  const isExpense =
    item.type === ItemType.Expense || item.type === ItemType.RecurringExpense;
  const isRecurring =
    item.type === ItemType.RecurringExpense ||
    item.type === ItemType.RecurringIncome;

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(budgetActions.deleteBudgetItem(item));
  };

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
            <span>
              {isExpense ? "−" : ""}$
              {formatNumberWithCommas(calcDailyValue(item))}
            </span>
          </>
        ) : (
          <span>
            {isExpense ? "−" : ""}${formatNumberWithCommas(item.amount)}
          </span>
        )}
      </div>
      <button onClick={handleDelete} className={styles.deleteButton}>
        &#x2716;
      </button>
    </div>
  );
};
