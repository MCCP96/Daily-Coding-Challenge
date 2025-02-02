import { useState, useEffect, useRef } from "react";
import styles from "./BudgetItemForm.module.css";
import { BudgetItem, BudgetItemType } from "../types";
import { TimeFrameSelector } from "./TimeFrameSelector";

interface Props {
  onClose: () => void;
  onSave: (item: BudgetItem) => void;
  type: BudgetItemType;
  isReccuring?: boolean;
}

export const BudgetItemForm = ({
  onClose,
  onSave,
  type,
  isReccuring = false,
}: Props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [recurring, setRecurring] = useState(isReccuring);
  const [timeframe, setTimeframe] = useState("Bi-Weekly");

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleSave = () => {
    onSave({
      id: Date.now().toString(),
      title: name,
      amount,
      type,
      recurring,
      frequency: recurring ? timeframe.toLowerCase() : undefined,
    });
  };

  return (
    <div className={styles.overlay}>
      <form className={`${styles.form} ${styles[type.toLowerCase()]}`}>
        <h2>Add {type}</h2>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameInputRef}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Amount</label>
          <input
            type="number"
            placeholder="0"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className={styles.recurringGroup}>
          <div className={`${styles.formGroup} ${styles.horizontal}`}>
            <label>Recurring</label>
            <div>
              <input
                type="checkbox"
                checked={recurring}
                onChange={(e) => setRecurring(e.target.checked)}
              />
            </div>
          </div>

          {recurring && (
            <TimeFrameSelector
              onChange={(timeframe) => setTimeframe(timeframe)}
            />
          )}
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
