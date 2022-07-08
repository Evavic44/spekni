import React from "react";
import styles from "../../styles/About.module.css";
import Navbar from "../../components/Navbar";

export default function index() {
  return (
    <div>
      <Navbar />
      <main className={styles.about}>
        <h1>About Page 🤡</h1>
        <p>The design for this page is still cooking.</p>
      </main>
    </div>
  );
}
