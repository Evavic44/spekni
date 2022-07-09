import React from "react";
import styles from "../../styles/About.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";

export default function index() {
  return (
    <div>
      <Navbar />
      <main className={styles.about}>
        <h1>About Page 🤡</h1>
        <p>The design for this page is still cooking.</p>
      </main>
      <Jumbotron />
      <Footer />
    </div>
  );
}
