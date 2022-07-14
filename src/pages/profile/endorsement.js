import React from "react";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";
import { CheckCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Endorsement() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.header}>
          <h1>Endorsements</h1>
          <p>
            Thanks for visiting my page, kindly endorse my skills based on past
            experiences you've had with me.
          </p>
        </div>
        <div className={styles.endorsements}>
          <div className={styles.skill}>
            <CheckCircleIcon
              className="cursor-pointer highlight"
              width={27}
              height={27}
              alt="check circle"
            />
            <h2 className="ml-4">NodeJS</h2>
          </div>
          <div className={styles.endorseImage}>
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/59_vgivbb.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/58_r3y53w.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800889/Spekni/85_rdz3zj.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/66_plwh9y.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800889/Spekni/78_zo6y8k.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/51_duxpdt.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/14_uy57ue.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/56_rchjob.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/30_nml63g.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800887/Spekni/44_akl5ap.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800887/Spekni/90_u9ltbe.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800887/Spekni/99_bsdhcr.png"
              width="40px"
              height="40px"
              alt="User"
            />
            <Image
              src="https://res.cloudinary.com/victoreke/image/upload/v1657800887/Spekni/91_mxtab8.png"
              width="40px"
              height="40px"
              alt="User"
            />
          </div>
          <div className={styles.endorseName}></div>
        </div>
      </section>
    </div>
  );
}

Endorsement.PageLayout = ProfileLayout;

export default Endorsement;
