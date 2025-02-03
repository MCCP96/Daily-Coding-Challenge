"use client";

import { title } from "process";
import { BudgetItem as BudgetItemType } from "../types";
import { BudgetItem } from "./BudgetItem";
import styles from "./ItemList.module.css";
import { RecurringItem } from "./RecurringItem";

type Props = {
  title?: string;
  items: { [key: string]: BudgetItemType };
  recurring?: boolean;
};

export const ItemList = ({
  title = undefined,
  items,
  recurring = false,
}: Props) => {
  if (Object.keys(items).length === 0) {
    return <></>;
  }

  return (
    <>
      {title && <h2>{title}</h2>}

      {recurring ? (
        <div className={styles.list}>
          {Object.values(items).map((item) => (
            <RecurringItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className={styles.list}>
          {Object.values(items).map((item) => (
            <BudgetItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
