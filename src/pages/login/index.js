import Head from "next/head";
import { getProviders, signIn, useSession } from "next-auth/react";
import styles from "../../styles/Login.module.css";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import GitHubIcon from "../../public/images/github.svg";
import GoogleIcon from "../../public/images/google.svg";
import Link from "next/link";
import Router from "next/router";

export default function Login({ providers }) {
  const { data: session, status } = useSession();

  const signInWithGithub = () => {
    signIn(providers.github.id, { callbackUrl: "/" });
  };

  const signInWithGoogle = () => {
    signIn(providers.google.id, { callbackUrl: "/" });
  };

  if (status === "authenticated") {
    Router.push("/");
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <Head lang="en">
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="keywords"
            content="Developer, Endorsements, Hiring, Job, Planetscale, Hashnode, Hackathon"
          />
          {/* Primary met tags */}
          <title>Sigup/login - Spekni</title>
          <meta
            name="title"
            content="Create an account on Spekni using your Github or Google account to start receiving endorsements and recommendations"
          />
          <meta
            name="description"
            content="Create an account on Spekni using your Github or Google account to start receiving endorsements and recommendations"
          />
          <meta
            name="author"
            content="EKe Victor, Spiff Jekey-Green, Nicholas Ovunda"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://spekni.vercel.app/" />
          <meta
            property="og:title"
            content="Create an account on Spekni using your Github or Google account to start receiving endorsements and recommendations"
          />
          <meta
            property="og:description"
            content="Create an account on Spekni using your Github or Google account to start receiving endorsements and recommendations"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-home.png"
          />

          <meta
            property="twitter:card"
            content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-home.png"
          />
          <meta property="twitter:url" content="https://spekni.vercel.app/" />
          <meta
            property="twitter:title"
            content="Create an account on Spekni using your Github or Google account to start receiving endorsements and recommendations"
          />
          <meta
            property="twitter:description"
            content="Create an account on Spekni using your Github or Google account to start receiving endorsements and recommendations"
          />
          <meta
            property="twitter:image"
            content="https://res.cloudinary.com/victoreke/image/upload/v1658407791/Spekni/bg/spekni-home.png"
          />
        </Head>

        <section>
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <div className="flex items-center mb-20">
                <Image src={Logo} alt="logo" width="30px" height="30px" />
                <Link href="/">
                  <a className="font-bold text-xl ml-0.5">Spekni</a>
                </Link>
              </div>

              <div>
                <h2>Let&apos;s help recruiters understand your skills.</h2>
                <div className={styles.buttonContainer}>
                  <button
                    className="bg-black text-white"
                    onClick={signInWithGithub}
                  >
                    <Image
                      src={GitHubIcon}
                      width={17}
                      height={17}
                      alt="GitHub"
                    />
                    <span>Get Started with GitHub</span>
                  </button>
                  <button onClick={signInWithGoogle}>
                    <Image
                      src={GoogleIcon}
                      width={17}
                      height={17}
                      alt="Google"
                    />
                    <span>Get Started with Google</span>
                  </button>
                </div>

                <p className={styles.tc}>
                  By signing up, you are agreeing to our
                  <a href="https://policies.google.com/terms?hl=en-US">
                    {" "}
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/privacy?hl=en-US">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.rightContainer}></div>
          </div>
        </section>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className={styles.loadingContainer}>
        <span className="loader loaderDark"></span>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  return { props: { providers: await getProviders() } };
}
