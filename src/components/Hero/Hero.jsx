import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tan Nguyen</h1>
        <p className={styles.description}>
          I'm a frontend developer with three years of researching, learning about web programming and one year of experience working as Frontend Developer with ReactJS. Reach out if you'd like to learn more!
        </p>
        <a href="#contact" className={styles.contactBtn}>
        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        {/* <svg width="210px" height="75px" viewBox="0 0 210 75" class="border">
          <polyline points="219,1 219,59 1,59 1,1 219,1" class="bg-line" />
          <polyline points="219,1 219,59 1,59 1,1 219,1" class="hl-line" />
        </svg> */}
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
