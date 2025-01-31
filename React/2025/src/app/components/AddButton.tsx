"use client";

import styles from "./AddButton.module.css";
import { Add } from "../Icons";

type Props = {};

export const AddButton = () => {
  const handleClick = () => {};

  return (
    <button className={styles.container}>
      <Add color="green" width={28} height={28} />
    </button>
  );
};
