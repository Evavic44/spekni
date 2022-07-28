import Head from "next/head";

export default function Error() {
  return (
    <>
      <Head>
        <title>Resource Not Found | Spekni</title>
      </Head>

      <main className="flex items-center justify-center text-center h-screen">
        <h1 className="my-4">Resource Not Found</h1>
        <p>Sorry this resource doesn&apos;t seem to exist</p>

        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#3A52EE" />
          <path
            d="M14.0098 30.7163C13.4742 31.0069 12.8665 30.4976 12.9747 29.8473L14.1263 22.9045L9.23817 17.9785C8.78168 17.5177 9.01894 16.6751 9.63083 16.5841L16.4268 15.5625L19.4571 9.21125C19.7304 8.63881 13.0203 29.9967 13.2373 30.6231L22.2584 12.3869L23.7736 15.5625L30.5695 16.5841C31.1814 16.6751 31.4187 17.5177 30.9608 17.9785L26.074 22.9045L27.2257 29.8473C27.3339 30.4976 26.7262 31.0069 26.1906 30.7163L20.0981 27.4049L14.1263 30.7163H14.0098Z"
            fill="white"
          />
        </svg>
      </main>
    </>
  );
}