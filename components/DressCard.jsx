import styles from '../styles/DressCard.module.css'
import Image from "next/image"

const DressCart = () => {
  return (
    <div className={styles.container}>
    <Image src="/image/beachwear1.jpeg" alt="" width="500" height="500"/>
    <h1 className={styles.title}>
    The outfit for you 
    </h1>
    <span className={styles.price}>
      $25.30
    </span>
    <p className={styles.desc}>
      Two piece summer wear, skin friendly and an attractive outfit
      </p>
    </div>
  )
}

export default DressCart