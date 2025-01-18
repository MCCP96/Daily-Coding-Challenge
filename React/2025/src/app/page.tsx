"use client";

import { BudgetList } from "./components/BudgetList";
import { TimeFrameSelector } from "./components/TimeFrameSelector";
import styles from "./page.module.css";
import { calculateTotalBudget } from "./utils/incomeUtils";
import { formatNumberWithCommas } from "./utils/numberUtils";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";
import { Add, Minus } from "./Icons";
import { Modal } from "./components/Modal";
import { BudgetItemForm } from "./components/BudgetItemForm";
import { BudgetItem, BudgetItemType, State } from "./types";

export default function Home() {
  // Budget App - Modal and Refactoring         01/18/2025

  const dispatch = useAppDispatch();
  const budget = useAppSelector((state: State) => state.budget);

  const handleDeleteExpense = (id: string) => {
    dispatch(budgetActions.deleteExpense(id));
  };
  const handleDeleteRecurringExpense = (id: string) => {
    dispatch(budgetActions.deleteRecurringExpense(id));
  };
  const handleDeleteIncome = (id: string) => {
    dispatch(budgetActions.deleteIncome(id));
  };
  const handleDeleteRecurringIncome = (id: string) => {
    dispatch(budgetActions.deleteRecurringIncome(id));
  };

  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    setTotalBudget(
      calculateTotalBudget(
        Object.values(budget.expenses),
        Object.values(budget.recurringExpenses),
        Object.values(budget.incomes),
        Object.values(budget.recurringIncomes)
      )
    );
  }, [budget]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "minus" | null>(null);

  const handleOpenModal = (type: "add" | "minus") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleSaveBudgetItem = (item: BudgetItem) => {
    if (modalType === "add") {
      dispatch(
        budgetActions.addIncome({
          ...item,
          type: BudgetItemType.Income,
          recurring: item.type === BudgetItemType.RecurringIncome,
        })
      );
    } else if (modalType === "minus") {
      dispatch(
        budgetActions.addExpense({
          ...item,
          type: BudgetItemType.Expense,
          recurring: item.type === BudgetItemType.RecurringExpense,
        })
      );
    }

    handleCloseModal();
  };

  return (
    <div className={styles.page}>
      <h1>Budget Tracker</h1>

      <div className={styles.totalBudget}>
        <h2>Total Budget: ${formatNumberWithCommas(totalBudget)}</h2>
      </div>

      <div className={styles.section}>
        <h2>Expenses</h2>
        <BudgetList items={budget.expenses} onDelete={handleDeleteExpense} />
      </div>

      <div className={styles.section}>
        <h2>Recurring Expenses</h2>
        <BudgetList
          items={budget.recurringExpenses}
          onDelete={handleDeleteRecurringExpense}
        />
      </div>

      <div className={styles.section}>
        <h2>Income</h2>
        <BudgetList items={budget.incomes} onDelete={handleDeleteIncome} />
      </div>

      <div className={styles.section}>
        <h2>Recurring Income</h2>
        <BudgetList
          items={budget.recurringIncomes}
          onDelete={handleDeleteRecurringIncome}
        />
      </div>

      <div className={styles.controls}>
        <button onClick={() => handleOpenModal("minus")}>
          <Minus color="red" />
        </button>
        <button onClick={() => handleOpenModal("add")}>
          <Add color="green" />
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <BudgetItemForm
            onClose={handleCloseModal}
            onSave={handleSaveBudgetItem}
          />
        </Modal>
      )}
    </div>
  );
}
