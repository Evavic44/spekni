import { useRouter } from 'next/router'
import React from "react";
import Head from "next/head";
// import styles from "../../styles/Profile.module.css";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { GlobeIcon, MailIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import ProfileLayout from "../../components/ProfileLayout";
// import Footer from "../../components/Footer";

export default function Profile() {
  return (
    <div>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Developer, Endorsements, Hiring, Job, Victor Eke, Planetscale, Hashnode, Hackathon"
        />
        {/* Primary met tags */}
        <title>User Profile - Spekni</title>
        <meta
          name="title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          name="description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <meta
          name="author"
          content="EKe Victor, Spiff Jekey-Green, Nicholas Ovunda"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spekni.vercel.app/" />
        <meta
          property="og:title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          property="og:description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />

        <meta
          property="twitter:card"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />
        <meta property="twitter:url" content="https://spekni.vercel.app/" />
        <meta
          property="twitter:title"
          content="Spekni - Hiring and Freelance organization Recruiters can Trust"
        />
        <meta
          property="twitter:description"
          content="Spekni is a hiring platform built for recruiters to find the best developers based on reputable endorsements."
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/62628408/177588390-29fc8f28-2088-4209-98b4-677b84c0e700.jpg"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <ProfileLayout />
    </div>
  );
}
