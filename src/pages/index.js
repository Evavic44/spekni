import Head from "next/head";
// import Heading from "./styles/Index.styled.js";
import styles from "../styles/Utilities.module.css";
// import Logo from "../public/logo.svg";
/* // Todo
? Fix styled components import issue 
? Structure pages styles folders
? Logo import not working
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
          href="https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans:200,300,regular,500,600,700,800,200italic,300italic,italic,500italic,600italic,700italic,800italic"
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
        <img
          src="/logo.svg"
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <Heading>
          Welcome to <a href="/">Spekni!</a>
        </Heading>
      </Container>
    </div>
  );
}

const Container = styled.main`
  background: #f4f4f4;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: -2px;
`;
