import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import HashnodeLogo from "../../public/images/hashnode.svg";
import PlanetScaleLogo from "../../public/images/planetscale.svg";
import TwitterLogo from "../../public/images/twitter.svg";
import GitHubLogo from "../../public/images/github-dark.svg";

export default function index() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.footerHead}>
          <div className={styles.footerLinks}>
            <div className={styles.footerLogo}>
              <Image src={Logo} alt="Logo" width="22px" height="22px" />
              <Link href="#">
                <a className="font-bold text-xl ml-1">Spekni</a>
              </Link>
            </div>

            <a href="https://github.com/evavic44/spekni">Docs</a>
            <a href="https://github.com/evavic44/spekni">
              Terms &amp; Conditions
            </a>
            <a href="https://github.com/evavic44/spekni/License">License</a>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>

          <div className={styles.footerIcons}>
            <a href="https://twitter.com">
              <Image
                src={TwitterLogo}
                width={20}
                height={20}
                alt="Twitter Logo"
                title="Twitter"
              />
            </a>
            <a href="https://github.com/evavic44/spekni">
              <Image
                src={GitHubLogo}
                width={17}
                height={17}
                alt="GitHub Logo"
                title="GitHub"
              />
            </a>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.footerBottom}>
          <div className={styles.attribution}>
            <small>Hackathon Project by</small>

            <div>
              <a href="https://planetscale.com/" title="Planetscale">
                <Image
                  src={PlanetScaleLogo}
                  width={20}
                  height={20}
                  alt="PlanetScale Logo"
                />
                <small className="ml-2">PlanetScale</small>
              </a>
              <span className="font-bold text-sm mx-2">&frasl;</span>
              <a href="https://hashnode.com" title="Hashnode">
                <Image
                  className="mr-3"
                  src={HashnodeLogo}
                  width={20}
                  height={20}
                  alt="Hashnode Logo"
                />
                <small className="ml-1">hashnode</small>
              </a>
            </div>
          </div>

          <div className={styles.tc}>
            <small>&copy; All rights reserved 2022 Spekni</small>
            <a href="https://www.buymeacoffee.com/evavic44">
              <Image
                src="https://res.cloudinary.com/victoreke/image/upload/v1658271681/Spekni/bmc_jaukkk.png"
                alt="buymeacoffee"
                width={140}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
