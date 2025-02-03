import { useState, useEffect, useRef } from "react";
import styles from "./ItemForm.module.css";
import { BudgetItem, BudgetItemType } from "../types";
import { TimeFrameSelector } from "./TimeFrameSelector";
import { formatDate } from "../utils/dateUtils";

interface Props {
  onClose: () => void;
  onSave: (item: BudgetItem) => void;
  type: BudgetItemType;
  isReccuring?: boolean;
}

export const ItemForm = ({
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

  useEffect(() => {
    const h2Element = document.querySelector(`.${styles.form} h2`);
    if (h2Element) {
      const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
      h2Element.textContent = `Add ${
        recurring && type != BudgetItemType.Goal ? "Recurring " : ""
      }${capitalizedType}`;
    }
  }, [recurring, type]);

  const handleSave = () => {
    onSave({
      date: formatDate(new Date()),
      id: Date.now().toString(),
      title: name,
      amount: +amount.toFixed(2),
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
