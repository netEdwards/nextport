import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'
import { oxygen } from './fonts'

export default function Home() {
  return (
    <main className={`${styles.main} ${oxygen.variable}`}>
      
      <nav className={styles.nav1}>
        <div className={styles.home1}>
          <Link href="/" className={`${styles.link2} ${styles.navdecor}`}>HOME</Link>
        </div>
        <div className={styles.one} >
          <Link href="/editorial" className={`${styles.link1} ${styles.navdecor}`}>EDITORIAL</Link>
          <Link href="/mythos" className={`${styles.link1} ${styles.navdecor}`}>MYTHOS</Link>
          <Link href="/projects" className={`${styles.link1} ${styles.navdecor}`}>PROJECTS</Link>
          <Link href="/social" className={`${styles.link1} ${styles.navdecor}`}>SOCIAL</Link>
        </div>

      </nav>

    </main>
  )
}
