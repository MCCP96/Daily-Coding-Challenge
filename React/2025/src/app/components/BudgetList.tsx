import { BudgetItem } from "./BudgetItem";
import styles from "./BudgetList.module.css";

type Props = {
  items: { [key: string]: Expense | Income };
  onDelete: (id: number) => void;
};

export const BudgetList = ({ items, onDelete }: Props) => {
  return (
    <ul className={styles.budgetList}>
      {Object.entries(items).map(([k, item]) => (
        <li key={item.id} className={styles.budgetItem}>
          <BudgetItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
