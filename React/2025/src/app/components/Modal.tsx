import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ onClose, children }: Props) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};
