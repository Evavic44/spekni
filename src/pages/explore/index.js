import Head from "next/head";
import "react-lazy-load-image-component/src/effects/blur.css";
import Data from "../../developers";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import ExploreCard from "../../components/ExploreCard";
import styles from "../../styles/Explore.module.css";
import { SearchIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Explore() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const fetchedUsers = (await axios(`/api/users`)).data;
      const data = fetchedUsers.data;
      setUsers(prev => [...prev, ...data]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Explore: Spekni - Find over 500+ developers creating impact in the
          tech ecosystem
        </title>
        <meta
          name="keywords"
          content="Developer, Endorsements, Hiring, Job, Planetscale, Hashnode, Hackathon"
        />
        {/* Primary met tags */}
        <meta
          name="title"
          content="Explore: Spekni - Find over 500+ developers creating impact in the tech ecosystem"
        />
        <meta
          name="description"
          content="Explore: Spekni - Find over 500+ developers creating impact in the tech ecosystem"
        />
        <meta
          name="author"
          content="Victor Eke, Spiff Jekey-Green, Nicholas Ovunda"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spekni.vercel.app/" />
        <meta
          property="og:title"
          content="Explore: Spekni - Find over 500+ developers creating impact in the tech ecosystem"
        />
        <meta
          property="og:description"
          content="Explore: Spekni - Find over 500+ developers creating impact in the tech ecosystem"
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
          content="Explore: Spekni - Find over 500+ developers creating impact in the tech ecosystem"
        />
        <meta
          property="twitter:description"
          content="Explore: Spekni - Find over 500+ developers creating impact in the tech ecosystem"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-home.png"
        />
      </Head>
      <Navbar />

      <header className={styles.hero}>
        <h1 className="font-extrabold max-w-2xl mx-auto text-3xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          Find over <span className="highlight">50,000+</span> Developers
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
        {/* {Data.map((userData) => ( */}
        {users.map((userData) => {
          return (
            <ExploreCard
              key={userData.userId}
              name={userData.fullName}
              job={userData.job_title}
              user={userData.user}
              bio={userData.bio}
              endorsements={userData.user.endorsements}
              skills={userData.user.Skill}
            />
          )
        })}

        <p className="font-medium text-lg mt-4">Loading...</p>
      </section>

      <Jumbotron />
      <Footer />
    </div>
  );
}
