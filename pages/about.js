import React from 'react'
import HeroText from '../components/HeroText/HeroText'
import HeroImg from '../components/Icons/HeroImg'
import Layout from '../components/Navbar/Layout'
import Seo from '../components/Seo/Seo'
import { fetchAPI } from '../lib/api'
import styles from '../styles/Home.module.sass'


function about({ categories, home }) {
    return (

        <Layout categories={categories}>
            <Seo seo={home.seo} />
            <main>
                <section className={styles.mainContainer}>
                    <HeroImg />
                    <HeroText />
                </section>
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    //Running API calls in parallel

    const [ categories, home] = await Promise.all([
        fetchAPI('/categories'),
        fetchAPI('/home'),
    ]);

    return {
        props: { categories, home },
        revalidate: 1,
    }
}
export default about
