import Head from "next/head";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "../../styles/Account.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GitHubIcon from "../../public/images/github-dark.svg";

export default function Account() {
  return (
    <>
      <Head>
        <title>Edit Account - Spekni</title>
      </Head>

      <Navbar />
      <main className={styles.container}>
        <h1 className="font-extrabold max-w-4xl text-4xl text-center sm:text-5xl lg:text-5xl tracking-tight mb-12">
          Edit Account
        </h1>

        <div className="flex justify-center">
          <LazyLoadImage
            className="rounded-full"
            src="https://res.cloudinary.com/victoreke/image/upload/v1657144819/Spekni/user-1_kknjns.png"
            alt="John Boyega"
            width={120}
            height={120}
            placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold leading-6 mt-6">
            Personal Information
          </h3>

          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="py-5 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="">
                      <label
                        htmlFor="edit account"
                        className="block text-sm font-medium"
                      >
                        Full Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="edit account"
                          id="edit account"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md text-sm"
                          value="John Boyega"
                          required
                        />
                      </div>
                    </div>

                    <div className="">
                      <label
                        htmlFor="edit account"
                        className="block text-sm font-medium"
                      >
                        Job Title
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="edit account"
                          id="edit account"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md text-sm"
                          placeholder="Senior Software Engineer"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium"
                    >
                      Bio
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-sm rounded-md p-5"
                        defaultValue={""}
                        required
                      />
                    </div>
                    <p className="mt-4 text-sm">
                      Tell us a little about yourself in 160 words or less.
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium"
                    >
                      Skills
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-sm rounded-md p-5"
                        defaultValue={""}
                        required
                        placeholder="React, JavaScript, NodeJS"
                      />
                    </div>
                    <p className="mt-4 text-sm">
                      Add your preffered skills (Maximum 5, miminum 2).
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block max-w-3xl" aria-hidden="true">
                  <div className="py-5">
                    <div className="borderLight" />
                  </div>
                </div>

                <div className="mt-10 sm:mt-0">
                  <h3 className="text-lg font-bold leading-6 my-6">
                    Social Account
                  </h3>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium"
                    >
                      Portfolio URL
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm rounded-md"
                      placeholder="johnboyega.com"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium"
                    >
                      LinkedIn URL
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm rounded-md"
                      placeholder="johnboyega"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium"
                    >
                      GitHub URL
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm rounded-md"
                      placeholder="johnboyega"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium"
                    >
                      LinkedIn URL
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm rounded-md"
                      placeholder="johnboyega"
                    />
                  </div>
                </div>

                <button type="submit" className="mt-10 btn btn-dark w-full">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
