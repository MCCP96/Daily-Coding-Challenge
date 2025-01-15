"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Navbar.module.css";
import { loadState } from "../store";
import { initialState, loadData } from "../budgetSlice";
import { Calendar } from "../Icons";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const preloadedState = loadState();
    if (preloadedState) {
      dispatch(loadData(preloadedState));
    } else {
      dispatch(loadData(initialState)); // default
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navItem}>
          <a href="/">Overview</a>
        </li>
        <li className={styles.navItem}>
          <a href="/expenses">Expenses</a>
        </li>
        <li className={styles.navItem}>
          <a href="/income">Income</a>
        </li>
      </ul>

      <Link href="/calendar">
        <Calendar color="var(--foreground)" />
      </Link>
    </nav>
  );
};
