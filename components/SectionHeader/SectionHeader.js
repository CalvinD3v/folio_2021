import React from 'react'
import styles from './SectionHeader.module.sass'

export default function SectionHeader(props) {
    const {title, subtitle, theme} = props
    return (
        <div className={styles.sh_container}>
            <h2 className={[!theme ? styles.mainTitle : styles.mainTitle_dark]}>{title}<span style={{color: '#f69420'}}>.</span></h2>
            <h2 className={[!theme ? styles.sh_subtTitle : styles.sh_subtTitle_dark ]}>{subtitle}</h2>
        </div>
    )
}
