"use client";

import { ItemList } from "./components/ItemList";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";
import { AddIcon, MinusIcon } from "./Icons";
import { Modal } from "./components/Modal";
import { ItemForm } from "./components/ItemForm";
import { BudgetItem, BudgetItemType, State } from "./types";
import { Total } from "./components/Total";
import { calculateTotalBudget } from "./utils/budgetUtils";
import { formatDate } from "./utils/dateUtils";

export default function Home() {
  // BudgetApp - Final Clean up          02/03/2025

  // a ton of refactoring to achieve the final version of the BudgetApp.
  // going to bring it to its own repo and get it online.

  const dispatch = useAppDispatch();
  const today = formatDate(new Date());

  const budgetHistory = useAppSelector((state: State) => state.budget.history);
  const budget = budgetHistory[today];
  const ui = useAppSelector((state: State) => state.ui);
  const { hideRecurring, hideGoals, hideDailyTotal, hideAllTimeTotal } = ui;

  const [totalToday, setTotalToday] = useState(0);
  const [totalAllTime, setTotalAllTime] = useState(0);

  useEffect(() => {
    setTotalToday(calculateTotalBudget(budget));
  }, [budget]);

  useEffect(() => {
    const allTimeTotal = Object.values(budgetHistory).reduce(
      (acc, dayBudget) => {
        return acc + calculateTotalBudget(dayBudget);
      },
      0
    );
    setTotalAllTime(allTimeTotal);
  }, [budgetHistory]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<BudgetItemType>(
    BudgetItemType.Expense
  );

  const handleOpenModal = (type: BudgetItemType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(BudgetItemType.Expense);
  };

  const handleSaveBudgetItem = (item: BudgetItem) => {
    dispatch(budgetActions.saveBudgetItem(item));
    handleCloseModal();
  };

  return (
    <div className={styles.page}>
      <div className={styles.totals}>
        {!hideDailyTotal && (
          <div style={{ flex: 1 }}>
            <Total title="Today" amount={totalToday} />
          </div>
        )}
        {!hideAllTimeTotal && (
          <div style={{ flex: 2 }}>
            <Total title="All Time" amount={totalAllTime} />
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h2>Today</h2>
        <ItemList items={budget.incomes} />
        <ItemList items={budget.expenses} />
      </div>

      {!hideRecurring && (
        <div className={styles.section}>
          <h2>Recurring</h2>
          <ItemList items={budget.recurringIncomes} />
          {!hideGoals && <ItemList items={budget.goals} />}
          <ItemList items={budget.recurringExpenses} />
        </div>
      )}

      <div className={styles.controls}>
        <button
          className={styles.modalButton}
          onClick={() => handleOpenModal(BudgetItemType.Income)}
        >
          <AddIcon color="var(--green)" />
        </button>
        <button
          className={styles.modalButton}
          onClick={() => handleOpenModal(BudgetItemType.Expense)}
        >
          <MinusIcon color="var(--red)" />
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <ItemForm
            type={modalType}
            onClose={handleCloseModal}
            onSave={handleSaveBudgetItem}
          />
        </Modal>
      )}
    </div>
  );
}
