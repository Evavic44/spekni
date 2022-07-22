import styles from "./ProfileLayout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import GitHubIcon from "../../public/images/github-dark.svg";
import LinkedInIcon from "../../public/images/linkedin.svg";
import MailIcon from "../../public/images/mail.svg";
import TwitterIcon from "../../public/images/twitter.svg";
import Navbar from "../Navbar";
import {
  BadgeCheckIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import prisma from "../../prisma";

export default function Layout({ children, user }) {
  const router = useRouter();
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
            // placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
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
          <h3 className="font-medium mt-2 mb-4 text-base">
            Senior Software Engineer
          </h3>
          <span className="text-sm">
            John is a senior software engineer with a passion for learning with
            over 15+ years of experience leading teams to build enterprise-grade
            distributed applications that solve real-world problems.{" "}
          </span>
          <div className={styles.social}>
            {/* <a href="https://victoreke.com" target="_blank" rel="noreferrer">
              Resume
            </a> */}
            <a
              className={styles.socialIcon}
              href="https://victoreke.com"
              title="Portfolio"
            >
              Portfolio
              <GlobeAltIcon
                className="highlight"
                width={18}
                height={18}
                title="Mail"
                alt="Mail Icon"
              />
            </a>
            <a
              className={styles.socialIcon}
              href="https://github.com/evavic44"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              {" "}
              GitHub
              <Image
                src={GitHubIcon}
                width={16}
                height={16}
                alt="GitHub Icon"
              />
            </a>
            <a
              className={styles.socialIcon}
              href="https://linkedin.com/in/victorekeawa"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              LinkedIn
              <Image
                src={LinkedInIcon}
                width={16}
                height={16}
                alt="LinkedIn Icon"
              />
            </a>
            <a
              className={styles.socialIcon}
              href="https://twitter.com/evavic44"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              Twitter
              <Image
                src={TwitterIcon}
                width={20}
                height={20}
                alt="Twitter Icon"
              />
            </a>
            <a
              className={styles.socialIcon}
              href="mailto:evavic44@gmail.com"
              title="Mail"
            >
              Email
              <Image src={MailIcon} width={17} height={17} alt="Mail Icon" />
            </a>
          </div>
        </div>
      </header>

      <section className={styles.line}>
        <Link href="/profile/endorsement" scroll={false}>
          <a className={`pb-4 flex item-center text-sm ${router.pathname == "/[username]/endorsement" ? "activeTabLink" : ""}`}>
            <BadgeCheckIcon
              className="mr-2"
              width={19}
              height={19}
              title="Endorse Icon"
            />{" "}
            Endorsements
          </a>
        </Link>
        <Link href="/profile/recommendation" scroll={false}>
          <a className={`pb-4 flex item-center text-sm ${router.pathname == "/[username]/recommendation" ? "activeTabLink" : ""}`}>
            <SparklesIcon
              className="mr-2"
              width={19}
              height={19}
              title="Recommendation Icon"
            />
            Recommendations
          </a>
        </Link>
      </section>
      <main className={styles.main}>{children}</main>

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
    </>
  );
}