"use client";

import { BudgetList } from "./components/BudgetList";
import { TimeFrameSelector } from "./components/TimeFrameSelector";
import styles from "./page.module.css";
import { calculateTotalBudget } from "./utils/incomeUtils";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { budgetActions } from "@/lib/budget/budgetSlice";
import { Add, Minus } from "./Icons";
import { Modal } from "./components/Modal";
import { BudgetItemForm } from "./components/BudgetItemForm";
import { BudgetItem, BudgetItemType, State } from "./types";
import { Total } from "./components/Total";

export default function Home() {
  // Budget App - navlinks dropdown and styling         01/22/2025

  const dispatch = useAppDispatch();
  const budget = useAppSelector((state: State) => state.budget);

  const handleDelete = (id: string, type: BudgetItemType) => {
    switch (type) {
      case BudgetItemType.Expense:
        dispatch(budgetActions.deleteExpense(id));
        break;
      case BudgetItemType.RecurringExpense:
        dispatch(budgetActions.deleteRecurringExpense(id));
        break;
      case BudgetItemType.Income:
        dispatch(budgetActions.deleteIncome(id));
        break;
      case BudgetItemType.RecurringIncome:
        dispatch(budgetActions.deleteRecurringIncome(id));
        break;
    }
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
    if (modalType === BudgetItemType.Expense) {
      if (item.recurring) {
        dispatch(
          budgetActions.addRecurringExpense({
            ...item,
            type: BudgetItemType.RecurringExpense,
            recurring: true,
          })
        );
      } else {
        dispatch(
          budgetActions.addExpense({
            ...item,
            type: BudgetItemType.Expense,
            recurring: false,
          })
        );
      }
    } else if (modalType === BudgetItemType.Income) {
      if (item.recurring) {
        dispatch(
          budgetActions.addRecurringIncome({
            ...item,
            type: BudgetItemType.RecurringIncome,
            recurring: true,
          })
        );
      } else {
        dispatch(
          budgetActions.addIncome({
            ...item,
            type: BudgetItemType.Income,
            recurring: false,
          })
        );
      }
    }

    handleCloseModal();
  };

  return (
    <div className={styles.page}>
      <Total date={new Date()} amount={totalBudget} />

      <div className={styles.section}>
        <h2>Expenses</h2>
        <BudgetList
          items={budget.expenses}
          onDelete={(id) => handleDelete(id, BudgetItemType.Expense)}
        />
      </div>

      <div className={styles.section}>
        <h2>Recurring Expenses</h2>
        <BudgetList
          items={budget.recurringExpenses}
          onDelete={(id) => handleDelete(id, BudgetItemType.RecurringExpense)}
        />
      </div>

      <div className={styles.section}>
        <h2>Income</h2>
        <BudgetList
          items={budget.incomes}
          onDelete={(id) => handleDelete(id, BudgetItemType.Income)}
        />
      </div>

      <div className={styles.section}>
        <h2>Recurring Income</h2>
        <BudgetList
          items={budget.recurringIncomes}
          onDelete={(id) => handleDelete(id, BudgetItemType.RecurringIncome)}
        />
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
