import { useState, useEffect } from "react";
import Head from "next/head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { GlobeAltIcon } from "@heroicons/react/outline";
import { useSession, getSession } from "next-auth/react";

export default function Account() {
  const { data: session, status } = useSession();
  const [profileData, setProfileData] = useState({});

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center text-center h-screen">
        <span className="loader loaderLight"></span>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Head>
        <title>Edit Account - Spekni</title>
      </Head>

      <Navbar />
      <main className="max-w-3xl mt-12 mx-auto mb-32 p-6">
        <h1 className="font-extrabold max-w-4xl text-4xl text-center sm:text-5xl lg:text-5xl tracking-tight mb-12">
          Edit Account
        </h1>

        <div className="flex justify-center">
          <LazyLoadImage
            className="rounded-full bg-secondary"
            src={session.user.image}
            alt={session.user.name}
            width={120}
            height={120}
            // placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold leading-6 mt-6">
            Personal Information
          </h3>

          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="/api/users" method="POST">
                {/* Keep hidden inputs here */}
                <input name="email" type="hidden" value={session.user.email} />
                {/* End of hidden inputs */}
                <div className="py-5 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium"
                      >
                        Username
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          className="flex-1 block w-full rounded-md text-sm py-4 px-6"
                          defaultValue={profileData.username}
                          placeholder="E.g: johndoe"
                          required
                          maxlength="10"
                        />
                      </div>
                      <small className="opacity-40 text-xs">
                        Username should be one word, lower case
                      </small>
                    </div>
                    <div className="">
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium"
                      >
                        Full Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="fullName"
                          id="full_name"
                          className="flex-1 block w-full rounded-md text-sm py-4 px-6"
                          defaultValue={profileData.fullName}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <small className="opacity-40 text-xs">
                        Add your full name
                      </small>
                    </div>

                    <div className="">
                      <label
                        htmlFor="job_title"
                        className="block text-sm font-medium"
                      >
                        Job Title
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="job_title"
                          id="job_title"
                          className="flex-1 block w-full rounded-md text-sm py-4 px-6"
                          placeholder="Senior Software Engineer"
                          defaultValue={profileData.job_title}
                          required
                          maxlength="30"
                        />
                      </div>
                      <small className="opacity-40 text-xs">
                        Add a job title under 30 words or less
                      </small>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium">
                      Bio
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="bio"
                        name="bio"
                        rows={3}
                        className="shadow-sm mt-1 block w-full text-sm rounded-md py-5 px-6"
                        defaultValue={profileData.bio}
                        required
                        maxlength="160"
                      />
                    </div>
                    <small className="opacity-40 text-xs">
                      Tell us a little about yourself in 160 words or less.
                    </small>
                  </div>

                  <div className="hidden sm:block max-w-3xl" aria-hidden="true">
                    <div className="py-5">
                      <div className="borderLight" />
                    </div>
                  </div>

                  {/* Skills */}
                  <h3 className="text-lg font-bold leading-6 mt-6">
                    Tech Stack/Skills
                  </h3>
                  <small className="opacity-40 text-xs">
                    Add at least three skills you want people to endorse
                  </small>

                  <div className="grid grid-cols-6 gap-6">
                    {/* Skill one */}
                    <div className="col-span-6 sm:col-span-3 my-3">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium"
                      >
                        Skill One
                      </label>
                      <div className="mt-1">
                        <input
                          id="skills"
                          name="skills"
                          className="shadow-sm mt-1 block w-full text-sm rounded-md py-4 px-6"
                          required
                          placeholder="E.g React"
                          maxlength="25"
                        />
                      </div>
                    </div>

                    {/* Skill Two */}
                    <div className="col-span-6 sm:col-span-3 my-3">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium"
                      >
                        Skill Two
                      </label>
                      <div className="mt-1">
                        <input
                          id="skills"
                          name="skills"
                          className="shadow-sm mt-1 block w-full text-sm rounded-md py-4 px-6"
                          required
                          placeholder="E.g: NodeJS"
                          maxlength="25"
                        />
                      </div>
                    </div>

                    {/* Skill Three */}
                    <div className="col-span-6 sm:col-span-3 my-3">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium"
                      >
                        Skill Three
                      </label>
                      <div className="mt-1">
                        <input
                          id="skills"
                          name="skills"
                          className="shadow-sm mt-1 block w-full text-sm rounded-md py-4 px-6"
                          placeholder="E.g: Project Management"
                          required
                          maxlength="25"
                        />
                      </div>
                    </div>

                    {/* Skill Four */}
                    <div className="col-span-6 sm:col-span-3 my-3">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium"
                      >
                        Skill Four
                      </label>
                      <div className="mt-1">
                        <input
                          id="skills"
                          name="skills"
                          className="shadow-sm mt-1 block w-full text-sm rounded-md py-4 px-6"
                          placeholder="E.g: C++"
                          maxlength="25"
                        />
                      </div>
                    </div>

                    {/* Skill Five */}
                    <div className="col-span-6 sm:col-span-3 my-3">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium"
                      >
                        Skill Five
                      </label>
                      <div className="mt-1">
                        <input
                          id="skills"
                          name="skills"
                          className="shadow-sm mt-1 block w-full text-sm rounded-md py-4 px-6"
                          placeholder="E.g: Open Source"
                          maxlength="25"
                        />
                      </div>
                    </div>

                    {/* Skill Six */}
                    <div className="col-span-6 sm:col-span-3 my-3">
                      <label
                        htmlFor="skills"
                        className="block text-sm font-medium"
                      >
                        Skill Six
                      </label>
                      <div className="mt-1">
                        <input
                          id="skills"
                          name="skills"
                          className="shadow-sm mt-1 block w-full text-sm rounded-md py-4 px-6"
                          placeholder="E.g: NextJS"
                          maxlength="25"
                        />
                      </div>
                    </div>
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

                {/* Portfolio */}
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3 my-3">
                    <label
                      htmlFor="portfolioLink"
                      className="flex item-center gap-x-1 text-sm font-medium"
                    >
                      <GlobeAltIcon width={17} height={17} alt="Globe Icon" />
                      Portfolio URL
                    </label>
                    <input
                      type="text"
                      name="portfolioLink"
                      id="portfolio-url"
                      autoComplete="given-name"
                      className="mt-3 block w-full shadow-sm text-sm rounded-md py-4 px-6"
                      placeholder="example.com"
                      defaultValue={profileData.portfolioLink}
                    />
                  </div>

                  {/* GitHub */}
                  <div className="col-span-6 sm:col-span-3 my-3">
                    <label
                      htmlFor="githubLink"
                      className="flex item-center gap-x-2 text-sm font-medium"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 23"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="GitHub Icon"
                        className="fillIcon mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 0C5.37 0 0 5.27642 0 11.7909C0 17.0083 3.435 21.4152 8.205 22.9775C8.805 23.0806 9.03 22.7269 9.03 22.4174C9.03 22.1374 9.015 21.2088 9.015 20.2214C6 20.7667 5.22 19.4992 4.98 18.8359C4.845 18.4969 4.26 17.4505 3.75 17.1705C3.33 16.9494 2.73 16.4041 3.735 16.3893C4.68 16.3746 5.355 17.2442 5.58 17.5979C6.66 19.3813 8.385 18.8801 9.075 18.5706C9.18 17.8042 9.495 17.2884 9.84 16.9936C7.17 16.6988 4.38 15.6819 4.38 11.1719C4.38 9.8896 4.845 8.82842 5.61 8.00306C5.49 7.70829 5.07 6.49972 5.73 4.87848C5.73 4.87848 6.735 4.56897 9.03 6.08704C9.99 5.82175 11.01 5.6891 12.03 5.6891C13.05 5.6891 14.07 5.82175 15.03 6.08704C17.325 4.55423 18.33 4.87848 18.33 4.87848C18.99 6.49972 18.57 7.70829 18.45 8.00306C19.215 8.82842 19.68 9.87486 19.68 11.1719C19.68 15.6966 16.875 16.6988 14.205 16.9936C14.64 17.3621 15.015 18.0695 15.015 19.1749C15.015 20.7519 15 22.0195 15 22.4174C15 22.7269 15.225 23.0954 15.825 22.9775C18.2072 22.1872 20.2772 20.6829 21.7437 18.6761C23.2101 16.6694 23.9993 14.2613 24 11.7909C24 5.27642 18.63 0 12 0Z"
                        />
                      </svg>
                      GitHub
                    </label>
                    <input
                      type="text"
                      name="githubLink"
                      id="github-url"
                      autoComplete="family-name"
                      className="mt-3 block w-full shadow-sm text-sm rounded-md py-4 px-6"
                      placeholder="johndoe"
                      defaultValue={profileData.githubLink}
                    />
                  </div>

                  {/* Twitter */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="twitterLink"
                      className="flex item-center gap-x-2 text-sm font-medium"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="18px"
                        height="18px"
                        alt="Twitter Icon"
                        className="fillIcon"
                      >
                        <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
                      </svg>
                      Twitter
                    </label>
                    <input
                      type="text"
                      name="twitterLink"
                      id="twitter-url"
                      autoComplete="given-name"
                      className="mt-3 block w-full shadow-sm text-sm rounded-md py-4 px-6"
                      placeholder="johndoe"
                      defaultValue={profileData.twitterLink}
                    />
                  </div>

                  {/* LinkedIn */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="linkedinLink"
                      className="flex item-center gap-x-2 text-sm font-medium"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="Linkedin Icon"
                        className="fillIcon mt-1"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.34961e-07 1.58737C2.34961e-07 1.16637 0.16724 0.762619 0.464928 0.46493C0.762617 0.167242 1.16637 2.11618e-06 1.58736 2.11618e-06H17.4109C17.6195 -0.000338633 17.8262 0.0404746 18.019 0.120105C18.2119 0.199736 18.3871 0.31662 18.5347 0.464065C18.6823 0.611511 18.7994 0.786622 18.8792 0.979374C18.9591 1.17213 19.0001 1.37873 19 1.58737V17.4109C19.0002 17.6196 18.9593 17.8263 18.8796 18.0191C18.7999 18.2119 18.6829 18.3872 18.5354 18.5348C18.3879 18.6824 18.2127 18.7994 18.0199 18.8793C17.8271 18.9591 17.6204 19.0001 17.4118 19H1.58736C1.37884 19 1.17235 18.9589 0.979706 18.8791C0.787062 18.7993 0.612034 18.6823 0.464623 18.5348C0.317211 18.3873 0.200305 18.2122 0.120583 18.0195C0.0408615 17.8268 -0.000113219 17.6203 2.34961e-07 17.4118V1.58737ZM7.52055 7.24418H10.0933V8.53618C10.4647 7.79346 11.4147 7.125 12.8423 7.125C15.5791 7.125 16.2277 8.60441 16.2277 11.3188V16.3469H13.458V11.9372C13.458 10.3913 13.0867 9.519 12.1436 9.519C10.8352 9.519 10.2911 10.4595 10.2911 11.9372V16.3469H7.52055V7.24418ZM2.77055 16.2286H5.54109V7.125H2.77055V16.2286ZM5.9375 4.15582C5.94272 4.39304 5.90051 4.62891 5.81334 4.84959C5.72617 5.07027 5.5958 5.27132 5.42988 5.44094C5.26396 5.61055 5.06583 5.74532 4.84712 5.83733C4.62841 5.92933 4.39352 5.97673 4.15625 5.97673C3.91898 5.97673 3.68409 5.92933 3.46538 5.83733C3.24667 5.74532 3.04854 5.61055 2.88262 5.44094C2.7167 5.27132 2.58633 5.07027 2.49916 4.84959C2.41199 4.62891 2.36978 4.39304 2.375 4.15582C2.38525 3.69019 2.57742 3.24709 2.91036 2.92141C3.24329 2.59573 3.69051 2.41336 4.15625 2.41336C4.62199 2.41336 5.06921 2.59573 5.40214 2.92141C5.73508 3.24709 5.92725 3.69019 5.9375 4.15582Z"
                        />
                      </svg>
                      LinkedIn
                    </label>
                    <input
                      type="text"
                      name="linkedinLink"
                      id="linkedin-url"
                      autoComplete="family-name"
                      className="mt-3 block w-full shadow-sm text-sm rounded-md py-4 px-6"
                      placeholder="johndoe"
                      defaultValue={profileData.linkedinLink}
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
