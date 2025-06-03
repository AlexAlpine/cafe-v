import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <h1>Willkommen im Cafe Vdoma</h1>
        <p>
          Entdecke unsere einzigartigen Streetfood-Kreationen: Eis im Becher, Pelmeni to go, Currywurst & knusprige Pommes.
        </p>
        <p>
          Alles frisch zubereitet, mit Liebe serviert – direkt aus unserem kleinen, gemütlichen Laden im Herzen der Stadt.
        </p>
        <button className={styles.button}>Speisekarte ansehen</button>
      </div>
    </section>
  );
}

