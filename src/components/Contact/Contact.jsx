import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:tannm25022002@gmail.com">tannm25022002@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/phone.png")} alt="Phone icon" />
          <a href="tel:+84338179800">0338179800</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/tan-nguyen-minh-a21289272/">Tan Nguyen's LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Minhtandev">github.com/Minhtandev</a>
        </li>
      </ul>
    </footer>
  );
};
