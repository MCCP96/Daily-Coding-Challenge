"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { Calendar } from "../Icons";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
        <Link href="/">
          <h1>budgetapp</h1>
        </Link>
        <Link href="/calendar">
          <Calendar color="var(--foreground)" />
        </Link>
      </nav>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navItem}>
          <Link href="/">Overview</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/expenses">Expenses</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/income">Income</Link>
        </li>
      </ul>
    </>
  );
};
