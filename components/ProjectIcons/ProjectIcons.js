import React from 'react'
import styles from './ProjectIcons.module.sass'

function ProjectIcons(props) {
    const { project_icons } = props
    return (
        <div className={styles.pi_container}>
            {
                project_icons.map((data, i) => {
                    return (
                        <img 
                            key={i} 
                            // src={`http://localhost:1337${data.url}`}
                            src={data.url}
                            alt={data.alternativeText | data.name}
                            className={styles.pi_iconImg} 
                        />
                    )
                })
            }
        </div>
    )
}
export default ProjectIcons