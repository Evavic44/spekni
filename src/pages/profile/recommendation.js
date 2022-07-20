import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo-dark.svg";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";
import {
  CalendarIcon,
  ClockIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";

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

      <footer className="flex flex-col items-center justify-center text-center py-20">
        <svg
          width="30"
          height="38"
          viewBox="0 0 57 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.27344"
            y="5.78271"
            width="50.5421"
            height="48.1898"
            fill="3a52ee"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25429e-07 65.7294V8.48122C6.25429e-07 6.23186 0.984447 4.07463 2.73677 2.48409C4.4891 0.893554 6.86576 0 9.34393 0H46.7196C49.1978 0 51.5745 0.893554 53.3268 2.48409C55.0791 4.07463 56.0636 6.23186 56.0636 8.48122V65.7294C56.0639 66.0976 55.9585 66.4595 55.7579 66.7796C55.5573 67.0996 55.2683 67.3667 54.9194 67.5545C54.5706 67.7424 54.1738 67.8446 53.7682 67.851C53.3626 67.8574 52.9622 67.7678 52.6063 67.591L28.0318 55.4205L3.45725 67.591C3.10139 67.7678 2.70095 67.8574 2.29536 67.851C1.88977 67.8446 1.49301 67.7424 1.14413 67.5545C0.795246 67.3667 0.506276 67.0996 0.305661 66.7796C0.105047 66.4595 -0.000296174 66.0976 6.25429e-07 65.7294Z"
            fill="#3a52ee"
          />
          <path
            d="M17.5049 46.3385C16.6171 46.8091 15.6097 45.9844 15.7891 44.9316L17.6981 33.6901L9.59507 25.7141C8.83836 24.9679 9.23166 23.6037 10.246 23.4563L21.5116 21.8022L26.5348 11.5185C26.9879 10.5916 15.8646 45.1734 16.2244 46.1876L31.1786 16.6603L33.6903 21.8022L44.9558 23.4563C45.9702 23.6037 46.3635 24.9679 45.6044 25.7141L37.5037 33.6901L39.4127 44.9316C39.5921 45.9844 38.5847 46.8091 37.6969 46.3385L27.5975 40.9769L17.6981 46.3385H17.5049Z"
            fill="white"
          />
        </svg>

        <p className="mt-3 text-sm">Spekni Endorsements</p>
      </footer>
    </div>
  );
}

Recommendation.PageLayout = ProfileLayout;

export default Recommendation;
