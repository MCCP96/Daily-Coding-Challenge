import React from "react";
import styles from "./Total.module.css";
import { formatNumberWithCommas } from "../utils/numberUtils";

interface Props {
  date: Date;
  amount: number;
}

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export const Total: React.FC<Props> = ({ date, amount }) => {
  return (
    <div className={styles.totalBudget}>
      <h2>${formatNumberWithCommas(amount)}</h2>
      <p>{formatDate(date)}</p>
    </div>
  );
};
