"use client";

import { useState, useRef, FocusEvent } from "react";
import styles from "./Navbar.module.css";
import { Calendar, User } from "../Icons";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
  //   if (navRef.current && !navRef.current.contains(event.relatedTarget)) {
  //     setIsOpen(false);
  //   }
  // };

  return (
    <div
      ref={navRef}
      // onBlur={handleBlur}
      tabIndex={-1}
    >
      <nav className={styles.navbar}>
        {/* <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div> */}
        <Link href="/history">
          <Calendar color="var(--foreground)" />
        </Link>
        <Link href="/">
          <h1>budget</h1>
        </Link>
        <Link href="/profile">
          <User color="var(--foreground)" />
        </Link>
      </nav>

      {/* <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/expenses">Expenses</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/income">Income</Link>
        </li>
      </ul> */}
    </div>
  );
};
