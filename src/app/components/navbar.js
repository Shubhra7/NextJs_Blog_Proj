'use client';
import styles from "../page.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.mainnav}>
        <div className={styles.navContainer}>
          <button className={styles.hamburger} onClick={toggleMenu}>
            ☰
          </button>
          <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
