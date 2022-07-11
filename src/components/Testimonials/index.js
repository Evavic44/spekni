import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What People are saying</h2>

      <div className={styles.card}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.review}>{review}</p>
      </div>
    </section>
  );
}
