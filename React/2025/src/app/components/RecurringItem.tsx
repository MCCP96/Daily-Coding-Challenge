"use client";

import { useAppDispatch } from "@/lib/hooks";
import { BudgetItem, BudgetItemType } from "../types";
import { formatNumberWithCommas } from "../utils/numberUtils";
import styles from "./BudgetItem.module.css";
import { budgetActions } from "@/lib/budget/budgetSlice";

type Props = {
  item: BudgetItem;
};

export const RecurringItem = ({ item }: Props) => {
  const isExpense = item.type === BudgetItemType.RecurringExpense;
  const isGoal = item.type === BudgetItemType.Goal;

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    if (confirm("Are you sure?")) {
      dispatch(budgetActions.deleteRecurringItem(item));
    }
  };

  return (
    <div
      className={`${styles.container} ${
        isExpense ? styles.expense : isGoal ? styles.goal : styles.income
      } `}
    >
      <span>{item.title}</span>
      <div className={styles.amount}>
        ${formatNumberWithCommas(item.amount)} {item.frequency}
      </div>
      <button onClick={handleDelete} className={styles.deleteButton}>
        &#x2716;
      </button>
    </div>
  );
};
