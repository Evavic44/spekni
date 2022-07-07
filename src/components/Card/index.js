import React from "react";
import styles from "./Card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";
import Badge from "../../public/badge.svg";

export default function Card({ image, name, job, Badge, endorsements }) {
  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <LazyLoadImage
          className={styles.image}
          src={image.url}
          alt={image.alt}
          width={170}
          height={170}
        />
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.job}>{job}</p>
        <div className={styles.badge} title="Spekni Endorsement Badge">
          <Image
            loader={() => "/badge.svg"}
            src={"/badge.svg"}
            width={18}
            height={18}
          />
          <span className={styles.count}>{endorsements} Endorsements</span>
        </div>
      </article>
    </section>
  );
}
