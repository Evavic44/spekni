import Head from "next/head";
// import Heading from "./styles/Index.styled.js";
// import styles from "../styles/Utilities.module.css";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Navbar from "../components/Navbar";
/* // Todo
? Fix styled components import issue 
? Structure pages styles folders
*/
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      {/* Meta */}
      <Head>
        <title>
          Spekni - Hiring and Freelance organization Recruiters can Trust
        </title>
        <meta
          name="description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <link rel="icon" href="/favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Space+Grotesk:300,regular,500,600,700"
          rel="stylesheet"
        />
      </Head>
      {/* Markup */}
      {/* <main className={styles.main}> // ? Module styling (Don't delete) */}
      <Container>
        <Navbar />

        <Heading>
          {/* <Image src={Logo} width="40px" height="40px"></Image> */}
          <h1>
            Hiring and <span className="icon-one">Freelance</span> organization
            Recruiters can <span className="icon-two highlight">Trust</span>
          </h1>
          <p>
            Marketplace for top developers, engineers, programmers, coders,
            architects, and consultants
          </p>
        </Heading>
      </Container>
    </div>
  );
}

const Container = styled.main``;

const Heading = styled.div`
  text-align: center;
  max-width: 850px;
  margin: 3.5rem auto 0;
  padding: 0 1rem 1rem;

  h1 {
    line-height: 1;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -1px;
    margin-bottom: 1.5rem;

    .icon {
      &-one {
        position: relative;

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
      line-height: 1.1;
      /* font-size: 2rem; */
    }
  }
`;
