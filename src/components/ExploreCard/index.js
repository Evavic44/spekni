import React from "react";
import styles from "./ExploreCard.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";
import Badge from "../../public/images/badge.svg";

export default function ExploreCard({
  image,
  name,
  job,
  endorsements,
  skills,
  bio,
}) {
  return (
    <article className={styles.exploreCard}>
      <div className="flex items-center gap-x-5">
        <LazyLoadImage
          className="rounded-full"
          src={image.url}
          alt={image.alt}
          width={48}
          height={48}
          placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
        />

        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <p className="text-sm text-gray-600">{job}</p>
          <div
            className="flex items-center gap-x-1 my-1"
            title="Spekni Endorsement Badge"
          >
            <Image src={Badge} width={14} height={14} alt="badge" />
            <small className="highlight">{endorsements} Endorsements</small>
          </div>
        </div>
      </div>

      <p className="text-sm mt-6 mb-4">{bio}</p>

      <div className={styles.skillsContainer}>
        <h3 className="font-bold text-sm">Skills:</h3>
        <small className={styles.skills}>{skills}</small>
      </div>
    </article>
  );
}
