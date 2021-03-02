import React from 'react'
import styles from './ContentCopy.module.sass'
import SepIcon from '../SepIcon'

function ContentCopy({ stacks, title, description }) {
    return (
        <div className={styles.Contnet}>

            <span className={styles.ProfileCopy}>{title}</span>

            <p className={styles.ProfileSubTitle}>
                {description}
            </p>
            {stacks &&
                <span className={styles.heroContent}>
                    { stacks.map((data, i) => {
                        return <a key={i} className={styles.cc_linke} href={data.ExternalLink}>{data.Name}</a>
                    })}
                </span>
            }
            <div className={styles.cc_lowerContainer}>
                <span className={styles.cta_title}>Visit Live Demo </span>
                <SepIcon />
            </div>

        </div>
    )
}

export default ContentCopy;