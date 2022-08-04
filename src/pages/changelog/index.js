import Head from "next/head";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import styles from "../../styles/Changelog.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ChipIcon } from "@heroicons/react/outline";

export default function Changelog() {
  return (
    <>
      <Head>
        <title>Changelog - Spekni</title>
      </Head>
      <Navbar />
      <main className="mb-12">
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

        {/* Badge */}
        <section className="flex item-center justify-center flex-wrap gap-4 md:my-24 my-14">
          <a href="https://vercel.com/evavic44/spekni/4g6cAgSJ2JQcGxpwQew77Ny9jDdC">
            <Image
              className="rounded-md"
              src="https://user-images.githubusercontent.com/62628408/178318439-dd015ff3-5ebd-43d8-a84f-6f6d4876a5b0.svg"
              width={130}
              height={35}
            />
          </a>

          <a href="https://vercel.com/evavic44/spekni/4g6cAgSJ2JQcGxpwQew77Ny9jDdC">
            <Image
              src="https://user-images.githubusercontent.com/62628408/178316423-5dc0c0bb-2ebb-4c7f-9635-164a324d4897.svg"
              width={170}
              height={35}
            />
          </a>
        </section>

        {/* Log one */}
        <article className={styles.logContainer}>
          <div className={styles.logContent}>
            <a
              href="https://github.com/Evavic44/spekni/commit/daabdeb04a93a9ce7d410b713da503043f478713"
              className="font-black text-2xl title hover:text-blue-600 hover:underline mb-4 max-w-md sticky"
            >
              Add profile link to endorsers in skills section
            </a>
            <span>August 3, 2022</span>
            <div className="my-4 flex items-center gap-x-2">
              <a
                href="https://github.com/evavic44/spekni/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement"
                className="label enhancement"
              >
                enhancement
              </a>
            </div>

            <div className="contributors">
              <div className="flex items-center gap-x-2">
                <a href="https://github.com/spiffgreen">
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

          <div className="border-right relative">
            <svg
              className={styles.node}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path
                fill-rule="evenodd"
                d="M15.5 11.75a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm1.444-.75a5.001 5.001 0 00-9.888 0H2.75a.75.75 0 100 1.5h4.306a5.001 5.001 0 009.888 0h4.306a.75.75 0 100-1.5h-4.306z"
                className="fillIcon"
              ></path>
            </svg>
          </div>

          <blockquote className="lg:px-6 sm:px-6 px-4 pb-5 xl:text-lg borderLight">
            <p className="leading-loose mb-3">
              The profile of each endorser is wrapped in a link, initially, this
              link was pointing to{" "}
              <a className="underline" href="https://spekni.verce.app">
                https://spekni.verce.app
              </a>
              . This feature makes the profiles dynamic -thereby pointing to the
              endorsers own profile.
            </p>
            <a
              href="https://github.com/Evavic44/spekni/commit/daabdeb04a93a9ce7d410b713da503043f478713"
              className="text-blue-700 hover:underline"
            >
              Learn more about this feature
            </a>
          </blockquote>
        </article>
      </main>
    </>
  );
}
