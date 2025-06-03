import React from "react";
import styles from './Header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>KaffeeHaus</div>
      <nav className={styles.nav}>
        <a href="#menu">Speisekarte</a>
        <a href="#shop">Shop</a>
        <a href="#kontakt">Kontakt</a>
        <a href="#ueber-uns">Über uns</a>
        <a href="#oeffnungszeiten">Öffnungszeiten</a>
      </nav>
    </header>
  );
}