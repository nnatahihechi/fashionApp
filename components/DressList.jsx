import React from 'react'
import styles from '../styles/DressList.module.css'
import DressCard from './DressCard'


const DressList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> The Best Dress for the Season</h1>
            <p className={styles.desc}>
                Summer is the period of the sun. It is the most sizzling period of the complete year. Consuming light and suitable attire is desirable in the summer
                season. With the warmth increasing, the summer season will be the season to take those two pieces and swimsuits out to proceed to the beach or the neighborhood swimming pool.
                {/* In the summer season, you will definitely observe free-to-wear tank tops, flippy jumpers, shorts, radiant T-shirts, and slippers. It is the
                single-season where layering is not needed. Find the classic womens western wear, summer apparel and consume them with your preferred loafers to go the
                distance, and is all about the popular trend. Summer dresses nevermore go out of fashion. */}
            </p>

            <div className={styles.wrapper}>
                <DressCard />
                <DressCard />
                <DressCard />
                <DressCard />
                <DressCard />
                <DressCard />
                <DressCard />
                <DressCard />
                <DressCard />
                <DressCard />
            </div>
        </div>
    )
}

export default DressList