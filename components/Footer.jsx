import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/image/tapeneck.jpeg" alt="" layout="fill"  />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Fashion feeds me more than food!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find Our Show House</h1>
          <p className={styles.text}>
            <br/> Filzplaza, Admiralty Way
            <br/>106104, Lekki
          </p>
          <p className={styles.text}>
            <br/> Filzplaza, Admiralty Way
            <br/>106104, Lekki
          </p>
          <p className={styles.text}>
            <br/> Filzplaza, Admiralty Way
            <br/>106104, Lekki
          </p>
          <p className={styles.text}>
            <br/> Filzplaza, Admiralty Way
            <br/>106104, Lekki
          </p>
        </div>

        <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
       <p className={styles.text}> MONDAY UNTIL FRIDAY
        <br/>9AM TO 5PM
        </p>
        </div>
      </div>
    </div>
  )
}

export default Footer