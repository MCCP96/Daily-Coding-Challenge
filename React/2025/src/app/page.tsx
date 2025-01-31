"use client";

import { BudgetList } from "./components/BudgetList";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";
import { Add, Minus } from "./Icons";
import { Modal } from "./components/Modal";
import { BudgetItemForm } from "./components/BudgetItemForm";
import { BudgetItem, BudgetItemType, State } from "./types";
import { Total } from "./components/Total";
import { calculateTotalBudget } from "./utils/budgetUtils";

export default function Home() {
  // BudgetApp - Profile add goals button          01/31/2025

  const dispatch = useAppDispatch();
  const budget = useAppSelector((state: State) => state.budget);

  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    setTotalBudget(calculateTotalBudget(budget));
  }, [budget]);

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
      <Total date={budget.date} amount={totalBudget} />

      <div className={styles.section}>
        <h2>Today</h2>
        <BudgetList items={budget.expenses} />
        <BudgetList items={budget.incomes} />
      </div>

      <div className={styles.section}>
        <h2>Recurring</h2>
        <BudgetList items={budget.recurringExpenses} />
        <BudgetList items={budget.recurringIncomes} />
      </div>

      <div className={styles.controls}>
        <button onClick={() => handleOpenModal(BudgetItemType.Expense)}>
          <Minus color="var(--red)" />
        </button>
        <button onClick={() => handleOpenModal(BudgetItemType.Income)}>
          <Add color="var(--green)" />
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <BudgetItemForm
            type={modalType}
            onClose={handleCloseModal}
            onSave={handleSaveBudgetItem}
          />
        </Modal>
      )}
    </div>
  );
}
