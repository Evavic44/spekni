import React, { useEffect, useState, useCallback, useRef } from "react";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";
import Image from "next/image";
import prisma from "../../prisma";
import axios from "axios";
import { CalendarIcon, ClockIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Router from "next/router";

export async function getServerSideProps({ resolvedUrl }) {
  const username = resolvedUrl.split("/")[1].trim();
  const user = await prisma.profile.findUnique({
    where: { username },
    include: { user: true },
  });
  if (user) {
    user.createdAt = user.createdAt.toString();
    const endorsementCount = await prisma.endorsement.count({
      where: { userId: user.userId },
    });
    user.endorsements = endorsementCount;
  }
  return {
    props: {
      profile: user,
    },
  };
}



function Recommendation(props) {
  const [recommendations, setRecommendations] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    fetchRecommendations();
  },[]);

  async function fetchRecommendations() {
    try {
      const res = await axios.get(`/api/users/recommendation?u_id=${props.profile.userId}`);
      setRecommendations(res.data);
    } catch (err) {
      console.log(err);
    }    
  }

  async function sendRecommendation(e) {
    e.preventDefault();
    if(!session) Router.push("/login");
    try {
      const res = await axios.post("/api/users/recommendation", {
        recommenderEmail: session.user.email,
        recommendeeID: props.profile.userId,
        summary: e.target.summary.value
      });
      if(res.data.success === true) Router.reload();
    } catch (err) {
      alert("Recommendation unsuccessful");
    }
  }

  return (
    <ProfileLayout profile={props.profile}>
      <div>
        <section className={styles.container}>
          <div className={styles.header}>
            <h1>Recommendations</h1>
            <p>
              Thanks for visiting my page, kindly drop a recommendation based on
              past experiences you&apos;ve had with me.
            </p>
          </div>

          <div className={styles.recommendations}>
            <form className={styles.formContainer} onSubmit={sendRecommendation}>
              <label className="text-zinc-500 dark:text-zinc-600 text-sm">
                What would you like to say about {props.profile.name}?
              </label>
              <input
                name="summary"
                className="px-4 border border-zinc-200 dark:border-zinc-900 bg-transparent radius-100 my-4 rounded-md py-6"
                type="text"
              />

              <button className="btn btn-primary mb-4" type="submit">Send</button>
            </form>
          </div>

          {/* Recommend 1 */}
          <section className={styles.recommendContainer}>

            {
              recommendations.map(recommendation => {
                const dateObj = new Date(recommendation.createdAt);
                let hour = dateObj.getHours();
                const minute = dateObj.getMinutes();
                let ampm = "am";
                if( hour > 12 ) {
                    hour -= 12;
                    ampm = "pm";
                }
                return (
                  <article className={styles.recommendCard} key={recommendation.id}>
              <div className="flex items-center">
                <a href="spekni.vercel.app">
                  <Image
                    className="rounded-full"
                    src={recommendation.user.image}
                    // src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/eke_tuqz8f.png"
                    width="40px"
                    height="40px"
                    alt="User"
                    title={recommendation.user.name}
                  />
                </a>
                <h3 className="font-medium ml-3">{recommendation.user.name}</h3>
              </div>
              <div className={styles.recommendContent}>
                <p className="text-sm mt-1 mb-3">
                  {recommendation.summary}
                </p>
                <small className="text-zinc-500 dark:text-zinc-600 text-xs flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <CalendarIcon width="12px" height="12px" title="Time" />{" "}
                    <span>{dateObj.toLocaleDateString()}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <ClockIcon width="12px" height="12px" title="Time" />
                    <span>{`${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute} ${ampm}`}</span>
                  </span>
                </small>
              </div>
            </article>
                );
              })
            }
          </section>
        </section>

      </div>
    </ProfileLayout>
  );
}

export default Recommendation;