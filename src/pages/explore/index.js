import Head from "next/head";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import userData from "../../data";

export default function Explore() {
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
