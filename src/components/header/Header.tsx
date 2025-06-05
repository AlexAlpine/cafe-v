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
  <a href="#menu" onClick={() => setMenuOpen(false)}>Menü</a>
  <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
  <a href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</a>
  <a href="#about" onClick={() => setMenuOpen(false)}>Über uns</a>
  <a href="#zeiten" onClick={() => setMenuOpen(false)}>Öffnungszeiten</a>
</nav>
    </header>
  );
}
