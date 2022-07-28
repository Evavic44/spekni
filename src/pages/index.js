import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import userData from "../data";
import Section from "../components/Section";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials/index.js";

export default function Home() {
  return (
    <div>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Spekni - Recognition platform built for developer endorsements
        </title>
        <meta
          name="keywords"
          content="Developer, Endorsements, Hiring, Job, Planetscale, Hashnode, Hackathon"
        />
        {/* Primary met tags */}
        <meta
          name="title"
          content="About: Spekni - Recognition platform built for developer endorsements"
        />
        <meta
          name="description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          name="author"
          content="Victor Eke, Spiff Jekey-Green, Nicholas Ovunda"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spekni.vercel.app/" />
        <meta
          property="og:title"
          content="About: Spekni - Recognition platform built for developer endorsements"
        />
        <meta
          property="og:description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-home.png"
        />

        <meta
          property="twitter:card"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-home.png"
        />
        <meta property="twitter:url" content="https://spekni.vercel.app/" />
        <meta
          property="twitter:title"
          content="About: Spekni - Recognition platform built for developer endorsements"
        />
        <meta
          property="twitter:description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-home.png"
        />
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
            <a className="btn btn-dark my-5 w-full sm:w-60">Start Endorsing</a>
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
      <Testimonials />
      <Jumbotron />
      <Footer />
    </div>
  );
}
