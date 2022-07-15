import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="Developer, Endorsements, Hiring, Job, Victor Eke, Planetscale, Hashnode, Hackathon"
          />
          {/* Primary met tags */}
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

          {/* Font */}
          <link
            href="https://fonts.googleapis.com/css?family=Plus+Jakarta+Sans:200,300,regular,500,600,700,800,200italic,300italic,italic,500italic,600italic,700italic,800italic&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
