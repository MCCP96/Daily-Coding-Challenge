import React from "react";
import styles from "./Total.module.css";
import { formatNumberWithCommas } from "../utils/numberUtils";

interface Props {
  title?: string;
  date?: string;
  amount: number;
}

export const Total: React.FC<Props> = ({ title, date, amount }) => {
  return (
    <div className={styles.totalBudget}>
      {title && <p>{title}</p>}
      <h2>${formatNumberWithCommas(amount)}</h2>
      {date && <p>{date}</p>}
    </div>
  );
};
