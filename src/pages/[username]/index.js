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
                className="cursor-pointer text-green-600"
                width={27}
                height={27}
                alt="check circle"
              />
              <h2 className="ml-4 font-medium">Node JS</h2>
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
              <span>James Clear,</span>
              <span>Ben Cluster,</span>
              <span>Sarah Conors,</span>
              <span>Bob Dylan,</span>
              <span>Mark Knopfler,</span>
              <span>Steve Vai,</span>
              <span>Mellisande Cole,</span>
              <span>Paul Stiller,</span>
              <span>Brad Traversy,</span>
              <span>Scott Tolinski</span>
            </div>
          </article>

          {/* Skills Two */}
          <article className={styles.endorsementCard}>
            <div className={styles.skill}>
              <CheckCircleIcon
                className="cursor-pointer text-green-600"
                width={27}
                height={27}
                alt="check circle"
              />
              <h2 className="ml-4 font-medium">Python</h2>
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
              <span>Sarah Conors,</span>
              <span>Spiff Jekey Green</span>
              <span>Steve Vai,</span>
              <span>Mellisande Cole,</span>
              <span>Paul Stiller,</span>
              <span>Brad Traversy,</span>
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
              <h2 className="ml-4 font-medium">GraphQL</h2>
            </div>
          </article>

          {/* Skills Four */}
          <article className={styles.endorsementCard}>
            <div className={styles.skill}>
              <PlusCircleIcon
                className="cursor-pointer"
                width={27}
                height={27}
                alt="check circle"
              />
              <h2 className="ml-4 font-medium">Next JS</h2>
            </div>
          </article>

          {/* Skills Five */}
          <article className={styles.endorsementCard}>
            <div className={styles.skill}>
              <CheckCircleIcon
                className="cursor-pointer text-green-600"
                width={27}
                height={27}
                alt="check circle"
              />
              <h2 className="ml-4 font-medium">TypeScript</h2>
            </div>

            <div className={styles.endorseImage}>
              <a href="spekin.vercel.app">
                <Image
                  src="https://res.cloudinary.com/victoreke/image/upload/v1657623824/Spekni/eke_tuqz8f.png"
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
              <span>Sarah Conors,</span>
              <span>Spiff Jekey Green</span>
              <span>Steve Vai,</span>
              <span>Mellisande Cole,</span>
              <span>Paul Stiller,</span>
              <span>Brad Traversy,</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

Endorsement.PageLayout = ProfileLayout;

export default Endorsement;
