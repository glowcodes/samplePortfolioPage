import React from 'react';
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImg} src='/assets/about/aboutImg.png' alt='My dev experience'/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src='/assets/about/codingIcon.png'/>
                    <div className={styles.aboutItemText}>
                        <h4>Software Developer</h4>
                        <p>I am a fullstact developer with experience in building responsive, functional and optimized sites. As a programmer I follow a solution-oriented approach to problems in order to analyse, design, implement and evaluate projects.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src='/assets/about/mlIcon.png'/>
                    <div className={styles.aboutItemText}>
                        <h4>Machine Learning Engineer</h4>
                        <p>I have specialized in designing and building intelligent models to solve real-world problems using data-driven solutions.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src='/assets/about/cloudIcon.png'/>
                    <div className={styles.aboutItemText}>
                        <h4>Cloud Enthusiast</h4>
                        <p>I am passionate about cloud as an alternative to local storage that is expensive and unsustainable at the current age of Big data </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
