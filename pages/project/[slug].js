import Mask from "../../components/Mask/Mask";
import Layout from "../../components/Navbar/Layout";
import Seo from "../../components/Seo/Seo";
import styles from '../../styles/Project.module.sass'
import { fetchAPI } from "../../lib/api";
import Content from "../../components/Content/Content";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Credits from "../../components/Credits/Credits";
import Carousel from "../../components/Carousel/Carousel";
import ProjectIcons from "../../components/ProjectIcons/ProjectIcons";
import ProjectPallet from "../../components/ProjectPallet/ProjectPallet";
import Slides from "../../components/Slides/Slides";
import PhoneMock from "../../components/PhoneMock/PhoneMock";
import BG from "../../components/PhoneMock/BG";

const Project = ({ project, categories }) => {
    const seo = {
        metaTitle: project.title,
        metaDescription: project.description,
        shareImage: project.image,
        project: true,
    };
    const { title } = project.content[0]

    return (
        <Layout categories={categories}>
            <Seo seo={seo} />
            <div className={styles.proj_contianer}>
                <Content {...project} />

                <div className={styles.proj_credits}>
                    <SectionHeader theme title="Credits" subtitle="From Native Apps to Websites" />
                    <div className={styles.proj_credSection}>
                        <Credits {...project} />
                    </div>
                </div>
                <div className={styles.proj_carouselSection}>

                    <div className={styles.proj_credits2}>
                        <SectionHeader title={title} subtitle="Screensshots, App Icons & Color Pallet" />
                        <ProjectIcons {...project} />
                        <ProjectPallet {...project} />
                    </div>

                    <div className={styles.proj_carousel}>
                        <div className={styles.proj_mockBG}>
                            <BG />
                        </div>
                        <div className={styles.proj_mock}>
                            <PhoneMock />
                        </div>
                        <Carousel {...project} />
                    </div>

                </div>
                <div className={styles.proj_largeMedia}>
                    <div className={styles.proj_cmsContainer}>
                        <SectionHeader title="CMS" subtitle="Content Management System Backend " />
                    </div>
                    <Slides {...project} />
                </div>


            </div>
        </Layout>
    )
}



export async function getStaticPaths() {
    const projects = await fetchAPI('/projects');
    console.log(projects)
    return {
        paths: projects.map((project) => ({
            params: {
                slug: String(project.slug)
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const projects = await fetchAPI(`/projects?slug=${params.slug}`)
    const categories = await fetchAPI('/categories');
    return {
        props: { project: projects[0], categories },
        revalidate: 1,
    }
}

export default Project;