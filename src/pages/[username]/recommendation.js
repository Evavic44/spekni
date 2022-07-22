import React from "react";
import Image from "next/image";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";
import { CalendarIcon, ClockIcon } from "@heroicons/react/outline";

function Recommendation() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.header}>
          <h1>Recommendations</h1>
          <p>
            Thanks for visiting my page, kindly drop a recommendation based on
            past experiences you&apos;ve had with me.
          </p>
        </div>

        <div className={styles.recommendations}>
          <div className={styles.formContainer}>
            <label className="text-zinc-500 dark:text-zinc-600 text-sm">
              What would you like to say about John?
            </label>
            <input
              className="px-4 border border-zinc-200 dark:border-zinc-900 bg-transparent radius-100 my-4 rounded-md py-6"
              type="text"
            />

            <button className="btn btn-primary mb-4">Send</button>
          </div>
        </div>

        {/* Recommend 1 */}
        <section className={styles.recommendContainer}>
          <article className={styles.recommendCard}>
            <div className="flex items-center">
              <a href="spekni.vercel.app">
                <Image
                  className="rounded-full"
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/eke_tuqz8f.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Victor Eke"
                />
              </a>
              <h3 className="font-medium ml-3">Victor Eke</h3>
            </div>
            <div className={styles.recommendContent}>
              <p className="text-sm mt-1 mb-3">
                John is a Unicorn! He brings a rare combibation of leadership,
                business and technical skills which makes him a perfect fit for
                a variety of roles. Above all, John is a really nice person, and
                great team player.
              </p>
              <small className="text-zinc-500 dark:text-zinc-600 text-xs flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <CalendarIcon width="12px" height="12px" title="Time" />{" "}
                  <span>28 March 2022</span>
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon width="12px" height="12px" title="Time" />
                  <span>11:30 PM</span>
                </span>
              </small>
            </div>
          </article>

          {/* Recommend 2 */}
          <article className={styles.recommendCard}>
            <div className="flex items-center">
              <a href="spekni.vercel.app">
                <Image
                  className="rounded-full"
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/spiff_yuk6sb.jpg"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Spiff Jekey Green"
                />
              </a>
              <h3 className="font-medium ml-3">Spif Jekey Green</h3>
            </div>
            <div className={styles.recommendContent}>
              <p className="text-sm mt-1 mb-3">
                I have never worked with a more exceptional developer than John.
                He is very talented and would be a great addition to your team,
                if you have an opening.
              </p>
              <small className="text-zinc-500 dark:text-zinc-600 text-xs flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <CalendarIcon width="12px" height="12px" title="Time" />{" "}
                  <span>28 March 2022</span>
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon width="12px" height="12px" title="Time" />
                  <span>11:30 PM</span>
                </span>
              </small>
            </div>
          </article>
        </section>
      </section>

    </div>
  );
}

Recommendation.PageLayout = ProfileLayout;

export default Recommendation;