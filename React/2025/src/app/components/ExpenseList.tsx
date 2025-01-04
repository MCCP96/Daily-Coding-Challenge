import { ExpenseItem } from "./ExpenseItem";
import styles from "./ExpenseList.module.css";

type Props = {
  expenses: { [key: string]: Expense };
  onDelete: (id: number) => void;
};

export const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <ul className={styles.expenseList}>
      {Object.entries(expenses).map(([k, expense]) => (
        <li key={expense.id} className={styles.expenseItem}>
          <ExpenseItem expense={expense} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
