// Home.tsx
import React from 'react';
import styles from './Home.module.css';
import photo from '../assets/photo.png';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import menuImage from '../assets/menu.png';


export default function Home() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Willkommen im SnackHaus</h1>
          <p>
            Eis im Becher, Pelmeni to go, knusprige Wurst & Kartoffel – unser Streetfood macht glücklich!
          </p>
          <p>
            Frisch, schnell und lecker – direkt aus deinem Lieblingsladen mitten in der Stadt.
          </p>
          <button className={styles.button} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Speisekarte ansehen
          </button>
        </div>

        {/* Hauptfoto */}
        <div className={styles.photoImage}>
          <img src={photo} alt="Hauptgericht" />
        </div>

        <div id="menu" className={styles.menuImage}>
  <img src={menuImage} alt="Menü" />
</div>

        {/* Galerie */}
        <div className={styles.gallery}>
          <img src={photo1} alt="Snack 1" />
          <img src={photo2} alt="Snack 2" />
        </div>

        {/* Über uns */}
        <div id="about" className={styles.about}>
          <h2>Über uns</h2>
          <p>
            Wir sind eine Familie, die gerne kocht und mit Liebe serviert. <strong>Vdoma Street Food</strong> steht für ehrliches,
            hausgemachtes Street Food – von klassischen Bratwürsten bis zu traditionellen Pelmeni.
          </p>
          <p>
            Alles frisch zubereitet, freundlich serviert und mit einem Lächeln überreicht.
          </p>
        </div>

        {/* Öffnungszeiten */}
        <div id="hours" className={styles.hours}>
          <h2>Öffnungszeiten</h2>
          <p>Dienstag – Samstag: <strong>11:00 – 19:00</strong></p>
          <p>Sonntag: <strong>12:00 – 18:00</strong></p>
          <p>Montag: <strong>Ruhetag</strong></p>
        </div>
      </div>
    </section>
  );
}
