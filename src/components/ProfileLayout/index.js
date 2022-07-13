import styles from "./ProfileLayout.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GlobeIcon, MailIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Developer, Endorsements, Hiring, Job, Victor Eke, Planetscale, Hashnode, Hackathon"
        />
        {/* Primary met tags */}
        <title>User Profile - Spekni</title>
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

      <Navbar />

      {/* User Profile Section */}
      <header className={styles.head}>
        <div className={styles.headStart}>
          <Image
            src="https://res.cloudinary.com/victoreke/image/upload/v1657144819/Spekni/user-1_kknjns.png"
            width={100}
            height={100}
            alt="User Profile"
          />
          <div>
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657402772/Spekni/badge.svg"
              width="25px"
              height="25px"
            />{" "}
            <span>500 Endorsements</span>
          </div>
        </div>

        <div className={styles.headEnd}>
          <h1 className={styles.name}>John Boyega</h1>
          <h3 className={styles.job}>Senior Software Engineer</h3>
          <p className={styles.about}>
            John is a senior software engineer with a passion for learning with
            over 15+ years of experience leading teams to build enterprise-grade
            distributed applications that solve real-world problems.{" "}
          </p>
          <div className={styles.social}>
            <a href="https://spekni.vercel.app">Portfolio</a>
            <a href="https://spekni.vercel.app">Resume</a>
            <a href="github.com/evavic44">
              <GlobeIcon width={20} height={20} /> GitHub
            </a>
            <a href="linkedin.com/in/victorekeawa">
              <UserCircleIcon width={20} height={20} /> LinkedIn
            </a>
            <a href="mailto:evavic44@gmai.com">
              <MailIcon width={20} height={20} /> Email
            </a>
          </div>
        </div>
      </header>

      <div>
        <Link href="/profile/endorsement">
          <a>Endorsement</a>
        </Link>
        <Link href="/profile/recommendation">
          <a>Recommendation</a>
        </Link>
      </div>
      <main className={styles.main}>{children}</main>
    </>
  );
}
