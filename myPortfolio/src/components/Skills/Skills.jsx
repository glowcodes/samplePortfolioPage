import React from 'react';
import styles from  './Skills.module.css'

export const Skills = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.listItem}>
                <img className={styles.iconImg} src="/assets/skills/react.png" alt='React Icon'/>
                <p className={styles.iconName}>React</p>
            </div>
            <div className={styles.listItem}>
                <img className={styles.iconImg} src="/assets/skills/node.png" alt='React Icon'/>
                <p className={styles.iconName}>Node</p>
            </div>
            <div className={styles.listItem}>
                <img className={styles.iconImg} src="/assets/skills/python.png" alt='React Icon'/>
                <p className={styles.iconName}>Python</p>
            </div>
        </div>
    </section>
  )
}
