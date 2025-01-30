"use client";

import { useAppDispatch } from "@/lib/hooks";
import { BudgetItem as BudgetItemT, BudgetItemType } from "../types";
import { formatNumberWithCommas } from "../utils/numberUtils";
import { calcDailyValue } from "../utils/recurringUtils";
import styles from "./BudgetItem.module.css";
import { budgetActions } from "@/lib/budget/budgetSlice";

type Props = {
  item: BudgetItemT;
};

export const BudgetItem = ({ item }: Props) => {
  const isExpense =
    item.type === BudgetItemType.Expense ||
    item.type === BudgetItemType.RecurringExpense;
  const isRecurring =
    item.type === BudgetItemType.RecurringExpense ||
    item.type === BudgetItemType.RecurringIncome ||
    item.type === BudgetItemType.Goal;

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(budgetActions.deleteBudgetItem(item));
  };

  return (
    <div
      className={`${styles.container} ${
        isExpense
          ? styles.expense
          : item.type == BudgetItemType.Goal
          ? styles.goal
          : styles.income
      } `}
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
