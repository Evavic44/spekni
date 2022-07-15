import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import userData from "../data";
import Section from "../components/Section";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Developer, Endorsements, Hiring, Job, Victor Eke, Planetscale, Hashnode, Hackathon"
        />
        {/* Primary met tags */}
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
        <meta
          name="author"
          content="EKe Victor, Spiff Jekey-Green, Nicholas Ovunda"
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
          <h1 className="font-extrabold max-w-4xl mx-auto text-5xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Recognition <span className={styles.iconOne}>platform</span> built
            for developer <span className={styles.iconTwo}>endorsements</span>
          </h1>
          <p>
            A system built to reward developers, engineers, programmers,
            creators that are making impact in the tech space
          </p>

          <Link href="/explore">
            <a className={styles.btn}>Start Endorsing</a>
          </Link>
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
      <Jumbotron />
      <Footer />
    </div>
  );
}
