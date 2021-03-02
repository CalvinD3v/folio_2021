import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectCard.module.sass'

function ProjectCard(props) {
    const { title, description, coverImage, company, slug, Start, Finish } = props


    return (
        <Link as={`/project/${slug}`} href='/project/[id]'>
            <a className={styles.p_container}>
                <div className={styles.imageContainer}>
                    {Start && <span className={styles.p_date}>{Start} • {Finish}</span>}
                    <img
                        src={coverImage.url.includes("upload")
                            ? `http://localhost:1337${coverImage.url}`
                            : coverImage.url
                        }
                        alt={coverImage.alternativeText | coverImage.name}
                        className={styles.proj_img}
                    />

                    <Link href={`${company.Url}`} passHref={true}>
                        <a className={styles.logoContainer} target="_blank">
                            <div>
                                <img
                                    src={company.Logo.url}
                                    src={company.Logo.url.includes("upload")
                                        ? `http://localhost:1337${company.Logo.url}`
                                        : company.Logo.url
                                    }
                                    width={'90px'}
                                    height={'auto'}
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <h4 className={styles.p_mainTitle}>{title}</h4>
                <h5 className={styles.p_subTitle}>{description}</h5>
            </a>
        </Link>

    )
}
export default ProjectCard