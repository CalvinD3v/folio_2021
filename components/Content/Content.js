import React from 'react'
import styles from './Content.module.sass';
import Image from 'next/image'
import ImageComp from './ImageComp/ImageComp'
import ContentCopy from '../Content/ContentCopy/ContentCopy'

function Content(props) {
    return (
        <div className={styles.sector}>
            <div className={styles.Container}>
                <ContentCopy {...props} />

                <div className={styles.Contnet}>
                    <ImageComp {...props}/>
                </div>
                
            </div>
        </div>
    )
}



export default Content


