import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import DressList from '../components/DressList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>clothings</title>
        <meta name="description" content="best online females in Nigeria " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <DressList />
    </div>
  )
}
