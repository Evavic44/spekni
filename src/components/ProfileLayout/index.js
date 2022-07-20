import styles from "./ProfileLayout.module.css";
// import ActiveLink from "./ActiveLink";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import GitHubIcon from "../../public/images/github-dark.svg";
import LinkedInIcon from "../../public/images/linkedin.svg";
import MailIcon from "../../public/images/mail.svg";
import TwitterIcon from "../../public/images/twitter.svg";
import Navbar from "../Navbar";
import { BadgeCheckIcon, SparklesIcon } from "@heroicons/react/outline";

export default function Layout({ children, user }) {
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
        <title>User Name - Spekni</title>
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
            className="rounded-full"
            src="https://res.cloudinary.com/victoreke/image/upload/v1657144819/Spekni/user-1_kknjns.png"
            // src={"User Name"}
            alt="User Profile"
            width={190}
            height={190}
            placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
          />
          <div className="flex items-center gap-2 mt-4">
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657402772/Spekni/badge.svg"
              width={15}
              height={15}
              alt="badge"
            />
            <span className="highlight">500 Endorsements</span>
          </div>
        </div>

        <div className={styles.headEnd}>
          <h1 className="font-bold text-3xl">{"User Name"}</h1>
          <h3 className="font-medium my-2 text-base">
            Senior Software Engineer
          </h3>
          <span className="text-sm">
            John is a senior software engineer with a passion for learning with
            over 15+ years of experience leading teams to build enterprise-grade
            distributed applications that solve real-world problems.{" "}
          </span>
          <div className={styles.social}>
            <a href="https://victoreke.com" target="_blank" rel="noreferrer">
              Portfolio
            </a>
            <a href="https://victoreke.com" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a
              className="flex"
              href="https://github.com/evavic44"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={GitHubIcon}
                width={20}
                height={20}
                title="GitHub"
                alt="GitHub Icon"
              />
            </a>
            <a
              className="flex"
              href="https://linkedin.com/in/victorekeawa"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={LinkedInIcon}
                width={20}
                height={20}
                title="LinkedIn"
                alt="LinkedIn Icon"
              />
            </a>
            <a
              className="flex"
              href="https://twitter.com/evavic44"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={TwitterIcon}
                width={20}
                height={20}
                title="Twitter"
                alt="Twitter Icon"
              />
            </a>
            <a className="flex" href="https://mailto:evavic44@gmail.com">
              <Image
                src={MailIcon}
                width={20}
                height={20}
                title="Mail"
                alt="Mail Icon"
              />
            </a>
          </div>
        </div>
      </header>

      <section className={styles.line}>
        <Link href="/profile/endorsement" scroll={false}>
          <a className="pb-4 flex item-center">
            <BadgeCheckIcon
              className="mr-2"
              width={20}
              height={20}
              title="Endorse Icon"
            />{" "}
            Endorsements
          </a>
        </Link>
        <Link href="/profile/recommendation" scroll={false}>
          <a className="pb-4 flex item-center">
            <SparklesIcon
              className="mr-2"
              width={20}
              height={20}
              title="Recommendation Icon"
            />
            Recommendations
          </a>
        </Link>
      </section>
      <main className={styles.main}>{children}</main>
    </>
  );
}
