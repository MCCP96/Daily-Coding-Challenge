"use client";

import React, { useState } from "react";
import styles from "./AddButton.module.css";
import { AddIcon } from "../Icons";
import { Modal } from "./Modal";

type Props = {};

export const AddButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className={styles.container} onClick={handleClick}>
        <AddIcon color="green" width={28} height={28} />
      </button>
      {isModalOpen && <Modal onClose={handleClose}>GoalItemForm</Modal>}
    </div>
  );
};
