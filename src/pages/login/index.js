import React from "react";
import styles from "../../styles/Login.module.css";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import GitHubIcon from "../../public/github.svg";
import GoogleIcon from "../../public/google.svg";

export default function login() {
  return (
    <div>
      <section>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div href="/index" className="flex items-center mb-20">
              <Image src={Logo} alt="logo" width="30px" height="30px" />
              <span className="font-bold text-black text-xl ml-0.5">
                Spekni
              </span>
            </div>

            <div>
              <h2>Let&apos;s help recruiters understand your skills.</h2>
              <div className={styles.buttonContainer}>
                <button className="bg-black text-white">
                  <Image src={GitHubIcon} width={17} height={17} alt="GitHub" />
                  <span>Get Started with GitHub</span>
                </button>
                <button>
                  <Image src={GoogleIcon} width={17} height={17} alt="Google" />
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
