import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Willkommen im SnackHaus</h1>
          <p>
            Eis im Becher, Pelmeni to go, knusprige Wurst & Kartoffel – unser Streetfood macht glücklich!
          </p>
          <p>
            Frisch, schnell und lecker – direkt aus deinem Lieblingsladen mitten in der Stadt.
          </p>
          <button className={styles.button}>Speisekarte ansehen</button>
        </div>
      </div>
    </section>
  );
}
