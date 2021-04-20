import React from 'react'
import styles from '../../styles/Project.module.sass'

function LargeMedia({ project }) {
    // const { images } = project.content[3]
    console.log(project)

    return (
        <div className={styles.proj_extras}>
            {/* {
                project.content[3].images.map(function (src, i) {
                    return (
                        <img
                            key={i}
                            style={{ width: '85vw', margin: 'auto', marginBottom: '50px' }}
                            src={src.url.includes("upload")
                                ? `http://localhost:1337${src.url}`
                                : src.url
                            }
                        />
                    )
                })
            } */}

        </div>
    )
}
export default LargeMedia