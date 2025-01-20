import { useState } from "react";
import styles from "./BudgetItemForm.module.css";
import { BudgetItem, BudgetItemType } from "../types";

interface Props {
  onClose: () => void;
  onSave: (item: BudgetItem) => void;
  type: BudgetItemType;
}

export const BudgetItemForm = ({ onClose, onSave, type }: Props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [recurring, setRecurring] = useState(false);

  const handleSave = () => {
    onSave({ id: Date.now().toString(), title: name, amount, type, recurring });
  };

  return (
    <div className={styles.overlay}>
      <form className={styles.form}>
        <h2>Add {type}</h2>
        <div className={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Amount:</label>
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Recurring:</label>
          <input
            type="checkbox"
            checked={recurring}
            onChange={(e) => setRecurring(e.target.checked)}
          />
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
