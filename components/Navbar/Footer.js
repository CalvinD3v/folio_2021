import React from 'react'
import styles from './Navbar.module.sass'

export default function Footer() {
    const [date, setDate] = React.useState(new Date().getFullYear())

    return (
        <div className={styles.footer_container}>
            <p>Copyright {date} © Calvin Chou </p>
        </div>
    )
}
