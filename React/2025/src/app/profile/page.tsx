"use client";

import { useDispatch, useSelector } from "react-redux";
import styles from "./profile.module.css";
import { BudgetList } from "../components/BudgetList";
import { BudgetItem, BudgetItemType, Frequency, State } from "../types";
import { uiActions } from "@/lib/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AddIcon, MinusIcon } from "../Icons";
import { Modal } from "../components/Modal";
import { BudgetItemForm } from "../components/BudgetItemForm";
import { useState } from "react";

export const dummyGoals: { [key: string]: BudgetItem } = {
  goal1: {
    id: "1",
    title: "Emergency Fund",
    amount: 1000,
    type: BudgetItemType.Goal,
    recurring: false,
    frequency: Frequency.Monthly,
  },
  goal2: {
    id: "2",
    title: "Vacation Fund",
    amount: 200,
    type: BudgetItemType.Goal,
    recurring: false,
    frequency: Frequency.BiWeekly,
  },
  goal3: {
    id: "3",
    title: "Retirement Fund",
    amount: 5000,
    type: BudgetItemType.Goal,
    recurring: false,
    frequency: Frequency.Yearly,
  },
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const hideRecurring = useAppSelector(
    (state: State) => state.ui.hideRecurring
  );
  const hideDailyBudget = useAppSelector((state: State) => state.ui.hideDaily);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleRecurring = () => {
    dispatch(uiActions.toggleShowRecurring());
  };

  const handleToggleDailyBudget = () => {
    dispatch(uiActions.toggleHideDaily());
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveBudgetItem = (item: BudgetItem) => {
    // Implement save logic here
    console.log("Saved item:", item);
    handleCloseModal();
  };

  return (
    <div className={styles.page}>
      <div>
        <h2 className={styles.header}>Goals</h2>

        <button className={styles.modalButton} onClick={handleOpenModal}>
          <AddIcon color="var(--green)" width={36} height={36} />
        </button>

        <BudgetList items={dummyGoals} />
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
              onChange={handleToggleRecurring}
              className={styles.checkbox}
            />
          </div>

          <div className={styles.formEntry}>
            <label htmlFor="hideDailyBudget">Hide Daily Budget:</label>
            <input
              type="checkbox"
              id="hideDailyBudget"
              checked={hideDailyBudget}
              onChange={handleToggleDailyBudget}
              className={styles.checkbox}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <BudgetItemForm
            type={BudgetItemType.Goal}
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
