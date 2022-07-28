import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";

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

          {/* Twitter URL */}
          <div className={styles.footerIcons}>
            <a href="https://twitter.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
                alt="Twitter Icon"
                className="fillIcon"
              >
                <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
              </svg>
            </a>

            {/* GitHub URL */}
            <a href="https://github.com/evavic44/spekni">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 23"
                xmlns="http://www.w3.org/2000/svg"
                alt="GitHub Icon"
                className="fillIcon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0C5.37 0 0 5.27642 0 11.7909C0 17.0083 3.435 21.4152 8.205 22.9775C8.805 23.0806 9.03 22.7269 9.03 22.4174C9.03 22.1374 9.015 21.2088 9.015 20.2214C6 20.7667 5.22 19.4992 4.98 18.8359C4.845 18.4969 4.26 17.4505 3.75 17.1705C3.33 16.9494 2.73 16.4041 3.735 16.3893C4.68 16.3746 5.355 17.2442 5.58 17.5979C6.66 19.3813 8.385 18.8801 9.075 18.5706C9.18 17.8042 9.495 17.2884 9.84 16.9936C7.17 16.6988 4.38 15.6819 4.38 11.1719C4.38 9.8896 4.845 8.82842 5.61 8.00306C5.49 7.70829 5.07 6.49972 5.73 4.87848C5.73 4.87848 6.735 4.56897 9.03 6.08704C9.99 5.82175 11.01 5.6891 12.03 5.6891C13.05 5.6891 14.07 5.82175 15.03 6.08704C17.325 4.55423 18.33 4.87848 18.33 4.87848C18.99 6.49972 18.57 7.70829 18.45 8.00306C19.215 8.82842 19.68 9.87486 19.68 11.1719C19.68 15.6966 16.875 16.6988 14.205 16.9936C14.64 17.3621 15.015 18.0695 15.015 19.1749C15.015 20.7519 15 22.0195 15 22.4174C15 22.7269 15.225 23.0954 15.825 22.9775C18.2072 22.1872 20.2772 20.6829 21.7437 18.6761C23.2101 16.6694 23.9993 14.2613 24 11.7909C24 5.27642 18.63 0 12 0Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.line}></div>

        <div className={styles.footerBottom}>
          <div className={styles.attribution}>
            <small>Hackathon Project by</small>

            <div>
              <a href="https://planetscale.com/" title="Planetscale">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 36 36"
                  className="fillIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="PlanetScale Logo"
                >
                  <path
                    className="fillIcon"
                    d="M0 18C8.46286e-07 8.05887 8.05888 -8.46286e-07 18 0C25.3093 6.38998e-07 31.601 4.35665 34.4201 10.6148L10.6148 34.4201C9.59334 33.9599 8.62241 33.4073 7.71291 32.7727L22.4856 18H18L5.27209 30.7279C2.01472 27.4705 -4.3454e-07 22.9705 0 18Z"
                  />
                  <path
                    className="fillIcon"
                    d="M36.0001 18.0061L18.0063 35.9999C27.9425 35.9965 35.9968 27.9423 36.0001 18.0061Z"
                  />
                </svg>
                <small className="ml-2">PlanetScale</small>
              </a>
              <span className="font-bold text-sm mx-2">&frasl;</span>
              <a href="https://hashnode.com" title="Hashnode">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 36 36"
                  fill="#3A52EE"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="Hashnode Logo"
                >
                  <path d="M33.5265 12.0285L23.9715 2.47347C22.3878 0.889734 20.2397 0 18 0C15.7603 0 13.6122 0.889734 12.0285 2.47347L2.47347 12.0285C0.889734 13.6122 0 15.7603 0 18C0 20.2397 0.889734 22.3878 2.47347 23.9715L12.0285 33.5265C13.6122 35.1103 15.7603 36 18 36C20.2397 36 22.3878 35.1103 23.9715 33.5265L33.5265 23.9715C35.1103 22.3878 36 20.2397 36 18C36 15.7603 35.1103 13.6122 33.5265 12.0285ZM18 23.9295C17.2213 23.9295 16.4503 23.7761 15.7309 23.4782C15.0115 23.1802 14.3578 22.7434 13.8072 22.1928C13.2566 21.6422 12.8198 20.9885 12.5218 20.2691C12.2239 19.5497 12.0705 18.7787 12.0705 18C12.0705 17.2213 12.2239 16.4503 12.5218 15.7309C12.8198 15.0115 13.2566 14.3578 13.8072 13.8072C14.3578 13.2566 15.0115 12.8198 15.7309 12.5218C16.4503 12.2239 17.2213 12.0705 18 12.0705C19.5726 12.0705 21.0808 12.6952 22.1928 13.8072C23.3048 14.9192 23.9295 16.4274 23.9295 18C23.9295 19.5726 23.3048 21.0808 22.1928 22.1928C21.0808 23.3048 19.5726 23.9295 18 23.9295Z" />
                </svg>
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
