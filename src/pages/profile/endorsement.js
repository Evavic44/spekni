import React from "react";
import ProfileLayout from "../../components/ProfileLayout";
import styles from "../../styles/ProfileChild.module.css";
import { CheckCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Endorsement() {
  return (
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
          <article className={styles.endorsementCard}>
            <div className={styles.skill}>
              <CheckCircleIcon
                className="cursor-pointer text-green-500"
                width={27}
                height={27}
                alt="check circle"
              />
              <h3 className="ml-4 font-medium">Node JS</h3>
            </div>
            <div className={styles.endorseImage}>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/59_vgivbb.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Bob Dylan"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/58_r3y53w.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Mark Knopfler"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800889/Spekni/85_rdz3zj.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Sophia Turner"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/66_plwh9y.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Popppins Man"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800889/Spekni/78_zo6y8k.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Scott Tolinski"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/51_duxpdt.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Cold Stone"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/14_uy57ue.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Balon D'or"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/56_rchjob.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Paulina Pal"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800887/Spekni/90_u9ltbe.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Owen Collas"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/30_nml63g.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Poly Landy"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800887/Spekni/99_bsdhcr.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Ade Badu"
                />
              </a>

              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800887/Spekni/91_mxtab8.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Victoria Beckham"
                />
              </a>
            </div>
            <div className={styles.endorseName}>
              <p>James Clear,</p>
              <p>Ben Cluster,</p>
              <p>Sarah Conors,</p>
              <p>Bob Dylan,</p>
              <p>Mark Knopfler,</p>
              <p>Steve Vai,</p>
              <p>Mellisande Cole,</p>
              <p>Paul Stiller,</p>
              <p>Brad Traversy,</p>
              <p>Scott Tolinski</p>
            </div>
          </article>

          {/* Skills Two */}
          <article className={styles.endorsementCard}>
            <div className={styles.skill}>
              <CheckCircleIcon
                className="cursor-pointer text-green-500"
                width={27}
                height={27}
                alt="check circle"
              />
              <h3 className="ml-4 font-medium">Python</h3>
            </div>
            <div className={styles.endorseImage}>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800889/Spekni/85_rdz3zj.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Sophia Turner"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Spiff Jekey Green"
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/spiff_yuk6sb.jpg"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/66_plwh9y.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Popppins Man"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/51_duxpdt.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Cold Stone"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/56_rchjob.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Paulina Pal"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/30_nml63g.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Poly Landy"
                />
              </a>
            </div>
            <div className={styles.endorseName}>
              <p>Sarah Conors,</p>
              <p>Spiff Jekey Green</p>
              <p>Steve Vai,</p>
              <p>Mellisande Cole,</p>
              <p>Paul Stiller,</p>
              <p>Brad Traversy,</p>
            </div>
          </article>

          {/* Skills Three */}
          <article className={styles.endorsementCard}>
            <div className={styles.skill}>
              <PlusCircleIcon
                className="cursor-pointer"
                width={27}
                height={27}
                alt="check circle"
              />
              <h3 className="ml-4 font-medium">GraphQL</h3>
            </div>
          </article>

          {/* Skills Four */}
          <article className={styles.endorsementCard}>
            <div className={styles.skill}>
              <CheckCircleIcon
                className="cursor-pointer text-green-500"
                width={27}
                height={27}
                alt="check circle"
              />
              <h3 className="ml-4 font-medium">Next JS</h3>
            </div>

            <div className={styles.endorseImage}>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/eke_tuqz8f.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Victor Eke"
                />
              </a>
            </div>
            <div className={styles.endorseName}>
              <p>Victor Eke</p>
            </div>
          </article>

          {/* Skills Five */}
          <article className={styles.endorsementCard}>
            <div className={styles.skill}>
              <CheckCircleIcon
                className="cursor-pointer text-green-500"
                width={27}
                height={27}
                alt="check circle"
              />
              <h3 className="ml-4 font-medium">TypeScript</h3>
            </div>

            <div className={styles.endorseImage}>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/eke_tuqz8f.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Victor Eke"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Spiff Jekey Green"
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/spiff_yuk6sb.jpg"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/nick_a14bi5.jpg"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Popppins Man"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/51_duxpdt.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Cold Stone"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/56_rchjob.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Paulina Pal"
                />
              </a>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657800888/Spekni/30_nml63g.png"
                  width="40px"
                  height="40px"
                  alt="User"
                  title="Poly Landy"
                />
              </a>
            </div>
            <div className={styles.endorseName}>
              <p>Victor Eke,</p>
              <p>Spiff Jekey Green</p>
              <p>Steve Vai,</p>
              <p>Mellisande Cole,</p>
              <p>Paul Stiller,</p>
              <p>Brad Traversy,</p>
            </div>
          </article>
        </div>
      </section>
      <footer className="flex flex-col items-center justify-center text-center py-20">
        <svg
          width="30"
          height="38"
          viewBox="0 0 57 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="5.27344"
            y="5.78271"
            width="50.5421"
            height="48.1898"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.25429e-07 65.7294V8.48122C6.25429e-07 6.23186 0.984447 4.07463 2.73677 2.48409C4.4891 0.893554 6.86576 0 9.34393 0H46.7196C49.1978 0 51.5745 0.893554 53.3268 2.48409C55.0791 4.07463 56.0636 6.23186 56.0636 8.48122V65.7294C56.0639 66.0976 55.9585 66.4595 55.7579 66.7796C55.5573 67.0996 55.2683 67.3667 54.9194 67.5545C54.5706 67.7424 54.1738 67.8446 53.7682 67.851C53.3626 67.8574 52.9622 67.7678 52.6063 67.591L28.0318 55.4205L3.45725 67.591C3.10139 67.7678 2.70095 67.8574 2.29536 67.851C1.88977 67.8446 1.49301 67.7424 1.14413 67.5545C0.795246 67.3667 0.506276 67.0996 0.305661 66.7796C0.105047 66.4595 -0.000296174 66.0976 6.25429e-07 65.7294Z"
            fill="black"
          />
          <path
            d="M17.5049 46.3385C16.6171 46.8091 15.6097 45.9844 15.7891 44.9316L17.6981 33.6901L9.59507 25.7141C8.83836 24.9679 9.23166 23.6037 10.246 23.4563L21.5116 21.8022L26.5348 11.5185C26.9879 10.5916 15.8646 45.1734 16.2244 46.1876L31.1786 16.6603L33.6903 21.8022L44.9558 23.4563C45.9702 23.6037 46.3635 24.9679 45.6044 25.7141L37.5037 33.6901L39.4127 44.9316C39.5921 45.9844 38.5847 46.8091 37.6969 46.3385L27.5975 40.9769L17.6981 46.3385H17.5049Z"
            fill="white"
          />
        </svg>

        <p className="mt-3 text-sm">Spekni Endorsements</p>
      </footer>
    </div>
  );
}

Endorsement.PageLayout = ProfileLayout;

export default Endorsement;
