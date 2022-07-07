import React from "react";
import styles from "../../styles/Login.module.css";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import GitHubIcon from "../../public/github.svg";
import GoogleIcon from "../../public/google.svg";
import People from "../../public/images/login.svg";

export default function login() {
  return (
    <div>
      <section>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className="flex items-center mb-20">
              <Image src={Logo} alt="logo" width="30px" height="30px" />
              <span className="font-bold text-black text-xl ml-0.5">
                Spekni
              </span>
            </div>

            <div className={styles.form}>
              <h2>Let's help recruiters understand your skills.</h2>

              <div className={styles.buttonContainer}>
                <button className={styles.githubButton}>
                  <Image src={GitHubIcon} width={17} height={17} />
                  <span>Get Started with GitHub</span>
                </button>
                <button className={styles.gooleButton}>
                  <Image src={GoogleIcon} width={17} height={17} />
                  <span>Get Started with Google</span>
                </button>
              </div>

              <p className={styles.tc}>
                By signing up, you are agreeing to our{" "}
                <a href="google.com">Terms of Service</a> and
                <a href="google.com"> Privacy Policy</a>.
              </p>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div>
              {/* <h2>Hiring and Freelance organization Recruiters can Trust</h2> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
