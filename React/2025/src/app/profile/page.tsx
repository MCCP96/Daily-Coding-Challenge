"use client";

import styles from "./profile.module.css";
import { BudgetItem, BudgetItemType, Frequency, State } from "../types";
import { uiActions } from "@/lib/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AddIcon, MinusIcon } from "../Icons";
import { Modal } from "../components/Modal";
import { useState } from "react";
import { ItemList } from "../components/ItemList";
import { ItemForm } from "../components/ItemForm";
import { budgetActions } from "@/lib/budget/budgetSlice";

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  const recurrings = useAppSelector((state: State) => state.budget.recurrings);
  const { goals, recurringExpenses, recurringIncomes } = recurrings;

  const ui = useAppSelector((state: State) => state.ui);
  const { hideRecurring, hideGoals, hideDailyTotal, hideAllTimeTotal } = ui;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<BudgetItemType>(BudgetItemType.Goal);

  const handleOpenModal = (type: BudgetItemType) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveBudgetItem = (item: BudgetItem) => {
    console.log(item);
    dispatch(budgetActions.saveBudgetItem(item));
    handleCloseModal();
  };

  return (
    <div className={styles.page}>
      <div>
        <h2 className={styles.header}>Goals</h2>
        <button
          className={styles.modalButton}
          onClick={() => handleOpenModal(BudgetItemType.Goal)}
        >
          <AddIcon color="var(--gold)" width={36} height={36} />
        </button>
        <ItemList items={goals} recurring={true} />
      </div>

      <div>
        <h2 className={styles.header}>Recurring Incomes</h2>
        <button
          className={styles.modalButton}
          onClick={() => handleOpenModal(BudgetItemType.Income)}
        >
          <AddIcon color="var(--green)" width={36} height={36} />
        </button>
        <ItemList items={recurringIncomes} recurring={true} />
      </div>

      <div>
        <h2 className={styles.header}>Recurring Expenses</h2>
        <button
          className={styles.modalButton}
          onClick={() => handleOpenModal(BudgetItemType.Expense)}
        >
          <MinusIcon color="var(--red)" width={36} height={36} />
        </button>
        <ItemList items={recurringExpenses} recurring={true} />
      </div>

      <div>
        <h2>Settings</h2>

        <div className={styles.formGroup}>
          <div className={styles.formEntry}>
            <label htmlFor="hideRecurring">Hide Recurring Items:</label>
            <input
              type="checkbox"
              id="hideRecurring"
              checked={hideRecurring}
              onChange={() => dispatch(uiActions.toggleShowRecurring())}
              className={styles.checkbox}
            />
          </div>

          <div className={styles.formEntry}>
            <label htmlFor="hideGoals">Hide Goals:</label>
            <input
              type="checkbox"
              id="hideGoals"
              checked={hideGoals}
              onChange={() => dispatch(uiActions.toggleHideGoals())}
              className={styles.checkbox}
            />
          </div>

          <div className={styles.formEntry}>
            <label htmlFor="hideDailyBudget">Hide Daily Total:</label>
            <input
              type="checkbox"
              id="hideDailyBudget"
              checked={hideDailyTotal}
              onChange={() => dispatch(uiActions.toggleHideDaily())}
              className={styles.checkbox}
            />
          </div>
          <div className={styles.formEntry}>
            <label htmlFor="hideAllTimeBudget">Hide All-Time Total:</label>
            <input
              type="checkbox"
              id="hideAllTimeBudget"
              checked={hideAllTimeTotal}
              onChange={() => dispatch(uiActions.toggleHideAllTime())}
              className={styles.checkbox}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <ItemForm
            type={formType}
            onClose={handleCloseModal}
            onSave={handleSaveBudgetItem}
            isReccuring={true}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProfilePage;
