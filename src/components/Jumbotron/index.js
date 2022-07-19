import React from "react";
import styles from "./Jumbotron.module.css";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function index() {
  return (
    <div>
      <main className={styles.jumbotron}>
        <div>
          <LazyLoadImage
            src="https://res.cloudinary.com/victoreke/image/upload/v1657396621/Spekni/group.png"
            width={320}
            height={80}
            effect="blur"
            alt="Group Image"
            placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657399791/Spekni/placeholder.svg"
          />
          <h2 className="text-5xl mt-3 mb-6 font-extrabold">
            Find the right developers in a matter of seconds
          </h2>
          <Link href="/explore">
            <a className="btn btn-primary my-3 h-12 w-60">Start Endorsing</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
