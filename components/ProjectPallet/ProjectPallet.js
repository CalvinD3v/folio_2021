import React from 'react'
import styles from './ProjectPallet.module.sass'

function ProjectPallet(props) {
    const { color_pallet } = props
    return (
        <div className={styles.pp_container}>
            {
                color_pallet.map((data, i) => {
                    return (
                        <img
                            key={i}
                            src={data.url.includes("upload")
                                ? `http://localhost:1337${data.url}`
                                : data.url
                            }
                            alt={data.alternativeText | data.name}
                            className={styles.pp_iconImg}
                        />
                    )
                })
            }
        </div>
    )
}
export default ProjectPallet