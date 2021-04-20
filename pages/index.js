import Head from 'next/head'
import { useState } from 'react'
import HeroText from '../components/HeroText/HeroText'
import HeroImg from '../components/Icons/HeroImg'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import styles from '../styles/Home.module.sass'
import { fetchQuery } from '../utils/utils'
import Link from 'next/link'
import Layout from '../components/Navbar/Layout'
import Seo from '../components/Seo/Seo'
import { fetchAPI } from '../lib/api'


const Home = ({ projects, categories, home }) => {



  return (
    <Layout categories={categories}>
      <Seo seo={home.seo} />
      <main>
        <section className={styles.mainContainer}>
          <HeroImg />
          <HeroText />
        </section>
        <section className={styles.sectionHeader}>
          <SectionHeader 
            title="Projects" 
            subtitle="From Native Apps to Websites" 
          />
          <div className={styles.projectContainer}>
            {
              projects.map(function (data, index) {
                return <ProjectCard {...data} key={index} />
              })
            }
          </div>
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  //Running API calls in parallel

  const [projects, categories, home] = await Promise.all([
    fetchAPI('/projects'),
    fetchAPI('/categories'),
    fetchAPI('/home'),
  ]);

  return {
    props: { projects, categories, home},
    revalidate: 1,
  }
}


// export async function getServerSideProps() {
//   const projects = await fetchQuery('projects')
//   console.log(projects)
//   return {
//     props: {
//       projects
//     }
//   }
// }

export default Home; 