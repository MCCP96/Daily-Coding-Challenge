import { BudgetItem } from "../types";

export const getDatesInRange = (startDate: string, endDate: string) => {
  const dates = [];
  let currentDate = new Date(startDate);
  currentDate.setDate(currentDate.getDate() + 1); // Add 1 day to startDate
  const end = new Date(endDate);
  end.setDate(end.getDate() + 1); // Add 1 day to endDate

  while (currentDate <= end) {
    dates.push(formatDate(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

export const displayDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  date.setDate(date.getDate() + 1);
  return date.toLocaleDateString("en-US", options);
};

export const displayLongDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  date.setDate(date.getDate() + 1);
  return date.toLocaleDateString("en-US", options);
};

export const parseDate = (dateString: string): Date => {
  return new Date(dateString);
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const updateRecurringItemsDate = (
  items: { [key: string]: BudgetItem },
  newDate: string
): { [key: string]: BudgetItem } => {
  return Object.fromEntries(
    Object.entries(items).map(([id, item]) => [id, { ...item, date: newDate }])
  );
};
