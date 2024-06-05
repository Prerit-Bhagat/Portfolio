import React from "react";

import styles from "./about.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src='https://www.svgrepo.com/show/226261/cursor-pointer.svg' alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src='https://cdn-icons-png.freepik.com/512/3703/3703033.png' alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>AI/ML Developer</h3>
              <p>
                I have experience developing fast and optimised ML Models.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src='https://e7.pngegg.com/pngimages/634/984/png-clipart-flat-design-web-design-graphic-design-ui-ux-search-engine-optimization-business.png' alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};