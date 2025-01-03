import { useState } from "react";
import styles from "./NewExpenseForm.module.css";

type Props = {
  onAddExpense: (title: string, cost: number) => void;
};

export const NewExpenseForm = ({ onAddExpense }: Props) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");

  const handleAddExpense = () => {
    if (title.trim() !== "" && !isNaN(Number(cost))) {
      onAddExpense(title, Number(cost));
      setTitle("");
      setCost("");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense title"
      />
      <input
        type="text"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Cost"
      />
      <button onClick={handleAddExpense}>Add</button>
    </div>
  );
};
