import React from "react";
import styles from "./Total.module.css";
import { formatNumberWithCommas } from "../utils/numberUtils";

interface Props {
  date: string;
  amount: number;
}

export const Total: React.FC<Props> = ({ date, amount }) => {
  return (
    <div className={styles.totalBudget}>
      <h2>${formatNumberWithCommas(amount)}</h2>
      <p>{date}</p>
    </div>
  );
};
