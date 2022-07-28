import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import prisma from "../../prisma";
import { setUser } from "../../store/users/action";
import axios from "axios";

const ZERO = 0; // for the sake of good code :)

const Skill = (props) => {
  if (props.detail.endorsements.length === ZERO) {
    return (
      <article className={styles.endorsementCard}>
        <div className={styles.skill}>
          <PlusCircleIcon
            className="cursor-pointer"
            width={27}
            height={27}
            alt="check circle"
          />
          <h2 className="ml-4 font-medium">{props.detail.skillName}</h2>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.endorsementCard}>
      <div className={styles.skill}>
        <CheckCircleIcon
          className="cursor-pointer text-green-600"
          width={27}
          height={27}
          alt="check circle"
        />
        <h2 className="ml-4 font-medium">{props.detail.skillName}</h2>
      </div>
      <div className={styles.endorseImage}>
        {props.detail.endorsements.map(endorser => (
          <a href="spekin.vercel.app">
            <Image
              src={endorser.endorsers.image}
              width="40px"
              height="40px"
              alt="User"
              title={endorser.endorsers.name}
            />
          </a>
        ))}
      </div>
      <div className={styles.endorseName}>
        {props.detail.endorsements.map((endorser, idx) => {
          if ((idx + 1) === props.detail.endorsements.length) return (<span>{endorser.endorsers.name}</span>);
          return <span>{endorser.endorsers.name},</span>;
        })}
      </div>
    </article>
  );
};

function Endorsement(props) {
  const dispatch = useDispatch();
  dispatch(setUser(props.profile));
  const [skills, setSkills] = useState([]);

  const fetchSkills = async () => {
    try {
      const res = await axios(`/api/users/skills?u_id=${props.profile.userId}`);
      if (res.data.success) setSkills(res.data.skills);
    } catch (err) {
      alert("Sorry an error occured please refresh");
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

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
            {skills.map(skill => <Skill key={skill.id} detail={skill} />)}
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
  if (user) {
    user.createdAt = user.createdAt.toString();
    const endorsementCount = await prisma.endorsement.count({ where: { userId: user.userId } });
    user.endorsements = endorsementCount;
  }
  return {
    props: {
      profile: user,
    },
  };
}