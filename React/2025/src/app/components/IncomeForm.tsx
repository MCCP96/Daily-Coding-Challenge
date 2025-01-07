"use client";

import { useState } from "react";
import styles from "./IncomeForm.module.css";

type IncomeFormProps = {
  onAddIncome: (name: string, value: number, frequency: string) => void;
};

export const IncomeForm = ({ onAddIncome }: IncomeFormProps) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [frequency, setFrequency] = useState("monthly");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddIncome(name, parseFloat(value), frequency);
    setName("");
    setValue("");
    setFrequency("monthly");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="value">Dollar Value</label>
        <input
          type="number"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="frequency">Frequency</label>
        <select
          id="frequency"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="monthly">Monthly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
      <button type="submit">Add Income</button>
    </form>
  );
};
