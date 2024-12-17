import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gloria</h1>
        <h4 className={styles.brief}><span></span>Web developer | Machine learning engineer | Cloud enthusiast</h4>
        <p className={styles.description}>I'm a software developer with 3 years of experience with frontend and backend web technologies as well as AI modelling. Reach out if you'd like to interact</p>
        <a className={styles.contactBtn} href='mailto:mayoyogloria4@gmail.com'>Contact me</a>
      </div>
        <img className={styles.heroImg} src="/assets/hero/profile.png" alt='Hero image of me'/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  );
};
