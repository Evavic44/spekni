import React from "react";
import styles from "./Section.module.css";

export default function index() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span>What is Spekni?</span>
          <h2>A trust network built on endorsements</h2>
          <p>
            Signaling and mobilizing your Indivisible group&apos;s support for a
            candidate. Powerful endorsements are not empty statements
          </p>
        </div>

        <div className={styles.sectionBody}>
          <iframe
            width="900"
            height="415"
            src="https://www.youtube.com/embed/KObiuTFYTkM?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
