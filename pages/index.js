import styles from '../styles/Home.module.css'
import Head from 'next/head'
export default function Home() {
  return (
    <div className={styles.header} >
      <Head>
        <title>HomeBoard</title>
      </Head>
      <h1>Welcome</h1>
    </div>
  )
}
