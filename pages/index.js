import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Next.js App
        </h1>

        <p className={styles.description}>
          This app helps you manage three facets: Identity, Architecture, and Experience, and their intersections.
        </p>

        <div className={styles.grid}>
          <Link href="/identity">
            <a className={styles.card}>
              <h2>Identity &rarr;</h2>
              <p>Manage Purpose, Content, Story, and People.</p>
            </a>
          </Link>
          <Link href="/architecture">
            <a className={styles.card}>
              <h2>Architecture &rarr;</h2>
              <p>Manage Capability, Asset, Process, and People.</p>
            </a>
          </Link>
          <Link href="/experience">
            <a className={styles.card}>
              <h2>Experience &rarr;</h2>
              <p>Manage Task, Channel, Journey, and People.</p>
            </a>
          </Link>
          <Link href="/organization">
            <a className={styles.card}>
              <h2>Organization &rarr;</h2>
              <p>Manage the intersection of Identity and Architecture.</p>
            </a>
          </Link>
          <Link href="/product">
            <a className={styles.card}>
              <h2>Product &rarr;</h2>
              <p>Manage the intersection of Architecture and Experience.</p>
            </a>
          </Link>
          <Link href="/brand">
            <a className={styles.card}>
              <h2>Brand &rarr;</h2>
              <p>Manage the intersection of Experience and Identity.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created by Your Name &copy; 2023</p>
      </footer>
    </div>
  )
}
