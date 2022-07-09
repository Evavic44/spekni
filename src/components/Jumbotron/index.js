import React from "react";
import styles from "./Jumbotron.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function index() {
  return (
    <div>
      <main className={styles.jumbotron}>
        <div>
          <LazyLoadImage
            src="https://res.cloudinary.com/victoreke/image/upload/v1657396621/Spekni/group_srgx0s.png"
            width={320}
            height={80}
            alt="Group Image"
            placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657398809/Spekni/placeholder_tyux4q.png"
          />
          <h2>Find the right developers in a matter of seconds</h2>
          <span>The trusted recruiting platform you&apos;ll ever need</span>
        </div>
      </main>
    </div>
  );
}
