"use client";

import { BudgetItem as BudgetItemType } from "../types";
import { BudgetItem } from "./BudgetItem";
import styles from "./BudgetList.module.css";

type Props = {
  items: { [key: string]: BudgetItemType };
};

export const BudgetList = ({ items }: Props) => {
  return (
    <div className={styles.list}>
      {Object.values(items).map((item) => (
        <BudgetItem key={item.id} item={item} />
      ))}
    </div>
  );
};
