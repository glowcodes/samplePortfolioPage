import React from 'react';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <img className={styles.icon} src='/assets/nav/closeIcon.png'/>
            <a className={styles.iconName} href='mailto:mayoyogloria4@gmail.com'>Email</a>
        </div>
        <div className={styles.content}>
        <img className={styles.icon} src='/assets/nav/closeIcon.png'/>
            <a className={styles.iconName} href='https://www.linkedin.com/in/gloria-mayoyo'>LinkedIn</a>
        </div>
        <div className={styles.content}>
        <img className={styles.icon} src='/assets/nav/closeIcon.png'/>
            <a className={styles.iconName} href='https://github.com/glowcodes'>Github</a>
        </div>
    </section>
  );
};
