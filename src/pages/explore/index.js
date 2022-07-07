import Head from "next/head";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import userData from "../../data";
console.log(userData);

export default function Explore({ image, name, job, endorsements, id }) {
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
      {/* <section className={styles.container}>
        <article className={styles.card}>
          <LazyLoadImage
            className={styles.image}
            src={image.url}
            alt={image.alt}
            width={170}
            height={170}
          />
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.job}>{job}</p>
          <div className={styles.badge} title="Spekni Endorsement Badge">
            <Image src={Badge} width={18} height={18} />
            <span className={styles.count}>{endorsements} Endorsements</span>
          </div>
        </article>
      </section> */}
      {userData.map((data) => (
        <Card
          key={data.id}
          name={data.name}
          job={data.job}
          image={data.image}
          endorsements={data.endorsements}
        />
      ))}
    </div>
  );
}
