import Head from "next/head";
// import Image from "next/image";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import userData from "../data";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <Head lang="en">
        <title>
          Spekni - Hiring and Freelance organization Recruiters can Trust
        </title>
        <meta
          name="title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          name="description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spekni.vercel.app/" />
        <meta
          property="og:title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          property="og:description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />

        <meta
          property="twitter:card"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />
        <meta property="twitter:url" content="https://spekni.vercel.app/" />
        <meta
          property="twitter:title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          property="twitter:description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Navbar />
        {/* Hero */}
        <header className={styles.hero}>
          <h1 className={styles.heading}>
            Hiring and <span className={styles.iconOne}>Freelance</span>{" "}
            organization Recruiters can{" "}
            <span className={styles.iconTwo}>Trust</span>
          </h1>
          <p>
            Marketplace for top developers, engineers, programmers, coders,
            architects, and consultants
          </p>

          <a href="/about" className={styles.btn}>
            Explore Now
          </a>
        </header>

        {/* Profiles */}
        <div className={styles.mapContainer}>
          <section className={styles.homeProfile}>
            {userData.map((data) => (
              <Card
                className={styles.card}
                key={data.id}
                name={data.name}
                job={data.job}
                image={data.image}
                endorsements={data.endorsements}
              />
            ))}
          </section>
        </div>
      </main>

      <Section />
    </div>
  );
}
