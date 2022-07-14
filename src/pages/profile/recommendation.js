import React from "react";
import Image from "next/image";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";

function Recommendation() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.header}>
          <h1>Recommendations</h1>
          <p>
            Thanks for visiting my page, kindly drop a recommendation based on
            past experiences you've had with me.
          </p>
        </div>
      </section>
    </div>
  );
}

Recommendation.PageLayout = ProfileLayout;

export default Recommendation;
