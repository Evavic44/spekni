import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import prisma from "../../prisma";
import { setUser } from "../../store/users/action";
import axios from "axios";
import { useSession } from "next-auth/react";

const ZERO = 0; // for the sake of good code :)

async function endorseUser(u_id, current_user_email, skill_id) {
  console.log(u_id, current_user_email, skill_id);
  try {
    const res = await axios.post("/api/users/endorsement", {
      data: JSON.stringify({ u_id, skill_id, f_uid: current_user_email })
    });
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
}

const Skill = (props) => {
  const endorsed = props.detail.endorsements.map(endoser => endoser?.endorsers?.email === props.userSession?.user.email).includes(true);
  return (
    <article className={styles.endorsementCard}>
      <div className={styles.skill}>
        {!endorsed ? <PlusCircleIcon
          className="cursor-pointer"
          width={27}
          height={27}
          alt="check circle"
          onClick={() => endorseUser(props.userId, props.userSession?.user.email, props.detail.id)}
        /> : <CheckCircleIcon
          className="text-green-600"
          width={27}
          height={27}
          alt="check circle"
        />}
        <h2 className="ml-4 font-medium">{props.detail.skillName}</h2>
      </div>
      {props.detail.endorsements.length !== ZERO ? <>
        <div className={styles.endorseImage}>
          {props.detail.endorsements.map(endorser => (
            <a href="spekin.vercel.app" key={endorser.endorsers.id}>
              <img
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
            if ((idx + 1) === props.detail.endorsements.length) return (<span key={endorser.endorsers.id}>{endorser.endorsers.name}</span>);
            return <span key={endorser.endorsers.id}>{endorser.endorsers.name},</span>;
          })}
        </div>
      </> : null}
    </article>
  );
};

function Endorsement(props) {
  const dispatch = useDispatch();
  dispatch(setUser(props.profile));
  const [skills, setSkills] = useState([]);
  const { data: session } = useSession();


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
            {skills.map(skill => <Skill key={skill.id} detail={skill} userId={props.profile.userId} userSession={session} />)}
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