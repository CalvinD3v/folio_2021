import React from 'react'
import Company from './Company/Company'
import styles from './Credits.module.sass'

function Credits(props) {
    const { content } = props.content[1]
    
    return (
        <div className={styles.crd_container}>
            <Company {...props} />
            <div className={styles.crd_paragrah}>
                <p>{content}</p>
            </div>
        </div>
    )
}
export default Credits