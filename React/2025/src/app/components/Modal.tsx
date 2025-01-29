import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ onClose, children }: Props) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
