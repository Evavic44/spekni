import { ArrowRightIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import styles from "../../styles/Changelog.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Changelog() {
  return (
    <>
      <Head>
        <title>Changelog - Spekni</title>
      </Head>
      <Navbar />
      <main>
        <header className="min-h-max borderLight">
          <div className="flex flex-col lg:flex-row items-center justify-stretch md:justify-between px-6 lg:pt-12 pt-1 max-w-6xl mx-auto">
            <div className="mt-8 mb-8 max-w-lg">
              <h1 className="text-4xl md:text-5xl font-black mb-5">
                Changelog
              </h1>
              <p className="mb-2 text-lg">
                Welcome to Spekni's Changelog. We'll be documenting updates and
                new features of Spekni.
              </p>
            </div>

            <code>
              <div className="relative bg-zinc-800 w-full h-4">
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.snippet}>
                <div className="flex item-center gap-x-2">
                  <i className="dollars text-pink-600">$</i>
                  <i>
                    git clone{" "}
                    <span className="text-gray-500">
                      https://github.com/evavic44/spekni.git
                    </span>
                  </i>
                </div>

                <div className="flex item-center gap-x-2">
                  <i className="dollars text-pink-600">$</i>
                  <i>cd src</i>
                </div>

                <div className="flex item-center gap-x-2">
                  <i className="dollars text-pink-600">$</i>
                  <i>
                    npm <span className="text-green-600">install</span>
                  </i>
                </div>

                <div className="flex item-center gap-x-2">
                  <i className="dollars text-pink-600">$</i>
                  <i>
                    npm <span className="text-green-600">run dev</span>
                  </i>
                </div>

                <div className="mt-3">
                  <i>
                    <span className="text-green-600">ready</span>
                    <span className="text-gray-500">
                      {" "}
                      started server on 0.0.0.0:3000, <br /> url:{" "}
                      <a className="underline">http://localhost:3000</a>
                    </span>
                  </i>
                </div>
              </div>
            </code>
          </div>
        </header>

        <div className="flex flex-col justify-center items-center px-6 py-12">
          <p className="text-center mb-4 text-sm">
            We are actively open to contributions, follow the links below to get
            started. ✨
          </p>

          <div className="flex gap-x-3">
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

            <a href="https://twitter.com/evavic44">
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
          </div>
        </div>

        {/* Logs */}
        <section>
          <article className={styles.logContainer}>
            <div className="flex flex-col items-start">
              <a
                href="https://github.com/evavic44/spekni"
                className="font-black text-2xl title hover:text-blue-600 hover:underline mb-4"
              >
                GitHub Actions: Remove offline self-hosted runners
              </a>
              <span className="date">August 3, 2022</span>
              <div className="my-4 flex items-center gap-x-2">
                <a
                  href="https://github.com/evavic44/spekni/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement"
                  className="label enhancement"
                >
                  enhancement
                </a>
                <a
                  href="https://github.com/evavic44/spekni/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement"
                  className="label bug"
                >
                  bug
                </a>
              </div>

              <div className="contributors">
                <h3 className="font-base mb-2">Contributors</h3>
                <div className="flex items-center gap-x-2">
                  <a
                    href="https://github.com.evavic44"
                    className="opacity-80 hover:opacity-100"
                  >
                    <LazyLoadImage
                      className="rounded-full"
                      src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/eke_tuqz8f.png"
                      alt="user"
                      width={35}
                      height={35}
                      placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
                    />
                  </a>

                  <a href="https://github.com.evavic44">
                    <LazyLoadImage
                      className="rounded-full"
                      src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/spiff_yuk6sb.jpg"
                      alt="user"
                      width={35}
                      height={35}
                      placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="details">
                Previously we retained self-hosted GitHub Action runners in the
                GitHub Actions UI for 30 days after they were last seen to
                connect. With the growth in the use of ephemeral runners and the
                scale of use of self-hosted, this is becoming hard for users to
                manage. As a result, we are making the following changes to the
                time we retain offline runners for. A non-ephemeral self-hosted
                Actions runner is automatically removed from GitHub if we have
                not seen it connect to GitHub for more than 14 days. An
                ephemeral self-hosted Actions runner is automatically removed
                from GitHub if we have not seen it connect to GitHub for more
                than one day.
              </p>
              <a
                href="https://github.com/evavic44/spekni"
                className="source flex item-center"
              >
                See more <ArrowRightIcon width="6" height="6" />{" "}
              </a>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
