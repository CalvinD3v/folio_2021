import React from 'react'
import Image from 'next/image'
import styles from './Company.module.sass'

export default function Company(props) {
    const { Title, data_location, Logo, Url } = props.company
    return (
        <a href={Url} target="_blank" className={styles.com_innerContainer}>
               
                {/* <img className={styles.com_logoImage} src={`http://localhost:1337${Logo.url}`} />  */}
                <img className={styles.com_logoImage} 
                    src={Logo.url.includes("upload")
                    ? `http://localhost:1337${Logo.url}`
                    : Logo.url
                }
                />
                
                <div className={styles.com_companyText}>
                    <h4>{Title}</h4>
                    <span>{data_location}</span>
                </div>

        </a>
    )
}
