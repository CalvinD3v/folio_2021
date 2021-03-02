import React from 'react'
import styles from './HeroText.module.sass'

function HeroText() {
    return (
        <div className={styles.textContainer}>
            <h1 className={styles.mainTitle}> Creative{' '}Developer</h1>
            <div className={styles.subContainer}>
                <h2 className={styles.locationTitle}>From Johannesburg, South Africa</h2>
                <h3 className={styles.signature}> Calvin Chou </h3>
            </div>
        </div>
    )
}
export default HeroText