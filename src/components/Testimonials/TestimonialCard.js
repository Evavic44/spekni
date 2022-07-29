import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Link from "next/link";

export default function TestimonialCard({ image, name, review, src }) {
  return (
    <>
      <Link href={src}>
        <a className="flex flex-col bg-secondary p-8 rounded-xl relative overflow-hidden last-of-type:opacity-40">
          <svg
            className="absolute right-2 -top-6 -rotate-12"
            width="70"
            height="70"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.6606 31.0923C22.9827 30.716 30.6383 29.797 30.8249 17.1699L31.0544 1.28266L19.193 1.11133L18.9475 18.1095L22.886 18.1664C23.07 22.7089 19.9717 23.8363 16.608 24.6876L17.6606 31.0923ZM1.76915 30.8628C7.09122 30.4865 14.7469 29.5674 14.9334 16.9404L15.1629 1.05311L3.30154 0.881776L3.056 17.88L6.99454 17.9369C7.17853 22.4793 4.08024 23.6068 0.716497 24.458L1.76915 30.8628Z"
              className="fillSecondary"
            />
          </svg>
          <div className="flex items-center gap-x-4 mb-4">
            <LazyLoadImage
              className="rounded-full"
              src={image.url}
              alt={image.alt}
              width={35}
              height={35}
              placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
            />
            <h3 className="font-medium text-base">{name}</h3>
          </div>
          <p className="text-sm">{review}</p>
        </a>
      </Link>
    </>
  );
}
