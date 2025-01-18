import { useState } from "react";
import styles from "./BudgetItemForm.module.css";
import { BudgetItem, BudgetItemType } from "../types";

interface Props {
  onClose: () => void;
  onSave: (item: BudgetItem) => void;
}

export const BudgetItemForm = ({ onClose, onSave }: Props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<BudgetItemType>(BudgetItemType.Expense);
  const [recurring, setRecurring] = useState(false);

  const handleSave = () => {
    onSave({ id: Date.now().toString(), title: name, amount, type, recurring });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Add Budget Item</h2>
        <form className={styles.form}>
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
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value as BudgetItemType)}
            >
              <option value={BudgetItemType.Expense}>Expense</option>
              <option value={BudgetItemType.RecurringExpense}>
                Recurring Expense
              </option>
              <option value={BudgetItemType.Income}>Income</option>
              <option value={BudgetItemType.RecurringIncome}>
                Recurring Income
              </option>
            </select>
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
            <button type="button" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
