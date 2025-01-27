"use client";

import { Total } from "../components/Total";
import { BudgetList } from "../components/BudgetList";
import styles from "./page.module.css";
import { useAppSelector } from "@/lib/hooks";
import { formatDate } from "../utils/dateUtils";

const dummyHistory = {
  day1: {
    date: "2025-01-01",
    budget: {
      expenses: {
        e1: {
          id: "e1",
          title: "Groceries",
          amount: 50,
          type: "expense",
          recurring: false,
        },
        e2: {
          id: "e2",
          title: "Transport",
          amount: 20,
          type: "expense",
          recurring: false,
        },
      },
      recurringExpenses: {},
      incomes: {
        i1: {
          id: "i1",
          title: "Salary",
          amount: 1000,
          type: "income",
          recurring: false,
        },
      },
      recurringIncomes: {},
    },
    madeProfit: true,
  },
  day2: {
    date: "2025-01-02",
    budget: {
      expenses: {
        e1: {
          id: "e1",
          title: "Utilities",
          amount: 100,
          type: "expense",
          recurring: false,
        },
      },
      recurringExpenses: {},
      incomes: {
        i1: {
          id: "i1",
          title: "Freelance",
          amount: 200,
          type: "income",
          recurring: false,
        },
      },
      recurringIncomes: {},
    },
    madeProfit: true,
  },
  day3: {
    date: "2025-01-03",
    budget: {
      expenses: {
        e1: {
          id: "e1",
          title: "Dining",
          amount: 70,
          type: "expense",
          recurring: false,
        },
      },
      recurringExpenses: {},
      incomes: {
        i1: {
          id: "i1",
          title: "Investment",
          amount: 300,
          type: "income",
          recurring: false,
        },
      },
      recurringIncomes: {},
    },
    madeProfit: true,
  },
};

const Page = () => {
  const history = useAppSelector((state) => state.history) || dummyHistory;

  return (
    <div className={styles.container}>
      <div className={styles.totals}>
        <Total title="Incomes" amount={0} />
        <Total title="Expenses" amount={0} />
      </div>
      {Object.entries(dummyHistory).map(([key, value]) => (
        <div key={key}>
          <h2>{formatDate(new Date(value.date))}</h2>
          <BudgetList items={value.budget.expenses} />
          <BudgetList items={value.budget.recurringExpenses} />
          <BudgetList items={value.budget.incomes} />
          <BudgetList items={value.budget.recurringIncomes} />
        </div>
      ))}
    </div>
  );
};

export default Page;
