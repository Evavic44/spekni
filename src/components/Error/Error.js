import Head from "next/head";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Error() {
  return (
    <>
      <Head>
        <title>Resource Not Found | Spekni</title>
      </Head>
      <Navbar />

      <main className="flex items-center flex-col justify-center text-center mt-28">
        <h1 className="font-black md:text-4xl text-2xl my-4">
          Sorry, resource not found
        </h1>
        <Link href="/">
          <a className="btn btn-primary">Go Back Home</a>
        </Link>
      </main>
    </>
  );
}
