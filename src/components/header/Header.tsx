import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>SnackHaus</div>
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menü öffnen"
      >
        ☰
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <a href="#">Menü</a>
        <a href="#">Shop</a>
        <a href="#">Kontakt</a>
        <a href="#">Über uns</a>
        <a href="#">Öffnungszeiten</a>
      </nav>
    </header>
  );
}
