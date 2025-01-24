import { BudgetItem } from "../types";

export const calcDailyValue = (item: BudgetItem): number => {
  const { amount, frequency } = item;
  console.log(amount, frequency);

  let dailyValue: number;
  switch (frequency) {
    case "daily":
      dailyValue = amount;
      break;
    case "weekly":
      dailyValue = amount / 7;
      break;
    case "bi-weekly":
      dailyValue = amount / 14;
      break;
    case "monthly":
      dailyValue = amount / 30;
      break;
    case "yearly":
      dailyValue = amount / 365;
      break;
    default:
      throw new Error("Invalid frequency");
  }

  return Math.round(dailyValue * 100) / 100;
};
