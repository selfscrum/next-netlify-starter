import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/identity">
          <a className={styles.link}>Identity</a>
        </Link>
        <Link href="/architecture">
          <a className={styles.link}>Architecture</a>
        </Link>
        <Link href="/experience">
          <a className={styles.link}>Experience</a>
        </Link>
      </nav>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
