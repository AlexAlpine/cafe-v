import React from 'react';
import styles from './Home.module.css';
import photo from '../assets/photo.png';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';

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

        {/* 🔼 Новое одиночное изображение */}
        <div className={styles.photoImage}>
          <img src={photo} alt="Hauptgericht" />
        </div>

        {/* 📸 Галерея из двух изображений */}
        <div className={styles.gallery}>
          <img src={photo1} alt="Snack 1" />
          <img src={photo2} alt="Snack 2" />
        </div>
      </div>
    </section>
  );
}
