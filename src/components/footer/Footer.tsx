import React from 'react';
import styles from './Footer.module.css';
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img src={logo} alt="KaffeeHaus Logo" className={styles.logo} />
        <h2>Vdoma</h2>
        <p>Café seit 2025</p>
        <p>© {new Date().getFullYear()} Vdoma. Alle Rechte vorbehalten.</p>
      </div>
      <div className={styles.right}>
        <p><strong>Adresse:</strong><br />Ernst-August-Platz 10, 30159 Hannover</p>
        <p><strong>Telefon:</strong><br />+49 176 31483xxx</p>
        <p><strong>Email:</strong><br />kontakt@rastvorfamily.de</p>
      </div>
    </footer>
  );
}
