import React from 'react'
import styles from './AboutCard_New.module.sass'

function AboutCard_New(props) {
    return (
        <div className={styles.acn_container}>
            <div className={styles.acn_imageContaner}>
                <span className={styles.acn_signature}>Calvin <span>Chou</span></span>
                <img src="https://calvinphotobucket.s3.eu-west-2.amazonaws.com/about.jpg"
                    className={styles.acn_image} />
                <p className={styles.acn_position}>Creative Director & Co-Founder</p>
            </div>
            <div className={styles.acn_leftColumn}>
                <h1 className={styles.acn_name}>Calvin <br /><span>Chou</span></h1>
                <p className={styles.acn_paragraph}>
                    Codestudio is a team of professional creatives who
                    have turned their passion and talent into one of the
                    most respected and recognised kasi based digital
                    agency in sounth africa. With Codestudio You’re
                    garanteed pixil perfect product with less than 50%
                    price rate than what you were going to pay at an
                    agancy based in some  fancy office .
                </p>
            </div>
        </div>
    )
}
export default AboutCard_New;