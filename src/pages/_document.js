import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="Developer, Endorsements, Hiring, Job, Planetscale, Hashnode, Hackathon"
          />
          {/* Primary met tags */}
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
          <meta property="og:url" content="https://spekni.vercel.app/" />
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
            content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
          />

          <meta
            property="twitter:card"
            content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
          />
          <meta property="twitter:url" content="https://spekni.vercel.app/" />
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
            content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
          />
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/images/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/images/android-chrome-512x512.png"
          />
          <link rel="icon" type="image/png" href="/images/favicon.svg" />
          <link rel="manifest" href="/images/site.webmanifest" />

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

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `,
          }}
        />
      </Html>
    );
  }
}

export default MyDocument;
