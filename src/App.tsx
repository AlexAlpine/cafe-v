import React from 'react';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Willkommen im KaffeeHaus!</h1>
        <p>Genieße unsere frischen Kaffeespezialitäten.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default App;