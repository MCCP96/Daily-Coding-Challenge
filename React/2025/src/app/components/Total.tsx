import React, { useEffect, useState } from "react";
import styles from "./Total.module.css";
import { formatNumberWithCommas } from "../utils/numberUtils";

interface Props {
  title?: string;
  date?: string;
  amount: number;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export const Total: React.FC<Props> = ({ title, date, amount }) => {
  const [displayAmount, setDisplayAmount] = useState(0);

  useEffect(() => {
    let start: number;
    const duration = 3000; // increased duration in ms
    const startAmount = displayAmount;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const easedProgress = easeOutExpo(progress / duration);
      const currentAmount =
        startAmount + easedProgress * (amount - startAmount);

      setDisplayAmount(currentAmount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setDisplayAmount(amount);
      }
    };

    requestAnimationFrame(animate);
  }, [amount]);

  const formattedAmount = formatNumberWithCommas(Math.round(displayAmount));

  return (
    <div className={styles.totalBudget}>
      {title && <p>{title}</p>}
      <h2>${formattedAmount}</h2>
      {date && <p>{date}</p>}
    </div>
  );
};
