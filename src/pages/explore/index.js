import Head from "next/head";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "../../styles/Explore.module.css";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import userData from "../../data";
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
        <h1 className="font-extrabold max-w-2xl mx-auto text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
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
                ariaLabel="Search Icon"
              />
            </button>
          </div>
        </form>
      </header>

      <section className={styles.profileContainer}>
        {userData.map((data) => (
          <Card
            key={data.id}
            name={data.name}
            job={data.job}
            image={data.image}
            endorsements={data.endorsements}
          />
        ))}
      </section>
    </div>
  );
}
