import styles from "./ProfileLayout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../Navbar";
import Error from "../Error/Error";

import {
  BadgeCheckIcon,
  GlobeAltIcon,
  MailIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

export default function Layout({ children, profile }) {
  const router = useRouter();
  if (!profile) return <Error />;

  const pageTitle = `${profile?.fullName} - Spekni`;

  return (
    <>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Developer, Endorsements, Hiring, Job, Planetscale, Hashnode, Hackathon"
        />
        {/* Primary met tags */}
        <title>{pageTitle}</title>
        <meta
          name="title"
          content="Spekni - Recognition platform built for developer endorsements"
        />
        <meta
          name="description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          name="author"
          content="EKe Victor, Spiff Jekey-Green, Nicholas Ovunda"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spekni.com" />
        <meta
          property="og:title"
          content="Spekni - Recognition platform built for developer endorsements"
        />
        <meta
          property="og:description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658408623/Spekni/bg/spekni-profile.png"
        />

        <meta
          property="twitter:card"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658408623/Spekni/bg/spekni-profile.png"
        />
        <meta property="twitter:url" content="https://spekni.com" />
        <meta
          property="twitter:title"
          content="Spekni - Recognition platform built for developer endorsements"
        />
        <meta
          property="twitter:description"
          content="Spekni is a platform built for recognizing developers making impact in the tech space through endorsements and recommendations."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/victoreke/image/upload/v1658408623/Spekni/bg/spekni-profile.png"
        />
      </Head>

      <Navbar />

      {/* User Profile Section */}
      <header className={styles.head}>
        <div className={styles.headStart}>
          <Image
            className="rounded-full"
            src={profile.user.image}
            // src="https://res.cloudinary.com/victoreke/image/upload/v1657144819/Spekni/user-1_kknjns.png"
            alt="User Profile"
            width={190}
            height={190}
            // placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
          />
          <div className="flex items-center gap-2 mt-4">
            {profile.endorsements ? (
              <>
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657402772/Spekni/badge.svg"
                  width={15}
                  height={15}
                  alt="badge"
                />
                <span className="highlight">
                  {profile.endorsements} Endorsement(s)
                </span>
              </>
            ) : (
              <>
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657402772/Spekni/badge.svg"
                  width={15}
                  height={15}
                  alt="badge"
                />
                <span className="highlight">No Endorsement(s)</span>
              </>
            )}
          </div>
        </div>

        <div className={styles.headEnd}>
          <h1 className="font-bold text-3xl">{profile.fullName}</h1>
          <h3 className="font-medium mt-2 mb-4 text-base">
            {/* Senior Software Engineer */}
            {profile.job_title}
          </h3>
          <span className="text-sm">
            {/* John is a senior software engineer with a passion for learning with
            over 15+ years of experience leading teams to build enterprise-grade
            distributed applications that solve real-world problems.{" "} */}
            {profile.bio}
          </span>
          <div className={styles.social}>
            {/* <a href="https://victoreke.com" target="_blank" rel="noreferrer">
              Resume
            </a> */}
            {profile.portfolioLink && (
              <a
                className={styles.socialIcon}
                href={profile.portfolioLink}
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
            )}
            {profile.githubLink && (
              <a
                className={styles.socialIcon}
                href={profile.githubLink}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                {" "}
                GitHub
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 23"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="GitHub Icon"
                  className="fillIcon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.27642 0 11.7909C0 17.0083 3.435 21.4152 8.205 22.9775C8.805 23.0806 9.03 22.7269 9.03 22.4174C9.03 22.1374 9.015 21.2088 9.015 20.2214C6 20.7667 5.22 19.4992 4.98 18.8359C4.845 18.4969 4.26 17.4505 3.75 17.1705C3.33 16.9494 2.73 16.4041 3.735 16.3893C4.68 16.3746 5.355 17.2442 5.58 17.5979C6.66 19.3813 8.385 18.8801 9.075 18.5706C9.18 17.8042 9.495 17.2884 9.84 16.9936C7.17 16.6988 4.38 15.6819 4.38 11.1719C4.38 9.8896 4.845 8.82842 5.61 8.00306C5.49 7.70829 5.07 6.49972 5.73 4.87848C5.73 4.87848 6.735 4.56897 9.03 6.08704C9.99 5.82175 11.01 5.6891 12.03 5.6891C13.05 5.6891 14.07 5.82175 15.03 6.08704C17.325 4.55423 18.33 4.87848 18.33 4.87848C18.99 6.49972 18.57 7.70829 18.45 8.00306C19.215 8.82842 19.68 9.87486 19.68 11.1719C19.68 15.6966 16.875 16.6988 14.205 16.9936C14.64 17.3621 15.015 18.0695 15.015 19.1749C15.015 20.7519 15 22.0195 15 22.4174C15 22.7269 15.225 23.0954 15.825 22.9775C18.2072 22.1872 20.2772 20.6829 21.7437 18.6761C23.2101 16.6694 23.9993 14.2613 24 11.7909C24 5.27642 18.63 0 12 0Z"
                  />
                </svg>
              </a>
            )}
            <a
              className={styles.socialIcon}
              href={profile.linkedinLink}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              LinkedIn
              <svg
                width="16"
                height="16"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="Linkedin Icon"
                className="fillIcon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.34961e-07 1.58737C2.34961e-07 1.16637 0.16724 0.762619 0.464928 0.46493C0.762617 0.167242 1.16637 2.11618e-06 1.58736 2.11618e-06H17.4109C17.6195 -0.000338633 17.8262 0.0404746 18.019 0.120105C18.2119 0.199736 18.3871 0.31662 18.5347 0.464065C18.6823 0.611511 18.7994 0.786622 18.8792 0.979374C18.9591 1.17213 19.0001 1.37873 19 1.58737V17.4109C19.0002 17.6196 18.9593 17.8263 18.8796 18.0191C18.7999 18.2119 18.6829 18.3872 18.5354 18.5348C18.3879 18.6824 18.2127 18.7994 18.0199 18.8793C17.8271 18.9591 17.6204 19.0001 17.4118 19H1.58736C1.37884 19 1.17235 18.9589 0.979706 18.8791C0.787062 18.7993 0.612034 18.6823 0.464623 18.5348C0.317211 18.3873 0.200305 18.2122 0.120583 18.0195C0.0408615 17.8268 -0.000113219 17.6203 2.34961e-07 17.4118V1.58737ZM7.52055 7.24418H10.0933V8.53618C10.4647 7.79346 11.4147 7.125 12.8423 7.125C15.5791 7.125 16.2277 8.60441 16.2277 11.3188V16.3469H13.458V11.9372C13.458 10.3913 13.0867 9.519 12.1436 9.519C10.8352 9.519 10.2911 10.4595 10.2911 11.9372V16.3469H7.52055V7.24418ZM2.77055 16.2286H5.54109V7.125H2.77055V16.2286ZM5.9375 4.15582C5.94272 4.39304 5.90051 4.62891 5.81334 4.84959C5.72617 5.07027 5.5958 5.27132 5.42988 5.44094C5.26396 5.61055 5.06583 5.74532 4.84712 5.83733C4.62841 5.92933 4.39352 5.97673 4.15625 5.97673C3.91898 5.97673 3.68409 5.92933 3.46538 5.83733C3.24667 5.74532 3.04854 5.61055 2.88262 5.44094C2.7167 5.27132 2.58633 5.07027 2.49916 4.84959C2.41199 4.62891 2.36978 4.39304 2.375 4.15582C2.38525 3.69019 2.57742 3.24709 2.91036 2.92141C3.24329 2.59573 3.69051 2.41336 4.15625 2.41336C4.62199 2.41336 5.06921 2.59573 5.40214 2.92141C5.73508 3.24709 5.92725 3.69019 5.9375 4.15582Z"
                />
              </svg>
            </a>
            <a
              className={styles.socialIcon}
              href={profile.twitterLink}
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              Twitter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
                alt="Twitter Icon"
                className="fillIcon"
              >
                <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
              </svg>
            </a>
            <a
              className={styles.socialIcon}
              href={`mailto:${profile.user.email}`}
              title="Mail"
            >
              Email
              <MailIcon width={17} height={17} alt="Mail Icon" />
            </a>
          </div>
        </div>
      </header>

      <section className={styles.line}>
        <Link href={`/${profile.username}/endorsement`} scroll={false}>
          <a
            className={`pb-4 flex item-center text-sm ${
              router.pathname == "/[username]/endorsement"
                ? "activeTabLink"
                : ""
            }`}
          >
            <BadgeCheckIcon
              className="mr-2"
              width={19}
              height={19}
              title="Endorse Icon"
            />{" "}
            Endorsements
          </a>
        </Link>
        <Link href={`/${profile.username}/recommendation`} scroll={false}>
          <a
            className={`pb-4 flex item-center text-sm ${
              router.pathname == "/[username]/recommendation"
                ? "activeTabLink"
                : ""
            }`}
          >
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
