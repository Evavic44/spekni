import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";

export default function Card({ image, name, job, endorsements }) {
  return (
    <article className="card flex flex-col items-center bg-primary py-8 px-4 w-72 rounded-md border-primary h-auto cursor-cell">
      <LazyLoadImage
        className="rounded-full transition-transform bg-secondary"
        src={image.url}
        alt={image.alt}
        width={150}
        height={150}
        placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
      />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-sm mb-4">{job}</p>
      <div className="flex items-center" title="Spekni Endorsement Badge">
        <Image
          src="https://res.cloudinary.com/victoreke/image/upload/v1657402772/Spekni/badge.svg"
          width={16}
          height={16}
          alt="badge"
        />
        <span className="ml-1 text-sm highlight">
          {endorsements} Endorsements
        </span>
      </div>
    </article>
  );
}
