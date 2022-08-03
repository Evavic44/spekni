import Head from "next/head";
import "react-lazy-load-image-component/src/effects/blur.css";
// import Data from "../../developers";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import ExploreCard from "../../components/ExploreCard";
import styles from "../../styles/Explore.module.css";
import { SearchIcon } from "@heroicons/react/outline";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { InView } from 'react-intersection-observer';

export default function Explore({ profileCount }) {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const ViewComp = () => {
    return (
      <InView as="div" onChange={async (inView, entry) => {
        if(inView && (profileCount >= (users.length + 1))) {
          setLoading(true);
          const fetchedUsers = (await axios(`/api/users?offset=${count}`)).data;
          const data = fetchedUsers.data;
          setUsers((prev) => [...prev, ...data]);
          setCount(prev => prev + 10);
        } else {
          setLoading(false);
        }
      }}>
        {loading ? <p className="flex justify-center my-8"><span className="loader loaderLight"></span></p> : null}
      </InView>
    );
  };


  // async function searchForUsers(e) {
  //   e.preventDefault();
  //   try {
  //     const users = (await axios(`/api/search?name=${e.target.search.value}`)).data;
  //     setUsers((prev) => [...prev, ...users]);;
  //   } catch (err) {
  //     // console.log(err);
  //   }
  // }

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
        <meta property="og:url" content="https://spekni.com" />
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
        <meta property="twitter:url" content="https://spekni.com" />
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

        {/* <form className={styles.searchContainer} onSubmit={searchForUsers}>
          <div>
            <input
              className={styles.searchBar}
              type="search"
              name="search"
              id="Email"
              placeholder="E.g: Victor Eke"
              required
            />
            <button ariaLabel="Search Button">
              <SearchIcon
                className={styles.searchIcon}
                width={20}
                height={20}
                aria-label="Search Icon"
              />
            </button>
          </div>
        </form> */}
      </header>

      <section className={styles.profileContainer}>
        {users.map((userData) => {
          return (
            <ExploreCard
              key={userData.userId}
              name={userData.fullName}
              job={userData.job_title}
              user={userData.user}
              username={userData.username}
              bio={userData.bio}
              endorsements={userData.user.endorsements}
              skills={userData.user.Skill}
            />
          );
        })}
      </section>
      <ViewComp />

      <Jumbotron />
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      profileCount: 26
    }
  }
};