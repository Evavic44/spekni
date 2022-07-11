import React from "react";
import styles from "./Card.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";
import Badge from "../../public/images/badge.svg";

export default function Card({ image, name, job, endorsements }) {
  return (
    <article className={styles.card}>
      <LazyLoadImage
        className={styles.image}
        src={image.url}
        alt={image.alt}
        width={150}
        height={150}
        placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.job}>{job}</p>
      <div className={styles.badge} title="Spekni Endorsement Badge">
        <Image
          src="https://res.cloudinary.com/victoreke/image/upload/v1657402772/Spekni/badge.svg"
          width={16}
          height={16}
          alt="badge"
        />
        <span className={styles.count}>{endorsements} Endorsements</span>
      </div>
    </article>
  );
}
