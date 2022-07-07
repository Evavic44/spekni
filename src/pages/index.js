import Head from "next/head";
// import Heading from "./styles/Index.styled.js";
// import styles from "../styles/Utilities.module.css";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Navbar from "../components/Navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
/* // Todo
? Fix styled components import issue 
? Structure pages styles folders
*/
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head lang="en">
        <title>
          Spekni - Hiring and Freelance organization Recruiters can Trust
        </title>
        <meta
          name="title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          name="description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
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
      {/* Markup */}
      {/* <main className={styles.main}> // ? Module styling (Don't delete) */}
      <Container>
        <Navbar />

        <Heading className="max-w-4xl px-4 pt-0 pb-4 text-center">
          {/* <Image src={Logo} width="40px" height="40px"></Image> */}
          <h1 className="text-7xl font-bold leading mb-5">
            Hiring and <span className="icon-one">Freelance</span> organization
            Recruiters can <span className="icon-two highlight">Trust</span>
          </h1>
          <p className="my-0 mx-auto max-w-xl">
            Marketplace for top developers, engineers, programmers, coders,
            architects, and consultants
          </p>

          <a className="btn btn-dark mt-5">Explore Now</a>
        </Heading>

        <Section></Section>
      </Container>
    </div>
  );
}

const Container = styled.main``;

const Heading = styled.div`
  margin: 5rem auto 11rem;

  h1 {
    line-height: 1;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 1.5rem;
    z-index: -10;

    .icon {
      &-one {
        position: relative;
        z-index: -20;

        &::before {
          content: "";
          position: absolute;
          right: -85px;
          top: 10px;
          background-image: url(/images/icon-three.svg);
          background-size: 35px;
          background-repeat: no-repeat;
          width: 90px;
          height: 90px;
        }
      }

      &-two {
        position: relative;
        z-index: -20;

        &::before {
          content: "";
          position: absolute;
          right: -70px;
          top: -10px;
          background-image: url(/images/icon-one.svg);
          background-size: 35px;
          background-repeat: no-repeat;
          width: 90px;
          height: 90px;
          transform: rotate(180deg);
        }
      }
    }
  }

  .btn {
    width: 230px;
    padding: 0.8rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    max-width: 700px;

    h1 {
      line-height: 1.1;
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 700px;

    h1 {
      line-height: 1.11;
    }
  }
`;

// Section
const Section = styled.section`
  background: black;
  min-height: 80vh;
`;
