import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Changelog.module.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRemark } from "react-remark";
import axios from "axios";

export default function Changelog() {
  const [reactContent, setMarkdownSource] = useRemark();

  async function fetchChangeLog() {
    try {
      const mark = await axios("/CHANGELOG.md");
      setMarkdownSource(mark.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchChangeLog();
  }, []);

  return (
    <>
      <Head>
        <title>Changelog - Spekni</title>
      </Head>
      <Navbar />
      <main className="mb-12 p-2">
        <div>{reactContent}</div>
      </main>
    </>
  );
}
