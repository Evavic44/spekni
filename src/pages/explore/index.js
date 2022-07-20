import Head from "next/head";
import "react-lazy-load-image-component/src/effects/blur.css";
import Data from "../../developers";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import ExploreCard from "../../components/ExploreCard";
import styles from "../../styles/Explore.module.css";
import { SearchIcon } from "@heroicons/react/outline";

export default function Explore() {
  return (
    <div>
      <Head lang="en">
        <title>
          Explore | Spekni - Hiring and Freelance organization Recruiters can
          Trust
        </title>
        <meta
          name="title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          name="description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />

      <header className={styles.hero}>
        <h1 className="font-extrabold max-w-2xl mx-auto text-3xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          Explore over <span className="highlight">50,000+</span> Developers
        </h1>

        <form className={styles.searchContainer}>
          <div>
            <input
              className={styles.searchBar}
              type="search"
              name="Email"
              id="Email"
              placeholder="E.g: Victor Eke"
              required
            />
            <button value="Subscribe" ariaLabel="Search Button">
              <SearchIcon
                className={styles.searchIcon}
                width={20}
                height={20}
                aria-label="Search Icon"
              />
            </button>
          </div>
        </form>
      </header>

      <section className={styles.profileContainer}>
        {Data.map((userData) => (
          <ExploreCard
            key={userData.id}
            name={userData.name}
            job={userData.job}
            image={userData.image}
            bio={userData.bio}
            endorsements={userData.endorsements}
            skills={userData.skills}
          />
        ))}

        <p className="font-medium text-lg mt-4">Loading...</p>
      </section>

      <Jumbotron />
      <Footer />
    </div>
  );
}
