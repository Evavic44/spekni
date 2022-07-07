import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import Badge from "../public/images/logo.svg";

export default function card() {
  return (
    <div>
      <Head lang="en">
        <title>
          User Profile | Spekni - Hiring and Freelance organization Recruiters
          can Trust
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
      <section className={styles.container}>
        <article className={styles.card}>
          <img
            className={styles.photo}
            src="https://res.cloudinary.com/victoreke/image/upload/v1657144819/Spekni/user-1_kknjns.png"
            width={170}
            height={170}
            alt="John Boyega"
          />
          <h2 className={styles.name}>John Boyega</h2>
          <p className={styles.job}>Software Engineer</p>
          <div className={styles.badge} title="Spekni Endorsement Badge">
            <Image src={Badge} width={18} height={18} />
            <span className={styles.count}>55 Endorsements</span>
          </div>
        </article>
      </section>
    </div>
  );
}
