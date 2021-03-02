import React from 'react'
import CalvinChou from '../Icons/CalvinChou'
import styles from './Navbar.module.sass'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Menu from '../Icons/Menu'


function Navbar({ categories }) {
    const router = useRouter()

    return (
        <div className={styles.nb_container}>
            {/* application logo */}
            <Link href='/'>
                <a>
                    <CalvinChou />
                </a>
            </Link>
            <div className={styles.nb_links}>
                <Link href='/'>
                    <a className={[router.pathname === '/about' ? styles.nav_link_active : styles.nav_link]}>
                        About Me
                    </a>
                </Link>
                {categories.map((category) => {
                    return (
                        <Link key={category.id} as={`/category/${category.slug}`} href="/category/[id]">
                            <a className={[router.pathname === category.slug ? styles.nav_link_active : styles.nav_link]}>{category.title}</a>
                        </Link>
                    );
                })}
                <Link href='/'>
                    <a className={[router.pathname === '/contact' ? styles.nav_link_active : styles.nav_link]}>
                        Let's Chat
                    </a>
                </Link>
                <Menu marginLeft={'3em'} />
            </div>
        </div>
    )
}
export default Navbar; 