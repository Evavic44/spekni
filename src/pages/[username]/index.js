import React from "react";
import { useDispatch } from "react-redux";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import prisma from "../../prisma";
import { setUser } from "../../store/users/action";

function Endorsement(props) {
  const dispatch = useDispatch();
  dispatch(setUser(props.profile));

  return (
    <ProfileLayout profile={props.profile}>
      <div>
        <section className={styles.container}>
          <div className={styles.header}>
            <h1>Endorsements</h1>
            <p>
              Thanks for visiting my page, kindly endorse my skills based on past
              experiences you&apos;ve had with me.
            </p>
          </div>
          <div className={styles.endorsements}>
            {/* Skill 1 */}
            {/* <Skill /> */}

            {/* Skills Three */}
            <article className={styles.endorsementCard}>
              <div className={styles.skill}>
                <PlusCircleIcon
                  className="cursor-pointer"
                  width={27}
                  height={27}
                  alt="check circle"
                />
                <h2 className="ml-4 font-medium">GraphQL</h2>
              </div>
            </article>

          </div>
        </section>
      </div>
    </ProfileLayout>
  );
}

export default Endorsement;

export async function getServerSideProps({ resolvedUrl }) {
  // const username = resolvedUrl.slice(1).trim();
  const username = resolvedUrl.split("/")[1].trim();
  const user = await prisma.profile.findUnique({ where: { username }, include: { user: true } });
  if(user) {
    user.createdAt = user.createdAt.toString();
    const endorsementCount = await prisma.endorsement.count({ where: { userId: user.userId }});
    user.endorsements = endorsementCount;
  }
  return {
    props: {
      profile: user,
    },
  };
}